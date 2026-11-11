import { Hero } from './components/Hero';
import { Facts } from './components/Facts';
import { Introduction } from './components/Introduction';
import { ServiceGrid } from './components/ServiceGrid';
import { Partner } from './components/Partner';
import { Campus } from './components/Campus';
import { ContactCallout } from './components/ContactCallout';
export default function HomePage() {
    return <>
  <Hero />
  <Facts />
  <Introduction />
  <ServiceGrid />
  <Partner />
  <Campus />
  <ContactCallout />
    </>;
}
