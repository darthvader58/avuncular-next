'use client';
import Link from 'next/link';
import { BrandMark } from '@/components/ui/BrandMark';
import { useState } from 'react';
import { navigationLinks } from '@/content/navigation';
import { siteConfig } from '@/config/site';
export function SiteHeader() {
    const [open, setOpen] = useState(false);
    return <><div className="topline"><div className="shell topline-inner"><span>MCA registered · New Delhi</span><a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a></div></div><header className="site-header"><div className="shell header-inner"><Link className="brand" href="/" aria-label="Avuncular Consultancy home"><BrandMark /><span>AVUNCULAR<small>CONSULTANCY PRIVATE LIMITED</small></span></Link><button className={open ? "menu-toggle is-open" : "menu-toggle"} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><span /><span /><span /></button><nav id="main-nav" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">{navigationLinks.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/contact-us" onClick={() => setOpen(false)}>Enquire now <span aria-hidden="true">↗</span></Link></nav></div></header></>;
}
