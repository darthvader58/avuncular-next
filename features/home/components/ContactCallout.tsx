import Link from 'next/link';
import { siteConfig } from '@/config/site';
export function ContactCallout() { return (<section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow light">Start a conversation</p><h2>Tell us what you need help with.</h2></div><div className="actions"><Link className="button button-light" href="/contact-us">Contact the team <span>↗</span></Link><a className="button button-outline-light" href={siteConfig.contact.phoneHref}>Call {siteConfig.contact.phone}</a></div></div></section>); }
