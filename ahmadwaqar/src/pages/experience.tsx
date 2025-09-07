// src/pages/Experience.tsx
import { FC } from "react";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  location: string;
  start: string;
  end: string;
  description: string;
  skills?: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Graduate Research Assistant",
    company: "Northwestern Polytechnical University",
    type: "Contract",
    location: "Xi'an, Shaanxi, China · On-site",
    start: "Sep 2023",
    end: "Present",
    description:
      "Currently engaged in research on an edge-based adaptive selection method for efficient UAV target detection. Focused on lightweight model edge computing, enhancing detection, and deploying quantitative models. Key areas: UAV technology, sensor group selection, embedded AI.",
    skills: [
      "Deep Learning",
      "Machine Learning",
      "Computer Vision",
      "YOLO",
      "Object Detection",
      "Feature Engineering",
      "Classification",
    ],
  },
  {
    role: "Co-Founder and CEO",
    company: "3Dim Engineering Solutions",
    type: "Self-employed",
    location: "Xi'an, Shaanxi, China · On-site",
    start: "Jan 2024",
    end: "Present",
    description:
      "Leading a versatile engineering team delivering innovative solutions. Managed 100+ projects with 100% client satisfaction. Focus on tailored solutions, technical expertise, and staying ahead of industry trends.",
    skills: [
      "Start-up Leadership",
      "Project Management",
      "Project Coordination",
      "Complex Projects",
    ],
  },
  {
    role: "Co-Founder and CEO",
    company: "WebsDady",
    type: "Self-employed",
    location: "Xi'an, Shaanxi, China · On-site",
    start: "Jan 2024",
    end: "Present",
    description:
      "Digital transformation partner providing web development, e-commerce solutions, digital marketing, SEO, and innovation-driven strategies. Helped global businesses achieve strong online presence.",
    skills: [
      "Digital Marketing",
      "E-commerce",
      "SEO",
      "Web Development",
    ],
  },
  {
    role: "Project Manager",
    company: "Simplicity Concept Nigeria",
    type: "Contract",
    location: "Lagos State, Nigeria · Remote",
    start: "Sep 2021",
    end: "Feb 2024",
    description:
      "Oversaw the Oyato Shopping App development. Responsible for strategic planning, stakeholder communication, technical leadership, and ensuring alignment with organizational goals.",
    skills: [
      "Project Planning",
      "Software Project Management",
      "Operations Management",
      "Business Development",
    ],
  },
  {
    role: "Senior Data/Image Annotation Specialist",
    company: "DataVision",
    type: "Contract",
    location: "Lahore, Pakistan · Remote",
    start: "Jan 2023",
    end: "Jun 2023",
    description:
      "Created 2D/3D bounding boxes, semantic segmentation, categorization, and labeling using V7 Darwin. Ensured quality assurance and efficient data curation.",
    skills: [
      "Annotation",
      "Data Science",
      "Image Processing",
      "Quality Assurance",
    ],
  },
   {
    role: "Social Worker & Coordinator",
    company: "Sahara Humanitarian Trust & NUST CEME Initiatives",
    type: "Self-employed & Part-time",
    location: "Nust Ceme",
    start: "Nov 2018",
    end: "Jun 2023",
    description: "Led and participated in multiple humanitarian efforts over 4+ years. Key initiatives included organizing winter clothes drives for college staff and the community, managing blood donation drives for deserving members, and coordinating the collection and distribution of books and study materials for newcomers to aid their studies.",
    skills: [
      "Project Coordination",
      "Community Outreach",
      "Volunteer Management",
      "Event Planning",
    ],
  },
  {
    role: "Marketing Team Member",
    company: "Infaq Pakistan",
    type: "Part-time",
    location: "Nust Ceme",
    start: "Jun 2020",
    end: "Jun 2023",
    description: "Contributed to the marketing strategies and campaigns for a non-profit organization focused on charitable causes, helping to increase outreach and engagement.",
    skills: [
      "Marketing",
      "Non-profit",
      "Outreach",
    ],
  },
  {
    role: "Nestership Intern",
    company: "Nestlé",
    type: "Internship",
    location: "Lahore District, Punjab, Pakistan · Remote",
    start: "May 2023",
    end: "May 2023",
    description: "Awarded a certificate for Interview Success. Developed and shared expert tips for acing job interviews, including thorough company research, practicing common questions, and projecting confidence.",
    skills: [
      "Interview Preparation",
      "Professional Development",
      "Research",
    ],
  },
  {
    role: "Event Volunteer & Coordinator",
    company: "NUST Volunteers Club & National Engineering Robotics Competition (NERC)",
    type: "Seasonal/Volunteer",
    location: "NUST CEME",
    start: "Oct 2020",
    end: "Aug 2022",
    description: "Took on multiple volunteer roles: as a member collecting clothes for seasonal drives and as a key member of the decoration and organizing team for major engineering events like NERC and the Aero Outdoor Tournament.",
    skills: [
      "Event Management",
      "Teamwork",
      "Logistics Coordination",
    ],
  },
  {
    role: "Research Intern",
    company: "Robot Maker Lab",
    type: "Internship",
    location: "Nust ceme",
    start: "Aug 2021",
    end: "Jun 2022",
    description: "Focused on the design and development of robotic and automatic machinery, contributing directly to final year project work in a research and development environment.",
    skills: [
      "Research & Development (R&D)",
      "Robotics",
      "Mechanical Design",
      "Project Design",
    ],
  },
];

const Experience: FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative border-l-4 border-blue-500 pl-6 pb-8"
          >
            <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase size={20} />
                {exp.role}
              </h2>
              <p className="text-gray-600 font-medium">
                {exp.company} · {exp.type}
              </p>
              <p className="text-gray-500 text-sm">{exp.location}</p>
              <p className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <Calendar size={16} />
                {exp.start} - {exp.end}
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                {exp.description}
              </p>
              {exp.skills && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
