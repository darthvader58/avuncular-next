import Link from 'next/link';
import { Carousel } from '@/components/ui/Carousel';
export function Campus() { return (<section className="campus-section section-pad"><div className="shell campus-grid"><div><p className="eyebrow">Technoglobe campus</p><h2>Learning built around practical skills.</h2><p>See the training environment and career-focused courses at Technoglobe.</p><Link href="/partnership" className="button button-accent">About the association <span>↗</span></Link></div><Carousel /></div></section>); }
