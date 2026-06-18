import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import InnovationDomains from "./components/InnovationDomains.jsx";
import Services from "./components/Services.jsx";
import Founder from "./components/Founder.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Expo from "./components/Expo.jsx";
import Membership from "./components/Membership.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Background from "./components/Background.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Associations from "./components/Associations.jsx";
import CategoryExplorer from "./components/CategoryExplorer.jsx";
import FAQ from "./components/FAQ.jsx";
import FloatingActions from "./components/FloatingActions.jsx";

export default function App() {
  return (
    <div className="light-site min-h-screen overflow-hidden bg-transparent font-body text-white">
      <ScrollProgress />
      <Background />
      <Navbar />
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
        <Membership />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}
