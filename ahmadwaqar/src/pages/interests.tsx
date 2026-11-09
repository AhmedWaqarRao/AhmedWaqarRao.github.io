import { FC } from "react";
import { Heart, Lightbulb, Target } from "lucide-react";
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

const Interests: FC = () => (
  <div className="flex flex-col gap-8">
    <PageHeader
      icon={<Heart size={24} />}
      title="Interests"
      subtitle="What I enjoy beyond the lab: technology, engineering and sharing knowledge."
    />
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
  </div>
);

export default Interests;
