import { FC, useState } from "react";
import { Download, X, MapPin, Calendar, Info } from "lucide-react";

interface Workshop {
  title: string;
  issuer: string;
  issueDate: string;
  skills: string[];
  imageUrl?: string;
  details?: string;
  location?: string;
}

const workshops: Workshop[] = [
  {
    title: "NPU Cultural Festival Certificate",
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
    imageUrl: "certifications/Data Analysis with AI (English Translation).jpg",
  },
  {
    title: "Efficient Computing of Deep Neural Networks",
    issuer: "Northwestern Polytechnical University",
    issueDate: "Jul 2024",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
    imageUrl: "/certifications/Efficient Computing of Deep Neural Networks.jpg",
  },
  {
    title: "Image Processing & Computer Vision (IPCV)",
    issuer: "Northwestern Polytechnical University",
    issueDate: "Jul 2024",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Data Science",
      "Artificial Intelligence (AI)",
      "Computer Vision",
      "Image Processing",
    ],
    imageUrl: "/certifications/Image Processing & Computer Vision Certificate.jpg",
  },
  {
    title: "First Belt and Road Academic Forum of Engineering and Technology",
    issuer: "Northwestern Polytechnical University",
    issueDate: "May 2024",
    skills: ["Research and Development (R&D)", "International Collaboration"],
    imageUrl: "/certifications/Belt & Road Academic Forum Certificate.jpg",
    location: "Xi’an, China",
    details:
      "The First Belt and Road Academic Forum of Engineering and Technology promoted global cooperation in engineering and technology among Belt and Road Initiative nations. It addressed global challenges using collaborative research and technology breakthroughs, strengthening academia-industry ties to foster economic growth and sustainable development.",
  },
];

const Workshops: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-emerald-800 tracking-tight">
          🎓 Workshops & Forums
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between border border-emerald-100 hover:shadow-2xl transition duration-300 hover:-translate-y-1"
            >
              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-800 leading-snug">
                  {workshop.title}
                </h2>

                <div className="flex justify-between items-center mt-3">
                  <p className="text-sm text-emerald-600 font-medium">
                    {workshop.issuer}
                  </p>
                  <p className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
                    <Calendar size={14} /> {workshop.issueDate}
                  </p>
                </div>

                {workshop.location && (
                  <p className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                    <MapPin size={14} className="text-emerald-600" />
                    {workshop.location}
                  </p>
                )}

                {/* Expandable details */}
                {workshop.details && (
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
                        {workshop.details}
                      </p>
                    )}
                  </div>
                )}

                {/* Skills */}
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-700">Skills:</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {workshop.skills.map((skill, skillIndex) => (
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
                  onClick={() => setSelectedImage(workshop.imageUrl || null)}
                >
                  {workshop.imageUrl ? (
                    <img
                      src={workshop.imageUrl}
                      alt={workshop.title}
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
              <h3 className="text-lg font-semibold">Workshop Certificate</h3>
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
                alt="Workshop"
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

export default Workshops;
