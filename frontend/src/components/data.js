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
import trademarkImg from "./trademark.png";

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
  { title: "AI & Automation", icon: Bot, text: "Artificial intelligence and automation systems that improve productivity, decision-making, and operational speed.", image: "/ai_automation_banner.png", explorerImage: "/ai_automation_banner.png" },
  { title: "Cyber Security", icon: ShieldCheck, text: "Digital protection for systems, networks, privacy, compliance, and safe online operations.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Electric Vehicle (EV)", icon: Zap, text: "Sustainable mobility concepts across electric vehicles, connected transport, and clean automotive models.", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Renewable Energy", icon: SunMedium, text: "Clean energy models using sunlight, wind, water, and modern grid innovation.", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Healthcare Innovation", icon: HeartPulse, text: "Medical technology, care delivery, diagnostics, and health platforms built for better outcomes.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Satellite Innovation", icon: Orbit, text: "Space technology for communication, navigation, earth observation, and scientific research.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Radio Telescope Arrays", icon: Earth, text: "High-resolution observation concepts using multiple antennas working as one powerful telescope.", image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Waste Management", icon: Flame, text: "Responsible collection, recycling, processing, and disposal systems for healthier cities.", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Engineering Innovations", icon: Cpu, text: "Creative technologies that improve efficiency, sustainability, safety, and quality of life.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Green House Innovation", icon: Lightbulb, text: "Controlled agriculture systems for climate efficiency, plant growth, and sustainable production.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "E-Commerce Innovation", icon: Globe2, text: "Digital commerce experiences, customer engagement, and modern online business operations.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Smart Solar Energy", icon: SunMedium, text: "Intelligent photovoltaic systems that maximize efficiency and support modern power grids.", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Automotive Innovation", icon: Zap, text: "EVs, autonomous systems, smart connectivity, and sustainable transportation manufacturing.", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Robotics Innovation", icon: BrainCircuit, text: "Autonomous machines that increase productivity, safety, and precision across industries.", image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Internet of Things", icon: Binary, text: "Connected devices for smarter homes, cities, industries, and real-time operational data.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "3D Printing", icon: Building2, text: "Layer-by-layer prototyping and production for customized, complex manufacturing.", image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Gene Tech", icon: HeartPulse, text: "Genetic technologies for medicine, agriculture, therapies, and advanced research models.", image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Blockchain", icon: BadgeCheck, text: "Secure decentralized ledgers that support transparency, trust, and immutable transactions.", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=450&q=80" },
  { title: "Virtual Reality", icon: Sparkles, text: "Immersive digital environments for education, training, entertainment, and simulation.", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=640&h=360&q=80", explorerImage: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800&h=450&q=80" },
];

export const services = [
  { title: "Consultation & Analysis of Startup", icon: Target, text: "At Startup Of The Future, we understand that every startup begins with a spark — but success requires structured planning, industry insight, and strategic execution. Our Startup Consultation & Analysis service is designed to help founders validate, refine, and scale their ideas with clarity and confidence. We perform a deep 360° evaluation of your concept, model, structure, and market relevance to ensure your business is built on solid fundamentals.", size: "lg:col-span-2", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&h=360&q=80" },
  { title: "Planning & Strategy Development", icon: BriefcaseBusiness, text: "Turning an idea into a successful venture requires more than inspiration — it demands clarity, planning, structure, and an actionable direction. At Startup Of The Future, we help startups move from concept to execution through a well-defined Planning & Strategy Development process designed to build strong business foundations and accelerate growth.", size: "", image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=640&h=360&q=80" },
  { title: "Design & Development Deployment & Support", icon: Cpu, text: "Building a startup requires more than an idea — it needs a solid product, user-ready design, smooth development, and continuous support to keep evolving. At Startup Of The Future, we provide end-to-end Design, Development, Deployment & Support Services to turn concepts into functional, scalable and market-ready digital solutions.", size: "", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=640&h=360&q=80" },
  { title: "Registration & Trademark for All Legal Compliance", icon: Building2, text: "A successful startup must not only innovate—it must operate within the legal framework that protects its business identity, intellectual property, and operational credibility. At Startup Of The Future, we help startups establish a strong legal foundation through Registration, Trademark & Complete Compliance Support from day one.", size: "lg:col-span-2", image: trademarkImg, imageFit: "contain", imageBg: "bg-white/95" },
  { title: "Seed Funding & Recommend to State & National Award", icon: ChartNoAxesCombined, text: "Access to funding and recognition can transform a startup from an idea into a scalable business. At Startup Of The Future, we support early-stage founders and emerging startups by guiding them through Seed Funding opportunities and recommending high-potential ventures for State & National-Level Awards, Government Programs, and Entrepreneurship Honors.", size: "lg:col-span-2", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=640&h=360&q=80" },
  { title: "Cyber Security Protection", icon: ShieldCheck, text: "In today’s digital era, startups face increasing threats of data leaks, hacking, ransomware, and unauthorized access. At Startup Of The Future, we provide End-to-End Cyber Security Protection integrated with Secure CRM Management, ensuring your business, customer data, and digital operations remain protected 24/7. We safeguard your systems from cyber vulnerabilities, enabling you to operate confidently with zero risk of data compromise.", size: "lg:col-span-4", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=640&h=360&q=80" },
];

export const founderAchievements = [
  "Founder & CEO of Startup Of The Future (SOF)",
  "25+ years of expertise empowering startups and MSMEs through end-to-end consultancy",
  "Focused on idea audits, government scheme alignment, practical execution, and rapid development",
];

export const founderTimeline = [
  ["Tech Solution", "Professional innovation-driven tech solutions."],
  ["Business Strategy", "Helping startups grow with structured planning."],
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
    image: "/speaker1.png",
  },
  {
    quote: "Their expert evaluation helped us refine our concept and position it as a high-potential startup. The guidance on ecosystem opportunities was extremely valuable.",
    name: "Priyal Lokhandwala",
    role: "Gadantglobal, Ahmedabad & Delhi",
    image: "/speaker2.png",
  },
  {
    quote: "They not only reviewed our concept but also guided us on relevant government programs. Their inputs accelerated our journey from idea to execution.",
    name: "Sonu Singh",
    role: "Director, Housing World, Faridabad",
    image: "/speaker3.png",
  },
  {
    quote: "We had an idea but did not know how to move forward. Their audit provided clarity, innovation mapping, and strategic next steps. Highly recommended.",
    name: "Rina Aggarwal",
    role: "Director, Har Ka Hunar Foundation, Rohini, Delhi",
    image: "/speaker4.png",
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
  { icon: Target, title: "Mission", text: "To become the foremost catalyst for innovation and entrepreneurship in India and beyond — shaping a future where bold ideas, cutting-edge solutions, and collaborative ecosystems drive global progress and sustainable development." },
  { icon: Sparkles, title: "Vision", text: "Our Vision is to empower businesses with innovative IT solutions that drive growth, efficiency, and long-term success. We deliver scalable technology to keep you competitive and ready for the future." },
  { icon: Flame, title: "Values", text: "We believe in delivering top-quality solutions for global businesses." },
  { icon: Lightbulb, title: "Expertise", text: "SoF expertise lies in Agile & DevOps, ITSM, PPM, and Cloud – the very pillars that underpin digital transformation. Our clients worldwide choose SOF because of our specialization in operational delivery excellence, covering software delivery, customer service, strategy management, and business support operations." },
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

export const clients = [
  { name: "Startup Activate", logo: "/client1.png" },
  { name: "Smile & Shine Dental", logo: "/client2.png" },
  { name: "Shilp Shala", logo: "/client3.png" },
  { name: "Savash Aviation", logo: "/client4.png" },
  { name: "Pluto", logo: "/client5.png" },
  { name: "Maxwell", logo: "/client6.png" },
  { name: "Luxury Legacy", logo: "/client7.png" },
  { name: "Jagdish Jewelry", logo: "/client8.png" },
  { name: "Incense", logo: "/client9.png" },
  { name: "Ideas Space Design", logo: "/client10.png" },
  { name: "Alliance Heritage University", logo: "/client11.png" },
  { name: "Attica Gold", logo: "/client12.png" },
  { name: "Fashion Shop", logo: "/client13.png" },
  { name: "Go Earnings", logo: "/client14.png" },
  { name: "Herka Hunar", logo: "/client15.png" },
];

export const expoStates = ["Bihar", "Maharashtra", "Gujarat", "Punjab", "Odisha", "Jharkhand", "Telangana", "Karnataka", "Tamil Nadu", "Delhi NCR", "Uttar Pradesh", "Rajasthan", "Haryana"];

export const ourValues = [
  { title: "Idea-Centric Belief", text: "We believe that every idea has value. Our responsibility is to identify its potential, refine its structure, and transform it into a viable and impactful business." },
  { title: "Innovation with Purpose", text: "Innovation must solve real problems. We support technology-driven, scalable, and future-ready solutions that contribute to sustainable growth and national development." },
  { title: "Founder Empowerment", text: "Entrepreneurs are at the heart of everything we do. We empower founders with strategic clarity, execution support, and long-term guidance at every stage of their startup journey." },
  { title: "Trust, Ethics & Confidentiality", text: "We operate with complete transparency, ethical practices, and strict NDA-based confidentiality, ensuring trust and security in all startup engagements." },
  { title: "Structured Growth & Compliance", text: "We thrive on collaboration with investors, incubators, government bodies, and industry leaders to create opportunities and accelerate startup success." },
  { title: "Ecosystem Collaboration", text: "We thrive on collaboration with investors, incubators, government bodies, and industry leaders to create opportunities and accelerate startup success." },
  { title: "Technology-Driven Execution", text: "We leverage AI, digital tools, and modern technology frameworks to enable smarter decisions, faster execution, and scalable growth." },
  { title: "Nation-Building Commitment", text: "We are committed to strengthening India’s startup ecosystem by supporting MSMEs, innovators, and emerging entrepreneurs across the country." }
];

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
