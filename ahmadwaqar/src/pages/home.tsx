import { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Github,
  Mail,
  Globe,
  MessageCircle,
  Phone,
  MapPin,
  GraduationCap,
  FileDown,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  MessageSquare,
  BookOpenCheck,
  Copy,
  Check,
  Eye,
  Cpu,
  Cog,
  ClipboardCheck,
  Ship,
  Handshake,
  BookOpen,
} from "lucide-react";
import Section from "../components/Section";
import { publications } from "./publications";
import { projects } from "./projects";
import { certifications } from "./certifications";
import { workshops, conferences } from "./workshops";

const stats = [
  { value: publications.length, label: "Publications" },
  { value: new Set(projects.map((p) => p.title)).size, label: "Projects" },
  { value: certifications.length, label: "Certifications" },
  { value: workshops.length + conferences.length, label: "Talks & events" },
];

const services = [
  {
    icon: Eye,
    title: "Computer Vision & Deep Learning",
    desc: "Image classification, object detection, segmentation and tracking, plus data annotation to train them.",
  },
  {
    icon: Cpu,
    title: "Edge AI & UAV Deployment",
    desc: "Lightweight, optimized models that run in real time on edge devices such as the NVIDIA Jetson.",
  },
  {
    icon: Cog,
    title: "Engineering & IT Projects",
    desc: "Tailored, end-to-end engineering and IT solutions delivered through 3Dim Engineering Solutions.",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Consultation",
    desc: "Solution design, technical advice and clear documentation for your project.",
  },
  {
    icon: GraduationCap,
    title: "Training, Talks & Mentoring",
    desc: "Workshops, technical and English talks, and mentoring in AI, robotics and research.",
  },
  {
    icon: Ship,
    title: "International Trade & Sourcing",
    desc: "Factory sourcing, import/export, DDP and customs support.",
  },
];

const expertise = [
  "Computer Vision: Image Classification, Object Detection, Machine Learning algorithms, Deep Learning algorithms, LVMs, Neural Networks, Image Processing Techniques, and Data Annotation.",
  "Artificial Intelligence: Machine Learning, Deep Learning, LLMs, Prompt Engineering, and more.",
  "Software: Google Colab, Jupyter Notebook, Spyder, VS Code, and more.",
  "Frameworks & Libraries: PyTorch, TensorFlow, Keras, scikit-learn, Hugging Face Transformers, OpenCV, Ultralytics.",
  "Programming Languages: C++, Python, Assembly Language, MATLAB",
];

const contactItem =
  "flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 hover:border-indigo-300 hover:bg-white transition";
const contactIcon =
  "shrink-0 grid place-items-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600";
const contactLink = "text-indigo-700 hover:underline break-all";

const socialBtn =
  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border transition hover:-translate-y-0.5";


const WeChatCard: FC = () => {
  const [copied, setCopied] = useState(false);
  const [hasQr, setHasQr] = useState(true);

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText("_3DAlliance");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: the ID stays visible to copy by hand */
    }
  };

  return (
    <div className="md:col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-5 sm:p-6 shadow-lg shadow-emerald-900/20">
      <div className="pointer-events-none absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
      <div className="relative flex flex-col sm:flex-row items-center gap-6">
        {hasQr && (
          <img
            src={`${process.env.PUBLIC_URL}/wechat-qr.png`}
            alt="WeChat QR code for Ahmed Waqar Rao"
            onError={() => setHasQr(false)}
            className="w-48 h-48 sm:w-52 sm:h-52 shrink-0 rounded-2xl bg-white p-2 shadow-xl object-contain"
          />
        )}
        <div className="min-w-0 text-center sm:text-left">
          <p className="flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-100">
            <MessageCircle size={18} /> WeChat
          </p>
          <p className="mt-1 text-2xl sm:text-3xl font-bold break-all" style={{ fontFamily: "Space Grotesk" }}>
            _3DAlliance
          </p>
          <p className="mt-1 text-emerald-50">+86 13193302925</p>
          <p className="mt-2 text-sm text-emerald-100">
            {hasQr
              ? "Scan the QR code in WeChat, or search the ID above."
              : "Open WeChat, tap Add Contacts and search the ID above."}
          </p>
          <button
            type="button"
            onClick={copyId}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow hover:bg-emerald-50 transition"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied!" : "Copy WeChat ID"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1020] to-[#101a3a] text-white shadow-lg shadow-slate-900/10 p-8 sm:p-12 reveal">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative flex flex-col-reverse xl:flex-row items-center justify-between gap-10">
          <div className="xl:w-2/3 text-center xl:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-indigo-200">
              <Sparkles size={14} /> Edge AI · UAV · Computer Vision
            </span>
            <h1 className="hero-title mt-4 text-4xl sm:text-5xl font-bold leading-tight">
              Ahmed Waqar <span className="text-gradient">Rao</span>
            </h1>
            <p className="mt-4 max-w-xl mx-auto xl:mx-0 text-base sm:text-lg leading-relaxed text-slate-300">
              Passionate about <span className="font-semibold text-white">Deep Learning</span>,
              Machine Learning, and{" "}
              <span className="font-semibold text-white">Computer Vision</span>, particularly
              in the technology sector using Unmanned Aerial Vehicles (UAVs).
            </p>

            <div className="mt-7 flex flex-wrap justify-center xl:justify-start gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-indigo-900/40 hover:brightness-110 transition"
              >
                Get in touch <ArrowRight size={16} />
              </a>
              <Link
                to="/publications"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition"
              >
                View publications
              </Link>
              <a
                href={`${process.env.PUBLIC_URL}/Ahmed%20Waqar%20Rao%20CV%20NPU%20(2).pdf`}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition"
              >
                <FileDown size={16} /> CV
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center xl:text-left">
              {stats.map((st) => (
                <div key={st.label} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <dt className="order-2 text-xs text-slate-300">{st.label}</dt>
                  <dd className="text-2xl font-bold tabular-nums text-white" style={{ fontFamily: "Space Grotesk" }}>
                    {st.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="xl:w-1/3 flex justify-center shrink-0">
            <div className="shrink-0 rounded-full p-1.5 bg-gradient-to-br from-indigo-400 via-cyan-300 to-indigo-500 shadow-lg shadow-black/30">
              <img
                src={`${process.env.PUBLIC_URL}/ahmadwaqar.jpg`}
                alt="Ahmed Waqar Rao"
                className="w-44 h-44 sm:w-52 sm:h-52 shrink-0 rounded-full border-4 border-[#0b1020] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="card p-6 sm:p-8 scroll-mt-24">
        <h2 className="text-2xl font-bold text-slate-900 mb-5">About Me</h2>
        <div className="grid xl:grid-cols-[minmax(0,1fr)_300px] gap-8 items-start">
        <div className="space-y-5 text-[1.0625rem] leading-8 text-slate-600">
          <p>
            I am a passionate researcher and engineer focused on applying my expertise in{" "}
            <span className="font-medium text-slate-800">
              Deep Learning, Machine Learning, and Computer Vision{" "}
            </span>
            to optimize Unmanned Aerial Vehicles (UAVs) for resource-constrained edge environments.
            My current research involves developing edge-based adaptive selection methods for efficient UAV target detection,
            tackling critical challenges like computational limitations, energy efficiency, and latency to enable real-time{" "}
            <span className="font-medium text-slate-800">object detection and segmentation</span> in demanding scenarios.
          </p>
          <p>
            Central to my work is architecting lightweight, high-performance models using state-of-the-art algorithms like YOLO,
            refined with advanced techniques such as pruning and attention mechanisms. I bridge the gap between theoretical innovation
            and practical deployment, successfully porting these models to edge devices like the NVIDIA Jetson AGX Xavier to achieve
            high-speed inference for real-world applications. My research has direct impact across critical domains such as{" "}
            <span className="font-medium text-slate-800">
              precision agriculture, wildlife monitoring, disaster response, and industrial automation
            </span>
            .
          </p>
          <p>
            I am dedicated to continuous learning and interdisciplinary collaboration, striving to push the boundaries of AI
            integration in UAV systems. My goal is to contribute meaningfully to the field by delivering scalable, robust, and efficient
            AI solutions that bridge academic research with tangible, real-world impact.
          </p>
        </div>

          <aside className="rounded-2xl border border-slate-200 bg-gradient-to-b from-indigo-50/70 to-cyan-50/60 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-700">At a glance</h3>
            <dl className="mt-4 space-y-4 text-sm">
              {[
                ["Based in", "Xi’an, Shaanxi, China"],
                ["Affiliation", "Northwestern Polytechnical University"],
                ["Focus", "Edge AI, UAV target detection, segmentation"],
                ["Tools", "PyTorch, TensorFlow, YOLO, OpenCV"],
                ["Languages", "English, Chinese (HSK-3), Urdu"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{k}</dt>
                  <dd className="mt-0.5 font-medium text-slate-800">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Expertise Section */}
      <Section title="Expertise" icon={<Zap size={20} />}>
        <ul className="space-y-3">
          {expertise.map((exp) => {
            const [label, ...rest] = exp.split(": ");
            return (
              <li
                key={exp}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 leading-relaxed text-slate-600"
              >
                <span className="font-semibold text-indigo-700">{label}:</span> {rest.join(": ")}
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-24 ">
        <div className="mb-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            <Handshake size={14} /> Work with me
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Services</h2>
          <p className="mt-2 max-w-2xl mx-auto text-slate-600">
            From research-grade AI to practical engineering delivery. Tell me about your project.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card card-hover p-6">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/30">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:brightness-110 transition"
          >
            Discuss a project <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Featured Publications */}
      <Section title="Featured Publications" icon={<BookOpen size={20} />}>
        <div className="grid md:grid-cols-3 gap-5">
          {publications.slice(0, 3).map((pub) => (
            <Link
              key={pub.id}
              to="/publications"
              className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-5 card-hover transition"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-700 transition">
                {pub.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{pub.description}</p>
            </Link>
          ))}
        </div>
        <Link
          to="/publications"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:underline"
        >
          View all publications <ArrowUpRight size={16} />
        </Link>
      </Section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden rounded-3xl card p-6 sm:p-8 scroll-mt-24 ">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/30">
            <MessageSquare size={20} />
          </span>
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-slate-700">
          <div className={contactItem}>
            <span className={contactIcon}>
              <Mail size={20} />
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-slate-900">Email</p>
              <a href="mailto:awrao.261@gmail.com" className={contactLink}>
                awrao.261@gmail.com
              </a>
            </div>
          </div>

          <div className={contactItem}>
            <span className={contactIcon}>
              <GraduationCap size={20} />
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-slate-900">University Email</p>
              <a href="mailto:ahmedwaqar261@mail.nwpu.edu.cn" className={contactLink}>
                ahmedwaqar261@mail.nwpu.edu.cn
              </a>
            </div>
          </div>

          <div className={`${contactItem} md:col-span-2`}>
            <span className={contactIcon}>
              <Phone size={20} />
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-slate-900">Phone</p>
              <p>
                <a href="tel:+923064922957" className="text-indigo-700 hover:underline">
                  +92 306 4922957
                </a>
                {" / "}
                <a href="tel:+8613193302925" className="text-indigo-700 hover:underline whitespace-nowrap">
                  +86 13193302925
                </a>
              </p>
            </div>
          </div>

          <WeChatCard />

          <div className={`${contactItem} md:col-span-2`}>
            <span className={contactIcon}>
              <MapPin size={20} />
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-slate-900">Address</p>
              <p>
                School of Computer Science, Northwestern Polytechnical University, 1 Dongxiang
                Road, Chang’an District, Xi’an, Shaanxi, 710129, P.R. China
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6 flex-wrap">
          <a
            href="https://www.linkedin.com/in/ahmed-waqar-rao-b1b700183/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${socialBtn} border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100`}
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/AhmedWaqarRao"
            target="_blank"
            rel="noopener noreferrer"
            className={`${socialBtn} border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200`}
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="mailto:awrao.261@gmail.com"
            className={`${socialBtn} border-red-200 bg-red-50 text-red-600 hover:bg-red-100`}
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="https://orcid.org/0009-0007-3759-2125"
            target="_blank"
            rel="noopener noreferrer"
            className={`${socialBtn} border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100`}
          >
            <Globe size={18} /> ORCID
          </a>
          <a
            href="https://wa.me/8613193302925"
            target="_blank"
            rel="noopener noreferrer"
            className={`${socialBtn} border-green-200 bg-green-50 text-green-700 hover:bg-green-100`}
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </section>

      {/* Learning Section */}
      <section data-reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg p-6 sm:p-8">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-3">
          <BookOpenCheck size={26} /> Currently Learning
        </h2>
        <p className="text-indigo-50 leading-relaxed">
          Artificial Intelligence in UAV technology, with a focus on advanced
          feature extraction, object detection, and segmentation.
        </p>
      </section>
    </div>
  );
};

export default Home;
