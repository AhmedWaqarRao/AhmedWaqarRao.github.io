import { FC } from "react";
import { Heart, Lightbulb, Target, Rocket, ClipboardCheck, Globe, Bot, Mic, PenLine } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";

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
    title: "Entrepreneurial Mindset",
    icon: Rocket,
    desc: "Passionate about leading innovative IT projects (150+ completed) that drive business growth and strategic impact.",
  },
  {
    title: "Project Management",
    icon: ClipboardCheck,
    desc: "Experienced in managing cross-platform projects, ensuring quality, innovation, and successful delivery.",
  },
  {
    title: "Cross-Cultural Exchange",
    icon: Globe,
    desc: "Engaged in international collaboration and global networking, actively contributing to PCCAI initiatives.",
  },
  {
    title: "Robotics & AI",
    icon: Bot,
    desc: "Exploring cutting-edge technologies in robotics, deep learning, and AI-powered solutions for real-world problems.",
  },
  {
    title: "Tech & English Talks",
    icon: Mic,
    desc: "Enjoy delivering engaging talks on technology and English communication, inspiring others to learn and grow.",
  },
  {
    title: "Content Creation",
    icon: PenLine,
    desc: "Active in creating content on AI, robotics, and innovation to share knowledge and inspire the global community.",
  },
];

const Interests: FC = () => (
  <div>
    <PageHeader
      icon={<Heart size={24} />}
      title="Interests"
      subtitle="What I enjoy beyond the lab: technology, engineering and sharing knowledge."
    />
    <div className="flex flex-col gap-8">
      <Section title="Areas of Interest" icon={<Lightbulb size={20} />}>
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
      <Section title="Hobbies" icon={<Target size={20} />}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hobbies.map(({ icon: Icon, ...h }) => (
            <div
              key={h.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 card-hover transition"
            >
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600">
                <Icon size={20} />
              </span>
              <h3 className="mt-3 font-semibold text-lg text-slate-900">{h.title}</h3>
              <p className="text-sm mt-2 text-slate-600">{h.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  </div>
);

export default Interests;
