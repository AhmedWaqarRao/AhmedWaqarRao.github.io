// src/pages/Certifications.tsx
import { FC } from "react";
import { ExternalLink, Download, X } from "lucide-react";
import { useState } from "react";

interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills: string[];
  imageUrl?: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    title: "Advanced Learning Algorithms",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "W5OCVOS3FQWM",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)", "Computer Vision"],
    imageUrl: "/certifications/Advanced Learning Algorithms.png",
    credentialUrl: "/certifications/Advanced Learning Algorithms.pdf",
  },
  {
    title: "Apply Generative Adversarial Networks (GANs)",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "PCLG5JR4ZH0S",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
    imageUrl: "/certifications/Apply Generative Adversarial Networks (GANs).png",
    credentialUrl: "/certifications/Apply Generative Adversarial Networks (GANs).pdf",
  },
  {
    title: "Build Basic Generative Adversarial Networks (GANs)",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "L0MTP10TMBPG",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
    imageUrl: "/certifications/Build Basic Generative Adversarial Networks (GANs).png",
    credentialUrl: "/certifications/Build Basic Generative Adversarial Networks (GANs).pdf",
  },
  {
    title: "Build Better Generative Adversarial Networks (GANs)",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "IV93DTQDSXAO",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
    imageUrl: "/certifications/Build Better Generative Adversarial Networks (GANs).png",
    credentialUrl: "/certifications/Build Better Generative Adversarial Networks (GANs).pdf",
  },
  {
    title: "Calculus for Machine Learning and Data Science",
    issuer: "Coursera",
    issueDate: "Sep 2024",
    credentialId: "30ZK436H0D40",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)", "Computer Vision"],
    imageUrl: "/certifications/Calculus for Machine Learning and Data Science.png",
    credentialUrl: "/certifications/Calculus for Machine Learning and Data Science.pdf",
  },
  {
    title: "Computer Vision with Embedded Machine Learning",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "9Z5KFKVT7T1X",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
    imageUrl: "/certifications/Computer Vision with Embedded Machine Learning.png",
    credentialUrl: "/certifications/Computer Vision with Embedded Machine Learning.pdf",
  },
  {
    title: "Convolutional Neural Networks",
    issuer: "Coursera",
    issueDate: "Oct 2024",
    credentialId: "SKC35A8FUH31",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
    imageUrl: "/certifications/Convolutional Neural Networks.png",
    credentialUrl: "/certifications/Convolutional Neural Networks.pdf",
  },
  {
    title: "Data Science Methodology",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "UTK5TWP26DY3",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
    imageUrl: "/certifications/Data Science Methodology.png",
    credentialUrl: "/certifications/Data Science Methodology.pdf",
  },
  {
    title: "Data Science Specialization",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "BN5HCFYZXDFZ",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)", "Computer Vision"],
    imageUrl: "/certifications/Data Science Specialization.png",
    credentialUrl: "/certifications/Data Science Specialization.pdf",
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "794DXHYTZL9O",
    skills: ["SQL", "Data Science"],
    imageUrl: "/certifications/Databases and SQL for Data Science with Python.png",
    credentialUrl: "/certifications/Databases and SQL for Data Science with Python.pdf",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    issueDate: "Oct 2024",
    credentialId: "VBZKNVVTMGQL",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
    imageUrl: "/certifications/deep-learning-specialization.png",
    credentialUrl: "/certifications/deep-learning-specialization.pdf",
  },
  {
    title: "Deep Learning with PyTorch: Generative Adversarial Network",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "TR9XPJ6A46Q7",
    skills: ["GANs", "PyTorch", "AI"],
    imageUrl: "/certifications/Deep Learning with PyTorch  Generative Adversarial Network.png",
    credentialUrl: "/certifications/Deep Learning with PyTorch  Generative Adversarial Network.pdf",
  },
  {
    title: "Deep Learning with PyTorch: Image Segmentation",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "ZM4SSITS2O8M",
    skills: ["Image Segmentation", "Computer Vision", "PyTorch"],
    imageUrl: "/certifications/Deep Learning with PyTorch Image Segmentation.png",
    credentialUrl: "/certifications/Deep Learning with PyTorch Image Segmentation.pdf",
  },
  {
    title: "Deep Neural Networks with PyTorch",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "XYZ1234",
    skills: ["PyTorch", "Deep Learning"],
    imageUrl: "/certifications/Deep Neural Networks with PyTorch.png",
    credentialUrl: "/certifications/Deep Neural Networks with PyTorch.pdf",
  },
  {
    title: "Generative Adversarial Networks (GANs) Specialization",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "O9K3NNYCQ8RX",
    skills: ["GANs", "Computer Vision", "AI"],
  
    imageUrl: "/certifications/Generative Adversarial Networks (GANs).png",
    credentialUrl: "/certifications/Generative Adversarial Networks (GANs).pdf",
  },
  {
    title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    issuer: "Coursera",
    issueDate: "Sep 2024",
    credentialId: "H61URSDM455V",
    skills: ["Optimization", "AI"],

    imageUrl: "/certifications/Improving Deep Neural Networks Hyperparameter Tuning, Regularization and Optimization.png",
    credentialUrl: "/certifications/Improving Deep Neural Networks Hyperparameter Tuning, Regularization and Optimization.pdf",
  },
  {
    title: "Introduction to Computer Vision and Image Processing",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "83W546V7DUO3",
    skills: ["Computer Vision", "Image Processing", "AI"],

    imageUrl: "/certifications/Introduction to Computer Vision and Image Processing.png",
    credentialUrl: "/certifications/Introduction to Computer Vision and Image Processing.pdf",
  },
  {
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "NVPGTCW9KZNY",
    skills: ["Keras", "Deep Learning"],
  
    imageUrl: "/certifications/Introduction to Deep Learning & Neural Networks with Keras.png",
    credentialUrl: "/certifications/Introduction to Deep Learning & Neural Networks with Keras.pdf",
  },
  {
    title: "Linear Algebra for Machine Learning and Data Science",
    issuer: "Coursera",
    issueDate: "Sep 2024",
    credentialId: "4MK2LZ6FGCZR",
    skills: ["Math", "Linear Algebra", "ML"],

    imageUrl: "/certifications/Linear Algebra for Machine Learning and Data Science.png",
    credentialUrl: "/certifications/Linear Algebra for Machine Learning and Data Science.pdf",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "DH82GS4NU2YO",
    skills: ["Machine Learning", "AI"],

    imageUrl: "/certifications/Machine Learning Specialization.png",
    credentialUrl: "/certifications/Machine Learning Specialization.pdf",
  },
  {
    title: "Mathematics for Machine Learning and Data Science Specialization",
    issuer: "Coursera",
    issueDate: "Sep 2024",
    credentialId: "A2MHR7DHLF2Q",
    skills: ["Math", "ML", "AI"],

    imageUrl: "/certifications/Mathematics for Machine Learning and Data Science.png",
    credentialUrl: "/certifications/Mathematics for Machine Learning and Data Science.pdf",
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "UYM94PSDKDUF",
    skills: ["Neural Networks", "AI"],

    imageUrl: "/certifications/Neural Networks and Deep Learning.png",
    credentialUrl: "/certifications/Neural Networks and Deep Learning.pdf",
  },
  {
    title: "Probability & Statistics for Machine Learning & Data Science",
    issuer: "Coursera",
    issueDate: "Sep 2024",
    credentialId: "RHAWXJL48RGT",
    skills: ["Probability", "Statistics", "ML"],
  
    imageUrl: "/certifications/Probability & Statistics for Machine Learning & Data Science.png",
    credentialUrl: "/certifications/Probability & Statistics for Machine Learning & Data Science.pdf",
  },
  {
    title: "Sequence Models",
    issuer: "Coursera",
    issueDate: "Oct 2024",
    credentialId: "XYVVIGOMK2TP",
    skills: ["RNN", "LSTM", "AI"],

    imageUrl: "/certifications/Sequence Models.png",
    credentialUrl: "/certifications/Sequence Models.pdf",
  },
  {
    title: "Structuring Machine Learning Projects",
    issuer: "Coursera",
    issueDate: "Oct 2024",
    credentialId: "NXQEPPTAN2ZD",
    skills: ["ML Project Design", "AI"],

    imageUrl: "/certifications/Structuring Machine Learning Projects.png",
    credentialUrl: "/certifications/Structuring Machine Learning Projects.pdf",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "KSNIEFNJA7XO",
    skills: ["Regression", "Classification", "ML"],
 
    imageUrl: "/certifications/Supervised Machine Learning Regression and Classification.png",
    credentialUrl: "/certifications/Supervised Machine Learning Regression and Classification.pdf",
  },
  {
    title: "Tools for Data Science",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "QMVRV5V96SMI",
    skills: ["Data Science Tools"],
 
    imageUrl: "/certifications/Tools for Data Science.png",
    credentialUrl: "/certifications/Tools for Data Science.pdf",
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "J01E7WOT55GX",
    skills: ["Unsupervised Learning", "Reinforcement Learning"],

    imageUrl: "/certifications/Unsupervised Learning, Recommenders, Reinforcement Learning.png",
    credentialUrl: "/certifications/Unsupervised Learning, Recommenders, Reinforcement Learning.pdf",
  },
  {
    title: "What is Data Science?",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "IFPYW4V8GVZ2",
    skills: ["Intro to DS"],

    imageUrl: "/certifications/What is Data Science.png",
    credentialUrl: "/certifications/What is Data Science.pdf",
  },
];


const Certifications: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const handleShowCredential = (url?: string) => {
    if (url) {
      setSelectedPdf(url);
    }
  };

  const handleShowImage = (url?: string) => {
    if (url) {
      setSelectedImage(url);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-indigo-800">
          Licenses & Certifications
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-5 md:p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105"
            >
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {certification.title}
                </h2>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-indigo-600 font-medium">
                    {certification.issuer}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">{certification.issueDate}</p>
                </div>
                
                {certification.credentialId && (
                  <p className="text-xs text-gray-500 mt-2">
                    Credential ID: {certification.credentialId}
                  </p>
                )}
                
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700">Skills:</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {certification.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div 
                  className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => handleShowImage(certification.imageUrl)}
                >
                  {certification.imageUrl ? (
                    <img
                      src={certification.imageUrl}
                      alt={certification.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-xs text-center p-2">No Image Available</span>
                  )}
                </div>
                
                {/* {certification.credentialUrl && (
                  <button 
                    onClick={() => handleShowCredential(certification.credentialUrl)}
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    <ExternalLink size={16} className="mr-1" /> Show credential
                  </button>
                )} */}
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
              <h3 className="text-lg font-semibold">Certificate Preview</h3>
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
                alt="Certificate" 
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-4 border-t flex justify-end">
              <a 
                href={selectedImage} 
                download 
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Download size={16} className="mr-1" /> Download Image
              </a>
            </div>
          </div>
        </div>
      )}

      {/* PDF Modal */}
{/* {selectedPdf && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg w-full max-w-4xl max-h-full flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="text-lg font-semibold">Certificate PDF</h3>
        <button 
          onClick={() => setSelectedPdf(null)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>
      <div className="flex-grow p-4">
        <iframe 
          src={selectedPdf} 
          title="Certificate PDF" 
          className="w-full h-96 md:h-[500px] rounded"
        />
      </div>
      <div className="p-4 border-t flex justify-end">
        <a 
          href={selectedPdf} 
          download 
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <Download size={16} className="mr-1" /> Download PDF
        </a>
      </div>
    </div>
  </div>
)} */}

    </div>
  );
};

export default Certifications;