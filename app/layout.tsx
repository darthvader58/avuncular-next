import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
export const metadata: Metadata = { icons: { icon: [{ url: '/favicon.ico?v=2', sizes: '16x16 32x32 48x48', type: 'image/x-icon' }, { url: '/brand/favicon-32.png?v=2', sizes: '32x32', type: 'image/png' }], apple: [{ url: '/brand/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' }] }, title: { default: 'Avuncular Consultancy | New Delhi', template: '%s | Avuncular Consultancy' }, description: 'Avuncular Consultancy Private Limited provides corporate, HR, education, training, trade and partnership services from New Delhi.' };
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) { return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>; }
