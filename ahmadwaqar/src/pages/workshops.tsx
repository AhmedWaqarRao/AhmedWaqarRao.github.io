import { FC, useState } from "react";
import { Download, X } from "lucide-react";

interface Workshop {
  title: string;
  issuer: string;
  issueDate: string;
  skills: string[];
  imageUrl?: string;
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
    title: "Belt & Road Academic Forum Certificate",
    issuer: "Northwestern Polytechnical University",
    issueDate: "May 2024",
    skills: ["Research and Development (R&D)"],
    imageUrl: "/certifications/Belt & Road Academic Forum Certificate.jpg",
  },
];

const Workshops: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-emerald-800">
          Workshops & Forums
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-5 md:p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105"
            >
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {workshop.title}
                </h2>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-emerald-600 font-medium">
                    {workshop.issuer}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    {workshop.issueDate}
                  </p>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700">Skills:</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {workshop.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <div
                  className="w-28 h-20 md:w-32 md:h-24 bg-gray-200 rounded flex items-center justify-center overflow-hidden cursor-pointer"
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
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
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
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-4 border-t flex justify-end">
              <a
                href={selectedImage}
                download
                className="flex items-center text-green-600 hover:text-green-800"
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
