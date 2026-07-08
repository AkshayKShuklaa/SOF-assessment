import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import InnovationDomains from "../components/InnovationDomains.jsx";
import Services from "../components/Services.jsx";
import Founder from "../components/Founder.jsx";
import Roadmap from "../components/Roadmap.jsx";
import Expo from "../components/Expo.jsx";
import Templates from "../components/Templates.jsx";
import Membership from "../components/Membership.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";
import Associations from "../components/Associations.jsx";
import CategoryExplorer from "../components/CategoryExplorer.jsx";
import FAQ from "../components/FAQ.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Associations />
      <InnovationDomains />
      <CategoryExplorer />
      <Services />
      <Founder />
      <Roadmap />
      <Expo />
      <Templates />
      <Membership />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
