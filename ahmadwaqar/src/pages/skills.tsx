import React from "react";
import {
  Code,
  Wrench,
  BookOpen,
  Briefcase,
  Users,
  Languages,
  Layers,
} from "lucide-react";

export default function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            🛠 Skills & Expertise
          </h1>
          <p className="text-gray-600 mt-3">
            A blend of technical depth, industry experience, and interpersonal abilities.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <SkillCard
            title="Technical Skills"
            icon={<Code size={22} className="text-blue-600" />}
            items={[
              "Pattern Classification",
              "Filtering",
              "Cleaning",
              "Time-frequency Analysis",
              "Machine Learning",
              "Feature Extraction",
              "Feature Selection",
              "Classification",
              "Deep Learning",
              "CNN",
              "Transformers",
              "YOLO",
            ]}
            color="blue"
          />

          {/* Languages & Software */}
          <SkillCard
            title="Languages & Software"
            icon={<Wrench size={22} className="text-green-600" />}
            items={[
              "C++",
              "C",
              "Python",
              "MATLAB",
              "Proteus",
              "LT Spice",
              "Simulink",
            ]}
            color="green"
          />

          {/* Databases & Frameworks */}
          <SkillCard
            title="Databases & Frameworks"
            icon={<BookOpen size={22} className="text-indigo-600" />}
            items={["MongoDB", "SQL", "Flask", "Docker"]}
            color="indigo"
          />

          {/* Industry Skills */}
          <SkillCard
            title="Industry Skills"
            icon={<Briefcase size={22} className="text-emerald-600" />}
            items={[
              "Computer Vision",
              "Object Detection",
              "Segmentation",
              "Tracking",
              "Data Science",
              "AI",
              "ML",
              "NLP",
              "DL",
              "Statistics",
              "Regression",
              "Neural Networks",
            ]}
            color="emerald"
          />

          {/* Interpersonal Skills */}
          <SkillCard
            title="Interpersonal Skills"
            icon={<Users size={22} className="text-orange-600" />}
            items={[
              "Collaboration",
              "Problem Solving",
              "Critical Thinking",
              "Adaptability",
              "Teamwork",
              "Leadership",
            ]}
            color="orange"
          />

          {/* Language Skills */}
          <SkillCard
            title="Language Skills"
            icon={<Languages size={22} className="text-purple-600" />}
            items={["English (Fluent)", "Chinese (HSK-3)", "Urdu (Native)"]}
            color="purple"
          />

          {/* Other Software */}
          <SkillCard
            title="Other Software"
            icon={<Layers size={22} className="text-pink-600" />}
            items={[
                'Canva',
              "Adobe Photoshop",
              "Adobe Illustrator",
              "Adobe After Effects",
              "Filmora",
              "Adobe Character Animator",
              "MS Office",
            ]}
            color="pink"
          />
        </div>
      </div>
    </section>
  );
}

/* Reusable SkillCard Component */
function SkillCard({
  title,
  icon,
  items,
  color,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
}) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h2 className={`font-semibold text-lg text-${color}-700`}>{title}</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`bg-${color}-100 text-${color}-700 text-xs font-medium px-3 py-1 rounded-full`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
