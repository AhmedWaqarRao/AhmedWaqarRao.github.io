// src/pages/Education.tsx
import { FC } from "react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  logo?: string; // optional if you want to add logos later
}

const education: EducationItem[] = [
  {
    institution: "Northwestern Polytechnical University, China",
    degree: "Master in Science (MS), Computer Sciences and Technology",
    period: "Aug 2023 - Jul 2026",
  },
  {
    institution:
      "National University of Sciences and Technology (NUST), Pakistan",
    degree:
      "Bachelor of Engineering (BE), Mechatronics, Robotics, and Automation Engineering",
    period: "2018 - 2022",
  },
];

const Education: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Education</h1>

      <div className="space-y-6 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {edu.degree}
            </h2>
            <p className="text-sm text-indigo-600 font-medium">
              {edu.institution}
            </p>
            <p className="text-sm text-gray-500">{edu.period}</p>
            {edu.grade && (
              <p className="text-sm text-gray-700 mt-1">
                Grade: <span className="font-medium">{edu.grade}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
