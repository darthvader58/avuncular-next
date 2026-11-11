/** Shared mark for light and dark surfaces; the adjacent wordmark supplies its name. */
export function BrandMark() {
  return (
    <img
      className="brand-mark"
      src="/brand/avuncular-mark.png?v=2"
      alt=""
      aria-hidden="true"
      width={48}
      height={48}
    />
  );
}
