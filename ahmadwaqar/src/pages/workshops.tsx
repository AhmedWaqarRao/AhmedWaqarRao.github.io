import { FC, useState } from "react";
import { Download, X, MapPin, Calendar, Info } from "lucide-react";

interface Event {
  title: string;
  issuer: string;
  issueDate: string;
  skills: string[];
  imageUrl?: string;
  details?: string;
  location?: string;
}

const workshops: Event[] = [
  {
    title: "Pakistan-China Commerce and Trade Alliance",
    issuer: "PCCAI",
    issueDate: "2024",
    skills: ["International Trade", "Business Development", "Economic Partnerships"],
    imageUrl: "/Cpec.jpg",
  },
  
  {
    title: "NPU Cultural Festival",
    issuer: "Northwestern Polytechnical University",
    issueDate: "Sep 2024",
    skills: ["Project Management"],
    imageUrl: "/certifications/NPU Cultural Festival Certificate.jpg",
  },
  {
    title: "Data Analysis with AI",
    issuer: "Northwestern Polytechnical University",
    issueDate: "Jul 2024",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
    imageUrl: "/certifications/Data Analysis with AI (English Translation).jpg",
  },
  {
    title: "Efficient Computing of Deep Neural Networks",
    issuer: "Northwestern Polytechnical University",
    issueDate: "Jul 2024",
    skills: ["TensorFlow", "PyTorch", "Deep Learning"],
    imageUrl: "/certifications/Efficient Computing of Deep Neural Networks.jpg",
  },
  {
    title: "Image Processing & Computer Vision (IPCV)",
    issuer: "Northwestern Polytechnical University",
    issueDate: "Jul 2024",
    skills: ["Computer Vision", "Image Processing", "AI"],
    imageUrl: "/certifications/Image Processing & Computer Vision Certificate.jpg",
  },
];

const conferences: Event[] = [
  {
    title: "First Belt and Road Academic Forum of Engineering and Technology",
    issuer: "Northwestern Polytechnical University",
    issueDate: "May 2024",
    skills: ["Research and Development (R&D)", "International Collaboration"],
    imageUrl: "/certifications/Belt & Road Academic Forum Certificate.jpg",
    location: "Xi’an, China",
    details:
      "The First Belt and Road Academic Forum of Engineering and Technology promoted global cooperation in engineering and technology among Belt and Road Initiative nations.",
  },
  {
    title: "Second Belt & Road Academic Forum of Engineering Science and Technology",
    issuer: "Northwestern Polytechnical University",
    issueDate: "2024",
    skills: ["AI", "Large Language Models", "Deep Learning"],
    imageUrl: "/secondBeltandRoad.jpg",
    location: "Xi’an, China",
    details:
      "Insightful discussion with Associate Professor Huanjie Tao on LLMs, DNNs, and Neural Network Models.",
  },
  {
    title: "2024 China (Xi’an) International Low-Altitude Economic Development Conference",
    issuer: "PCCAI",
    issueDate: "2024",
    skills: ["Sustainable Aviation", "UAVs", "Smart Technologies"],
    imageUrl: "/ED.jpg",
    location: "Xi’an, China",
    details:
      "Focused on Green Low-Altitude Innovation and strengthening China-Pakistan cooperation in smart aviation.",
  },
  {
    title: "8th Silk Road International Exposition & Pakistan-China Economic and Trade Cooperation Fair",
    issuer: "PCCAI",
    issueDate: "2024",
    skills: ["International Trade", "Investment Opportunities", "CPEC"],
    imageUrl: "/ITForum.jpg",
    location: "Xi’an, China",
    details:
      "Showcased strong bilateral relations between Pakistan and China under CPEC Phase II.",
  },
];

const WorkshopsConferences: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [tab, setTab] = useState<"conferences" | "workshops">("conferences");

  const data = tab === "conferences" ? conferences : workshops;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-emerald-800">
          🎓 Workshops & Conferences
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setTab("conferences")}
            className={`px-6 py-2 rounded-l-full font-semibold ${
              tab === "conferences"
                ? "bg-emerald-600 text-white"
                : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
            }`}
          >
            🌍 Conferences
          </button>
          <button
            onClick={() => setTab("workshops")}
            className={`px-6 py-2 rounded-r-full font-semibold ${
              tab === "workshops"
                ? "bg-emerald-600 text-white"
                : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
            }`}
          >
            
            🏫 Workshops
          </button>
          
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between border border-emerald-100 hover:shadow-2xl transition duration-300 hover:-translate-y-1"
            >
              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-800 leading-snug">
                  {event.title}
                </h2>

                <div className="flex justify-between items-center mt-3">
                  <p className="text-sm text-emerald-600 font-medium">
                    {event.issuer}
                  </p>
                  <p className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
                    <Calendar size={14} /> {event.issueDate}
                  </p>
                </div>

                {event.location && (
                  <p className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                    <MapPin size={14} className="text-emerald-600" />
                    {event.location}
                  </p>
                )}

                {/* Expandable details */}
                {event.details && (
                  <div className="mt-4">
                    <button
                      onClick={() =>
                        setExpanded(expanded === index ? null : index)
                      }
                      className="flex items-center gap-1 text-emerald-700 text-sm font-medium hover:underline"
                    >
                      <Info size={16} />
                      {expanded === index ? "Hide Details" : "View Details"}
                    </button>
                    {expanded === index && (
                      <p className="mt-2 text-sm text-gray-700 bg-emerald-50 p-3 rounded-lg">
                        {event.details}
                      </p>
                    )}
                  </div>
                )}

                {/* Skills */}
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-700">Skills:</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {event.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="mt-6 flex justify-center">
                <div
                  className="w-32 h-24 md:w-36 md:h-28 bg-gray-100 rounded-lg shadow-inner flex items-center justify-center overflow-hidden cursor-pointer hover:ring-2 hover:ring-emerald-400"
                  onClick={() => setSelectedImage(event.imageUrl || null)}
                >
                  {event.imageUrl ? (
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-xs text-center p-2">
                      No Image
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto shadow-xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Certificate</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <img
                src={selectedImage}
                alt="Event"
                className="w-full h-auto max-h-[70vh] object-contain rounded"
              />
            </div>
            <div className="p-4 border-t flex justify-end">
              <a
                href={selectedImage}
                download
                className="flex items-center text-green-600 hover:text-green-800 font-medium"
              >
                <Download size={16} className="mr-1" /> Download Image
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopsConferences;
