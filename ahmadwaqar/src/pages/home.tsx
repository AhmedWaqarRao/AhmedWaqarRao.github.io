import { FC, ReactNode, useState } from "react";
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
  Sparkles,
  Languages,
  Zap,
  Award,
  Lightbulb,
  Target,
  Users,
  MessageSquare,
  BookOpenCheck,
  Copy,
  Check,
} from "lucide-react";

const Section: FC<{ title: string; icon: ReactNode; children: ReactNode }> = ({
  title,
  icon,
  children,
}) => (
  <section className="card p-6 sm:p-8 reveal">
    <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
      <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/30">
        {icon}
      </span>
      {title}
    </h2>
    {children}
  </section>
);

const refAccent: Record<string, { bar: string; name: string }> = {
  blue: { bar: "border-blue-500", name: "text-blue-700" },
  green: { bar: "border-emerald-500", name: "text-emerald-700" },
  indigo: { bar: "border-indigo-500", name: "text-indigo-700" },
};

const references = [
  {
    name: "Yu Zhang",
    title: "Professor",
    affiliation:
      "Department of AI Computing System, School of Computer Science, Northwestern Polytechnical University",
    address: "1 Dongxiang Road, Chang'an District, Xi'an, Shaanxi, 710129, P.R. China",
    email: "zhangyu@nwpu.edu.cn",
    phone: "(+86) 13891997511",
    website: "https://yuzhang-nwpu.github.io/yuzhang/",
    relation: "🎓 Academic Mentor",
    color: "blue",
  },
  {
    name: "Umar Shahbaz Khan",
    title: "Tenured Associate Professor / Project Director NCRA",
    affiliation:
      "Department of Mechatronics Engineering, College of Electrical & Mechanical Engineering, NUST",
    address: "Peshawar Road, Rawalpindi 46000, Pakistan",
    email: "u.shahbaz@ceme.nust.edu.pk",
    phone: "(+92) 3005533775",
    website: undefined as string | undefined,
    relation: "🎓 Former Teacher & Research Supervisor",
    color: "green",
  },
  {
    name: "Hamid Jabbar",
    title: "Head of Department & Associate Professor",
    affiliation:
      "Mechatronics Engineering Department, College of Electrical & Mechanical Engineering, NUST",
    address: "Peshawar Road, Rawalpindi 46000, Pakistan",
    email: "hamid.jabbar@ceme.nust.edu.pk",
    phone: "(+92) 3005274026",
    website: undefined as string | undefined,
    relation: "🎓 Department Head & Mentor",
    color: "indigo",
  },
];

const expertise = [
  "Computer Vision: Image Classification, Object Detection, Machine Learning algorithms, Deep Learning algorithms, LVMs, Neural Networks, Image Processing Techniques, and Data Annotation.",
  "Artificial Intelligence: Machine Learning, Deep Learning, LLMs, Prompt Engineering and many more.",
  "Software: Google Colab, Jupyter Notebook, Spyder, VS Code and many more.",
  "Frameworks & Libraries: PyTorch, TensorFlow, Keras, scikit-learn, Hugging Face Transformers, OpenCV, Ultralytics.",
  "Programming Languages: C++, Python, Assembly Language, Matlab",
];

const certs = [
  "Python Programming",
  "Deep Learning",
  "Computer Vision",
  "Data Analytics",
  "Data Science",
  "Efficient Computing",
  "GANS",
];

const interests = [
  {
    title: "Technology Management",
    desc: "Exploring how to align business strategies with emerging technologies.",
  },
  {
    title: "News Stories",
    desc: "Following the latest developments in AI, robotics, and innovation.",
  },
  {
    title: "Engineering",
    desc: "Building solutions that combine creativity with problem-solving.",
  },
  {
    title: "Cyber Security",
    desc: "Interested in securing AI-driven systems and real-time UAV deployments.",
  },
];

const hobbies = [
  {
    title: "🔥 Entrepreneurial Mindset",
    desc: "Passionate about leading innovative IT projects (150+ completed) that drive business growth and strategic impact.",
  },
  {
    title: "✅ Project Management",
    desc: "Experienced in managing cross-platform projects, ensuring quality, innovation, and successful delivery.",
  },
  {
    title: "🌐 Cross-Cultural Exchange",
    desc: "Engaged in international collaboration and global networking, actively contributing to PCCAI initiatives.",
  },
  {
    title: "🤖 Robotics & AI",
    desc: "Exploring cutting-edge technologies in robotics, deep learning, and AI-powered solutions for real-world problems.",
  },
  {
    title: "🎤 Tech & English Talks",
    desc: "Enjoy delivering engaging talks on technology and English communication, inspiring others to learn and grow.",
  },
  {
    title: "📝 Content Creation",
    desc: "Active in creating content on AI, robotics, and innovation to share knowledge and inspire the global community.",
  },
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
      <section className="relative overflow-hidden rounded-3xl bg-[#0b1020] text-white shadow-2xl shadow-indigo-900/20 p-8 sm:p-12 reveal">
        <div className="pointer-events-none absolute -top-24 -right-16 w-80 h-80 rounded-full bg-indigo-500/40 blur-3xl float-slow" />
        <div className="pointer-events-none absolute -bottom-28 -left-10 w-72 h-72 rounded-full bg-cyan-500/30 blur-3xl float-slow" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="md:w-2/3 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-indigo-200">
              <Sparkles size={14} /> Edge AI · UAV · Computer Vision
            </span>
            <h1 className="hero-title mt-4 text-4xl sm:text-5xl font-bold leading-tight">
              Ahmed Waqar <span className="text-gradient">Rao</span> 👋
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Passionate about <span className="font-semibold text-white">Deep Learning</span>,{" "}
              <span className="font-semibold text-white">Machine Learning</span>, and{" "}
              <span className="font-semibold text-white">Computer Vision</span>, particularly
              in the technology sector using{" "}
              <span className="italic text-cyan-200">Unmanned Aerial Vehicles (UAVs) 🚁</span>.
            </p>

            <div className="mt-7 flex flex-wrap justify-center md:justify-start gap-3">
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
          </div>

          <div className="md:w-1/3 flex justify-center shrink-0">
            <div className="shrink-0 rounded-full p-1.5 bg-gradient-to-br from-indigo-400 via-cyan-300 to-indigo-500 shadow-2xl shadow-indigo-500/30">
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
      <section className="card p-6 sm:p-8 reveal">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">About Me</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            I am a passionate researcher and engineer focused on applying my expertise in{" "}
            <span className="font-semibold text-slate-900">
              Deep Learning, Machine Learning, and Computer Vision{" "}
            </span>
            to optimize Unmanned Aerial Vehicles (UAVs) for resource-constrained edge environments. 🚁
            My current research involves developing edge-based adaptive selection methods for efficient UAV target detection,
            tackling critical challenges like computational limitations, energy efficiency, and latency to enable real-time{" "}
            <span className="font-semibold text-slate-900">object detection and segmentation</span> in demanding scenarios.
          </p>
          <p>
            Central to my work is architecting lightweight, high-performance models using state-of-the-art algorithms like YOLO,
            refined with advanced techniques such as pruning and attention mechanisms. I bridge the gap between theoretical innovation
            and practical deployment, successfully porting these models to edge devices like the NVIDIA Jetson AGX Xavier to achieve
            high-speed inference for real-world applications. My research has direct impact across critical domains such as{" "}
            <span className="font-semibold text-slate-900">
              precision agriculture, wildlife monitoring, disaster response, and industrial automation
            </span>
            .
          </p>
          <p>
            I am dedicated to continuous learning 📚 and interdisciplinary collaboration, striving to push the boundaries of AI
            integration in UAV systems. My goal is to contribute meaningfully to the field by delivering scalable, robust, and efficient
            AI solutions that bridge academic research with tangible, real-world impact.
          </p>
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

      {/* Language Proficiency Section */}
      <Section title="Language Proficiency" icon={<Languages size={20} />}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 card-hover transition">
            <h3 className="font-semibold text-lg text-slate-900">🇬🇧 English</h3>
            <p className="mt-2 text-sm text-slate-600">
              Fluent – Academic, Professional, and Public Speaking
            </p>
          </div>
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 card-hover transition">
            <h3 className="font-semibold text-lg flex items-center gap-2 text-red-600">
              🇨🇳 Chinese{" "}
              <span className="text-xs bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-semibold">
                HSK-3
              </span>
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Proficient in daily communication and academic interaction. Actively improving towards advanced HSK levels.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 card-hover transition">
            <h3 className="font-semibold text-lg text-slate-900">🇵🇰 Urdu</h3>
            <p className="mt-2 text-sm text-slate-600">
              Native – Strong cultural and professional communication
            </p>
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section title="Certifications" icon={<Award size={20} />}>
        <div className="flex flex-wrap gap-3">
          {certs.map((cert) => (
            <span
              key={cert}
              className="rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-1.5 text-sm font-medium hover:bg-indigo-100 transition"
            >
              {cert}
            </span>
          ))}
        </div>
      </Section>

      {/* Interests Section */}
      <Section title="Interests" icon={<Lightbulb size={20} />}>
        <div className="grid sm:grid-cols-2 gap-4">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 card-hover transition"
            >
              <h3 className="font-semibold text-lg text-slate-900">{interest.title}</h3>
              <p className="text-sm mt-2 text-slate-600">{interest.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Hobbies Section */}
      <Section title="Hobbies & Interests" icon={<Target size={20} />}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hobbies.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 card-hover transition"
            >
              <h3 className="font-semibold text-lg text-slate-900">{h.title}</h3>
              <p className="text-sm mt-2 text-slate-600">{h.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* References Section */}
      <Section title="References" icon={<Users size={20} />}>
        <ul className="grid lg:grid-cols-3 gap-5">
          {references.map((ref) => {
            const accent = refAccent[ref.color];
            return (
              <li
                key={ref.name}
                className={`border-l-4 ${accent.bar} rounded-xl bg-slate-50/70 p-5 card-hover transition`}
              >
                <h3 className={`text-lg font-semibold ${accent.name}`}>{ref.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{ref.title}</p>
                <p className="text-sm text-slate-600">{ref.affiliation}</p>
                <p className="text-sm text-slate-600">{ref.address}</p>

                <div className="mt-3 space-y-1 text-sm break-words">
                  <p>
                    <span className="font-medium text-slate-800">📧 Email:</span>{" "}
                    <a href={`mailto:${ref.email}`} className={contactLink}>
                      {ref.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-slate-800">📞 Phone:</span>{" "}
                    <a href={`tel:${ref.phone.replace(/[^+\d]/g, "")}`} className={contactLink}>
                      {ref.phone}
                    </a>
                  </p>
                  {ref.website && (
                    <p>
                      <span className="font-medium text-slate-800">🌐 Website:</span>{" "}
                      <a
                        href={ref.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={contactLink}
                      >
                        {ref.website}
                      </a>
                    </p>
                  )}
                </div>

                <p className="mt-3 text-sm font-medium text-slate-800">{ref.relation}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden rounded-3xl card p-6 sm:p-8 scroll-mt-24 reveal">
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
                Road, Chang'an District, Xi'an, Shaanxi, 710129, P.R. China
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
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg p-6 sm:p-8 reveal">
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
