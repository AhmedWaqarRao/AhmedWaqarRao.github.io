import { FC } from "react";

interface Recommendation {
  name: string;
  position: string;
  relation: string;
  date: string;
  text: string;
}

const recommendations: Recommendation[] = [
  {
    name: "Yu Zhang",
    position:
      "Professor at the Department of AI Computing System, School of Computer Science, Northwestern Polytechnical University, China",
    relation: "Academic Mentor",
    date: "2024",
    text: `Professor Yu Zhang has been instrumental in guiding my academic research journey. 
    His mentorship in AI and computing systems has provided me with invaluable direction, 
    shaping my skills in deep learning, reinforcement learning, and applied research.`,
  },
  {
    name: "Dr. Umar Shahbaz Khan",
    position:
      "Tenured Associate Professor / Project Director NCRA, NUST, Pakistan",
    relation: "Former Teacher & Research Supervisor",
    date: "2024",
    text: `Dr. Umar Shahbaz Khan played a significant role in my academic development 
    during my studies at NUST. His mentorship in robotics and automation provided 
    me with the interdisciplinary skills and critical thinking required for 
    high-impact research.`,
  },
  {
    name: "Dr. Hamid Jabbar",
    position:
      "Associate Professor & Head of Department, Mechatronics Engineering, NUST, Pakistan",
    relation: "Department Head & Mentor",
    date: "2024",
    text: `As the Head of Department at NUST, Dr. Hamid Jabbar provided continuous support 
    and encouragement throughout my academic and research career. His leadership 
    and mentorship inspired me to pursue interdisciplinary projects and 
    contribute meaningfully to my field.`,
  },
  {
    name: "Huzaifa Azam",
    position: "Graduate Research Assistant | MSc Mechanical Engineering | UTP | Malaysia",
    relation: "Reported directly to Ahmed Waqar",
    date: "April 19, 2025",
    text: `I’ve had the pleasure of working with Ahmed Waqar on multiple research papers and interdisciplinary projects... He consistently brings a high level of expertise and professionalism to every project he’s involved in.`,
  },
  {
    name: "Umar Shahbaz Khan",
    position: "Professor at NUST and Director of National Center of Robotics and Automation",
    relation: "Was Ahmed Waqar’s teacher",
    date: "April 19, 2025",
    text: `I am pleased to offer my strong recommendation for Mr. Ahmed Waqar Rao... He possesses a solid interdisciplinary foundation, a deep commitment to academic excellence, and the potential to make significant contributions to his domain.`,
  },
  {
    name: "Waleed Bin Inqiad",
    position: "PhD Scholar | Aston | Visiting Student @ Polimi",
    relation: "Reported directly to Ahmed Waqar",
    date: "April 10, 2025",
    text: `I am pleased to highly recommend Ahmed Waqar Rao... His innovative approach to enhancing construction materials using AI-driven techniques has greatly contributed to the sustainability and performance of our solutions.`,
  },
  {
    name: "Shoaib Talib",
    position: "Gold Medalist MS Cyber Security | NUST Silver Medalist",
    relation: "Studied together",
    date: "April 8, 2025",
    text: `I had the pleasure of studying alongside Ahmed Waqar Rao during our time at NUST... His dedication, skills, and mindset make him a standout professional.`,
  },
  {
    name: "Shamsher Ali",
    position: "Composites and Materials Research | AM | Solid Mechanics",
    relation: "Reported directly to Ahmed Waqar",
    date: "April 6, 2025",
    text: `It is a pleasure to write this recommendation for Ahmed Waqar Rao, Founder and CEO of 3Dim Engineering Solutions... I truly admire his multidisciplinary approach and commitment to excellence.`,
  },
  {
    name: "Ali Mansab",
    position: "Brand Designer | 100+ Brands Built",
    relation: "Worked with Ahmed Waqar on the same team",
    date: "April 6, 2025",
    text: `It is with great enthusiasm that I recommend Waqar... His genuine kindness and integrity make him a pleasure to work with.`,
  },
  {
    name: "Qasim Bin Habib",
    position: "Executive @ Honda Atlas Cars | Mechanical Engineer",
    relation: "Worked with Ahmed Waqar on the same team",
    date: "April 6, 2025",
    text: `I am delighted to write this strong recommendation for Ahmed Waqar Rao... His multidisciplinary approach has played a pivotal role in expanding the scope and capabilities of our firm.`,
  },
  {
    name: "Ahmed Bhan",
    position: "ML Engineer",
    relation: "Worked with Ahmed Waqar on the same team",
    date: "April 5, 2025",
    text: `I am pleased to write this recommendation for Mr. Ahmed Waqar Rao... I strongly recommend him as an expert in AI for edge systems and as an exceptional mentor.`,
  },
  {
    name: "Malik Mubashar Riaz",
    position: "Mechanical Design Engineer @ BrickCAD",
    relation: "Worked with Ahmed Waqar on the same team",
    date: "April 5, 2025",
    text: `It is a pleasure to write this recommendation for Ahmed Waqar Rao, the Co-Founder of 3Dim Engineering Solutions... His ability to lead with both clarity and empathy makes him someone I—and many others—look up to.`,
  },
];

const Recommendations: FC = () => {
  return (
    <div className="p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Recommendations</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {recommendations.map((rec, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{rec.name}</h2>
            <p className="text-sm text-gray-600">{rec.position}</p>
            <p className="text-xs text-gray-500 mt-1">
              {rec.relation} • {rec.date}
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">{rec.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
