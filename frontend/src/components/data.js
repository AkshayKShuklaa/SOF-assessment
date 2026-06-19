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
  { title: "AI & Automation", icon: Bot, text: "Artificial intelligence and automation systems that improve productivity, decision-making, and operational speed." },
  { title: "Cyber Security", icon: ShieldCheck, text: "Digital protection for systems, networks, privacy, compliance, and safe online operations." },
  { title: "Electric Vehicle (EV)", icon: Zap, text: "Sustainable mobility concepts across electric vehicles, connected transport, and clean automotive models." },
  { title: "Renewable Energy", icon: SunMedium, text: "Clean energy models using sunlight, wind, water, and modern grid innovation." },
  { title: "Healthcare Innovation", icon: HeartPulse, text: "Medical technology, care delivery, diagnostics, and health platforms built for better outcomes." },
  { title: "Satellite Innovation", icon: Orbit, text: "Space technology for communication, navigation, earth observation, and scientific research." },
  { title: "Radio Telescope Arrays", icon: Earth, text: "High-resolution observation concepts using multiple antennas working as one powerful telescope." },
  { title: "Waste Management", icon: Flame, text: "Responsible collection, recycling, processing, and disposal systems for healthier cities." },
  { title: "Engineering Innovations", icon: Cpu, text: "Creative technologies that improve efficiency, sustainability, safety, and quality of life." },
  { title: "Green House Innovation", icon: Lightbulb, text: "Controlled agriculture systems for climate efficiency, plant growth, and sustainable production." },
  { title: "E-Commerce Innovation", icon: Globe2, text: "Digital commerce experiences, customer engagement, and modern online business operations." },
  { title: "Smart Solar Energy", icon: SunMedium, text: "Intelligent photovoltaic systems that maximize efficiency and support modern power grids." },
  { title: "Automotive Innovation", icon: Zap, text: "EVs, autonomous systems, smart connectivity, and sustainable transportation manufacturing." },
  { title: "Robotics Innovation", icon: BrainCircuit, text: "Autonomous machines that increase productivity, safety, and precision across industries." },
  { title: "Internet of Things", icon: Binary, text: "Connected devices for smarter homes, cities, industries, and real-time operational data." },
  { title: "3D Printing", icon: Building2, text: "Layer-by-layer prototyping and production for customized, complex manufacturing." },
  { title: "Gene Tech", icon: HeartPulse, text: "Genetic technologies for medicine, agriculture, therapies, and advanced research models." },
  { title: "Blockchain", icon: BadgeCheck, text: "Secure decentralized ledgers that support transparency, trust, and immutable transactions." },
  { title: "Virtual Reality", icon: Sparkles, text: "Immersive digital environments for education, training, entertainment, and simulation." },
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
