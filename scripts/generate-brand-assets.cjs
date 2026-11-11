// Regenerate web assets from the approved master: node scripts/generate-brand-assets.cjs
const sharp = require('sharp');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

async function main() {
  const source = path.join(root, 'assets/brand/avuncular-master.png');
  const output = path.join(root, 'public/brand');
  fs.mkdirSync(output, { recursive: true });
  for (const [name, size] of [['avuncular-mark', 256], ['favicon-32', 32], ['apple-touch-icon', 180]]) {
    await sharp(source).resize(size, size).png().toFile(path.join(output, `${name}.png`));
  }
  const sizes = [16, 32, 48];
  const images = await Promise.all(sizes.map(size => sharp(source).resize(size, size).png().toBuffer()));
  const header = Buffer.alloc(6 + 16 * sizes.length);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  let offset = header.length;
  images.forEach((buffer, index) => {
    const entry = 6 + 16 * index;
    header[entry] = sizes[index];
    header[entry + 1] = sizes[index];
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(buffer.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += buffer.length;
  });
  fs.writeFileSync(path.join(root, 'public/favicon.ico'), Buffer.concat([header, ...images]));
}
main().catch(error => { console.error(error); process.exitCode = 1; });
