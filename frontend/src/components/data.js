import {
  BadgeCheck,
  Binary,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  Cpu,
  Earth,
  Flame,
  Globe2,
  HeartPulse,
  Lightbulb,
  Megaphone,
  Orbit,
  Rocket,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";

import justdialLogo from "./partners/justdial.svg";
import indiamartLogo from "./partners/indiamart.svg";
import lemeridienLogo from "./partners/lemeridien.svg";
import phonepeLogo from "./partners/phonepe.svg";
import hdfcLogo from "./partners/hdfc.svg";
import rhgLogo from "./partners/rhg.svg";
import awsLogo from "./partners/aws.svg";
import futureinntechLogo from "./partners/futureinntech.svg";

export const navLinks = [
  ["Index", "index"],
  ["Overview", "overview"],
  ["Innovation", "innovation"],
  ["Offerings", "offerings"],
  ["Events", "events"],
  ["Memberships", "memberships"],
  ["Reach Us", "reach-us"],
];

export const heroStats = [
  { value: 2488, suffix: "", label: "Verified Ratings" },
  { value: 98, suffix: "%", label: "Positive Feedback" },
  { value: 200, suffix: "+", label: "Daily Expert Advice" },
  { value: 25, suffix: "+", label: "Years Expertise" },
];

export const milestones = [
  { year: "25+", title: "Consulting Expertise", text: "SOF brings more than two decades of startup, MSME, business strategy, and execution experience." },
  { year: "2026", title: "SOF Expo Launch", text: "Startup Of The Future Expo 2026-27 celebrates India's brilliance and the creative potential of generative AI." },
  { year: "12+", title: "State Innovation Hubs", text: "Expo planning spans Bihar, Maharashtra, Gujarat, Punjab, Odisha, Jharkhand, Telangana, Karnataka, Tamil Nadu, Delhi NCR, Uttar Pradesh, Rajasthan, and Haryana." },
  { year: "24h", title: "Founder Response Window", text: "SOF guides entrepreneurs through enquiry, consultation, membership selection, and practical next steps." },
];

export const domains = [
  { title: "AI & Automation", icon: Bot, text: "Artificial intelligence and automation systems that improve productivity, decision-making, and operational speed.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=400&q=80" },
  { title: "Cyber Security", icon: ShieldCheck, text: "Digital protection for systems, networks, privacy, compliance, and safe online operations.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80" },
  { title: "Electric Vehicle (EV)", icon: Zap, text: "Sustainable mobility concepts across electric vehicles, connected transport, and clean automotive models.", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=400&q=80" },
  { title: "Renewable Energy", icon: SunMedium, text: "Clean energy models using sunlight, wind, water, and modern grid innovation.", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=400&q=80" },
  { title: "Healthcare Innovation", icon: HeartPulse, text: "Medical technology, care delivery, diagnostics, and health platforms built for better outcomes.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" },
  { title: "Satellite Innovation", icon: Orbit, text: "Space technology for communication, navigation, earth observation, and scientific research.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=80" },
  { title: "Radio Telescope Arrays", icon: Earth, text: "High-resolution observation concepts using multiple antennas working as one powerful telescope.", image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=400&q=80" },
  { title: "Waste Management", icon: Flame, text: "Responsible collection, recycling, processing, and disposal systems for healthier cities.", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=400&q=80" },
  { title: "Engineering Innovations", icon: Cpu, text: "Creative technologies that improve efficiency, sustainability, safety, and quality of life.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80" },
  { title: "Green House Innovation", icon: Lightbulb, text: "Controlled agriculture systems for climate efficiency, plant growth, and sustainable production.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80" },
  { title: "E-Commerce Innovation", icon: Globe2, text: "Digital commerce experiences, customer engagement, and modern online business operations.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=400&q=80" },
  { title: "Smart Solar Energy", icon: SunMedium, text: "Intelligent photovoltaic systems that maximize efficiency and support modern power grids.", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=400&q=80" },
  { title: "Automotive Innovation", icon: Zap, text: "EVs, autonomous systems, smart connectivity, and sustainable transportation manufacturing.", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=400&q=80" },
  { title: "Robotics Innovation", icon: BrainCircuit, text: "Autonomous machines that increase productivity, safety, and precision across industries.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80" },
  { title: "Internet of Things", icon: Binary, text: "Connected devices for smarter homes, cities, industries, and real-time operational data.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=400&q=80" },
  { title: "3D Printing", icon: Building2, text: "Layer-by-layer prototyping and production for customized, complex manufacturing.", image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80" },
  { title: "Gene Tech", icon: HeartPulse, text: "Genetic technologies for medicine, agriculture, therapies, and advanced research models.", image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=400&q=80" },
  { title: "Blockchain", icon: BadgeCheck, text: "Secure decentralized ledgers that support transparency, trust, and immutable transactions.", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&q=80" },
  { title: "Virtual Reality", icon: Sparkles, text: "Immersive digital environments for education, training, entertainment, and simulation.", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=400&q=80", explorerImage: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=400&q=80" },
];

export const services = [
  { title: "Consultation & Startup Analysis", icon: Target, text: "Idea audit, innovation mapping, business model evaluation, market direction, and scheme alignment.", size: "lg:col-span-2" },
  { title: "Planning & Strategy Development", icon: BriefcaseBusiness, text: "Market and competitor analysis, launch roadmaps, business planning, and growth strategy.", size: "" },
  { title: "Design, Development & Support", icon: Cpu, text: "Website, app, brand, CRM, automation, deployment, and technical support for startup execution.", size: "" },
  { title: "Registration & Trademark", icon: Building2, text: "Company registration, LLP, private limited, GST, MSME, Udyam, trademark, IP, and documentation.", size: "lg:row-span-2" },
  { title: "Seed Funding & Awards", icon: ChartNoAxesCombined, text: "Pitch preparation, investor connect, government schemes, state awards, and national award recommendations.", size: "" },
  { title: "AI & Cyber Security Support", icon: ShieldCheck, text: "AI enablement, cyber security protection, secure systems, risk posture, and compliance readiness.", size: "" },
  { title: "Customized CRM Management", icon: UsersRound, text: "Founder-friendly CRM setup, customer journeys, automation flows, and operational visibility.", size: "lg:col-span-2" },
];

export const founderAchievements = [
  "Founder & CEO of Startup Of The Future (SOF)",
  "25+ years of expertise empowering startups and MSMEs through end-to-end consultancy",
  "Focused on idea audits, government scheme alignment, practical execution, and rapid development",
];

export const founderTimeline = [
  ["Idea Audit", "Every founder journey starts with a careful review of strengths, innovation potential, and market direction."],
  ["Technology-Led Decisions", "SOF progresses by leveraging technology, foresight, and structured business planning."],
  ["Expo Ecosystem", "The SOF Club and Expo are designed to spark courage for new inventions and rapid development."],
];

export const roadmap = ["Idea", "Validation", "Registration", "Branding", "Funding", "Launch", "Scale"];

export const expoHighlights = [
  { icon: CalendarDays, title: "India Innovation Circuit", text: "Grand exhibitions planned across major Indian states as regional hubs for innovation access." },
  { icon: Binary, title: "Generative AI Focus", text: "Expo programming celebrates India's brilliance and the creative potential of generative AI." },
  { icon: Globe2, title: "Startup & MSME Access", text: "A platform for entrepreneurs, institutions, experts, partners, and emerging businesses." },
];

export const speakers = [
  { name: "Startup Founders", role: "Idea, validation, launch, and scale stories" },
  { name: "Technology Experts", role: "AI, cyber security, CRM, product, and automation" },
  { name: "Ecosystem Partners", role: "Investors, institutions, hotels, venues, and business networks" },
];

export const showcases = [
  { title: "AI & Automation", icon: BrainCircuit },
  { title: "EV & Automotive", icon: Zap },
  { title: "Health Innovation", icon: HeartPulse },
  { title: "Satellite & Space", icon: Earth },
];

export const plans = [
  {
    name: "Express Club",
    price: "Rs 60,000/-",
    note: "Fast Track Access, 3 years valid, 20% wave off",
    features: ["Branding and promotion", "Registration and trademark", "12 cities venue stall booking with 30% wave off", "Faster access in all Expo", "Seed funding and national award guidance", "Refer and earn 10% more wave off"],
  },
  {
    name: "Future Club",
    price: "Rs 45,000/-",
    note: "Founder Circle, 3 years valid, 15% wave off",
    popular: true,
    features: ["Brand identity, website, SEO, SMO and social promotion", "Legal compliance, LLP, private limited, GST, MSME and startup support", "Rapid access in all Expo", "Seed funding and national award guidance", "Restaurant and hotel access", "Refer and earn 10% more wave off"],
  },
  {
    name: "Universal Club",
    price: "Rs 99,000/-",
    note: "Global Network, 3 years valid, 30% wave off",
    features: ["Branding and promotion", "Registration and trademark", "12 cities venue stall booking with 30% wave off", "Faster access in all Expo", "Seed funding and national award guidance", "Restaurant and hotel access"],
  },
  {
    name: "Concession Desk",
    price: "Special",
    note: "Support access for eligible founders",
    features: ["50% discount for widows", "40% discount for women entrepreneurs", "Access to networking and career-growth opportunities", "Consultation for the right SOF Club category"],
  },
];

export const testimonials = [
  {
    quote: "Thanks to their structured idea audit, we clearly understood our strengths and market direction. Their insights helped us align with government schemes and secure early benefits.",
    name: "Gautam Jain",
    role: "Director, Mini Meters Manufacturing Co. Pvt. Ltd. Faridabad",
  },
  {
    quote: "Their expert evaluation helped us refine our concept and position it as a high-potential startup. The guidance on ecosystem opportunities was extremely valuable.",
    name: "Priyal Lokhandwala",
    role: "Gadantglobal, Ahmedabad & Delhi",
  },
  {
    quote: "They not only reviewed our concept but also guided us on relevant government programs. Their inputs accelerated our journey from idea to execution.",
    name: "Sonu Singh",
    role: "Director, Housing World, Faridabad",
  },
  {
    quote: "We had an idea but did not know how to move forward. Their audit provided clarity, innovation mapping, and strategic next steps. Highly recommended.",
    name: "Rina Aggarwal",
    role: "Director, Har Ka Hunar Foundation, Rohini, Delhi",
  },
];

export const footerLinks = [
  ["Overview", "overview"],
  ["Innovation", "innovation"],
  ["Offerings", "offerings"],
  ["Events", "events"],
  ["Memberships", "memberships"],
  ["Reach Us", "reach-us"],
];

export const valueCards = [
  { icon: Target, title: "Mission", text: "To convert ideas into scalable, market-ready startups with execution, structure, sustainability, and technology-driven growth." },
  { icon: Sparkles, title: "Vision", text: "To empower entrepreneurs, innovators, startups, MSMEs, and emerging businesses through strategic guidance and ecosystem access." },
  { icon: Flame, title: "Operating Belief", text: "AI startups need ecosystem, capital, talent, policy, market access, and practical frameworks for support in India." },
  { icon: Lightbulb, title: "Founder Promise", text: "SOF combines compliance support, branding solutions, technology consulting, and business planning into one founder support system." },
];

export const associations = [
  { name: "Justdial", logo: justdialLogo },
  { name: "IndiaMART", logo: indiamartLogo },
  { name: "Le Meridien", logo: lemeridienLogo },
  { name: "PhonePe", logo: phonepeLogo },
  { name: "HDFC", logo: hdfcLogo },
  { name: "RHG", logo: rhgLogo },
  { name: "AWS Partner", logo: awsLogo },
  { name: "Future Inn-Tech Corp", logo: futureinntechLogo },
];

export const expoStates = ["Bihar", "Maharashtra", "Gujarat", "Punjab", "Odisha", "Jharkhand", "Telangana", "Karnataka", "Tamil Nadu", "Delhi NCR", "Uttar Pradesh", "Rajasthan", "Haryana"];

export const faqItems = [
  {
    question: "What services does SOF provide for startups?",
    answer: "SOF provides idea analysis, business planning, company registration, trademark and IP filing, GST/MSME/Udyam support, website and branding development, cyber security, CRM automation, investor connect, and award recommendations.",
  },
  {
    question: "How does startup consultation work?",
    answer: "The process starts with understanding the idea, market and competitor analysis, business model planning, registration recommendations, and a roadmap for launch and growth.",
  },
  {
    question: "Is my startup idea protected?",
    answer: "SOF follows NDA and confidentiality practices, including secure handling of documents, restricted internal access, and no external sharing without approval.",
  },
  {
    question: "Can SOF help with trademark and legal filings?",
    answer: "Yes. SOF assists with trademark search, filing, objection replies, MSME/Udyam, GST, company documentation, legal agreements, and compliance workflows.",
  },
  {
    question: "Do you assist with investor connections or seed funding?",
    answer: "SOF supports pitch decks, startup presentations, investor connects through events, and eligibility evaluation for state and national awards. Funding is guided but not guaranteed.",
  },
  {
    question: "What is the timeline for company registration?",
    answer: "It depends on the business type, document verification, and government portal processing. LLP and Pvt Ltd registrations usually take 5 to 10 working days.",
  },
];
