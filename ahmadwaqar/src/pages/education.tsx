// src/pages/Education.tsx
import { FC, useState } from "react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  courses?: string[];
  logo?: string;
}

const education: EducationItem[] = [
  {
    institution: "Northwestern Polytechnical University, China",
    degree: "Master in Science (MS), Computer Sciences and Technology",
    period: "Aug 2023 - Jul 2026",
    courses: [
      "Chinese Language I",
      "Chinese Language II",
      "Mathematical Statistics",
      "Matrix Theory",
      "Brief Introduction of China",
      "Computer Vision",
      "Eye Tracking and Applications",
      "Human-Computer Interaction",
      "Computational Intelligence: Theory and Method",
      "Pattern Classification",
      "Advanced Operating Systems",
      "Scientific Writing",
    ],
  },
  {
    institution:
      "National University of Sciences and Technology (NUST), Pakistan",
    degree:
      "Bachelor of Engineering (BE), Mechatronics, Robotics, and Automation Engineering",
    period: "2018 - 2022",
    courses: [
      "Data Structures and Object Oriented Programming",
      "Final Year Project",
      "Manufacturing Automation",
      "Automotive Technology",
      "Fluid Mechanics",
      "Introduction to Robotics",
      "Entrepreneurship",
      "Internal Combustion Engine",
      "Professional Ethics",
      "Linear Control Systems",
      "Engineering Project Management",
      "Mechatronics System Design",
      "Mechanical Vibrations",
      "Theory of Machines",
      "Numerical Methods",
      "Modeling and Simulation",
      "Instrumentation & Measurements",
      "Design of Machine Elements",
      "Probability & Statistics",
      "Signals and Systems",
      "Engineering Economics",
      "Actuating Systems",
      "Materials and Manufacturing Processes",
      "Solid Modeling",
      "Mechanics of Materials",
      "Thermodynamics",
      "Complex Variables and Transforms",
      "Engineering Dynamics",
      "Vector Calculus",
      "Technical and Business Writing",
      "Electronic Circuit Design",
      "Digital Logic Design",
      "Applied Physics",
      "Workshop Practice",
      "Linear Algebra and ODEs",
      "Communication Skills",
      "Pakistan Studies",
      "Electronic Devices and Circuits",
      "Fundamentals of Programming",
      "Engineering Statics",
      "Engineering Drawing",
      "Calculus and Analytical Geometry",
      "Islamic Studies",
      "English",
      "Electric Circuits Analysis",
    ],
  },
];

const Education: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Education</h1>

      <div className="space-y-6 max-w-5xl mx-auto">
        {education.map((edu, index) => (
          <EducationCard key={index} edu={edu} />
        ))}
      </div>
    </div>
  );
};

const EducationCard: FC<{ edu: EducationItem }> = ({ edu }) => {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
      <h2 className="text-lg font-semibold text-gray-800">{edu.degree}</h2>
      <p className="text-sm text-indigo-600 font-medium">{edu.institution}</p>
      <p className="text-sm text-gray-500">{edu.period}</p>

      {/* Courses */}
      {edu.courses && (
        <div className="mt-4">
          <h3 className="text-md font-semibold text-gray-700 mb-2">Courses</h3>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
            {(showCourses ? edu.courses : edu.courses.slice(0, 6)).map(
              (course, i) => (
                <li
                  key={i}
                  className="p-2 bg-gray-50 rounded-lg border hover:bg-gray-100 transition"
                >
                  📘 {course}
                </li>
              )
            )}
          </ul>

          {/* Toggle button */}
          {edu.courses.length > 6 && (
            <button
              onClick={() => setShowCourses(!showCourses)}
              className="mt-3 text-indigo-600 font-medium hover:underline text-sm"
            >
              {showCourses ? "Hide Courses ▲" : "Show More Courses ▼"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Education;
