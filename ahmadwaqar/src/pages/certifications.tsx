// src/pages/Certifications.tsx
import { FC } from "react";
import { ExternalLink } from "lucide-react";

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
    title: "Convolutional Neural Networks",
    issuer: "Coursera",
    issueDate: "Oct 2024",
    credentialId: "SKC35A8FUH31",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    issueDate: "Oct 2024",
    credentialId: "VBZKNVVTMGQL",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Sequence Models",
    issuer: "Coursera",
    issueDate: "Oct 2024",
    credentialId: "XYVVIGOMK2TP",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Structuring Machine Learning Projects",
    issuer: "Coursera",
    issueDate: "Oct 2024",
    credentialId: "NXQEPPTAN2ZD",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Calculus for Machine Learning and Data Science",
    issuer: "Coursera",
    issueDate: "Sep 2024",
    credentialId: "30ZK436H0D40",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)", "Computer Vision"],
  },
  {
    title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    issuer: "Coursera",
    issueDate: "Sep 2024",
    credentialId: "H61URSDM455V",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)", "Computer Vision"],
  },
  {
    title: "International Cultural Festival",
    issuer: "Northwestern Polytechnical University",
    issueDate: "Sep 2024",
    skills: ["Project Management"],
  },
  {
    title: "Linear Algebra for Machine Learning and Data Science",
    issuer: "Coursera",
    issueDate: "Sep 2024",
    credentialId: "4MK2LZ6FGCZR",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Mathematics for Machine Learning and Data Science Specialization",
    issuer: "Coursera",
    issueDate: "Sep 2024",
    credentialId: "A2MHR7DHLF2Q",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)", "Computer Vision"],
  },
  {
    title: "Probability & Statistics for Machine Learning & Data Science",
    issuer: "Coursera",
    issueDate: "Sep 2024",
    credentialId: "RHAWXJL48RGT",
    skills: ["Machine Learning", "Data Science"],
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "W5OCVOS3FQWM",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)", "Computer Vision"],
  },
  {
    title: "Apply Generative Adversarial Networks (GANs)",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "PCLG5JR4ZH0S",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Build Basic Generative Adversarial Networks (GANs)",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "L0MTP10TMBPG",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Build Better Generative Adversarial Networks (GANs)",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "IV93DTQDSXAO",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Computer Vision with Embedded Machine Learning",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "9Z5KFKVT7T1X",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Data Science Methodology",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "UTK5TWP26DY3",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "794DXHYTZL9O",
    skills: ["Computer Vision"],
  },
  {
    title: "Deep Learning",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "0IX1EHDHBRAY",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Deep Learning with PyTorch: Generative Adversarial Network",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "TR9XPJ6A46Q7",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Deep Learning with PyTorch: Image Segmentation",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "ZM4SSITS2O8M",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Generative Adversarial Networks (GANs) Specialization",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "O9K3NNYCQ8RX",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Introduction to Computer Vision and Image Processing",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "83W546V7DUO3",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)", "Image Processing"],
  },
  {
    title: "Introduction to Data Science Specialization",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "BN5HCFYZXDFZ",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)", "Computer Vision"],
  },
  {
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "NVPGTCW9KZNY",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)", "Computer Vision"],
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "DH82GS4NU2YO",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "UYM94PSDKDUF",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "KSNIEFNJA7XO",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Tools for Data Science",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "QMVRV5V96SMI",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "J01E7WOT55GX",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)", "Machine Learning"],
  },
  {
    title: "What is Data Science?",
    issuer: "Coursera",
    issueDate: "Aug 2024",
    credentialId: "IFPYW4V8GVZ2",
    skills: ["Computer Vision", "TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Data Analysis with AI",
    issuer: "Northwestern Polytechnical University",
    issueDate: "Jul 2024",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Efficient Computing of Deep Neural Networks",
    issuer: "Northwestern Polytechnical University",
    issueDate: "Jul 2024",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)"],
  },
  {
    title: "Introduction to Image Processing & Computer Vision (IPCV)",
    issuer: "Northwestern Polytechnical University",
    issueDate: "Jul 2024",
    skills: ["TensorFlow", "PyTorch", "Data Science", "Artificial Intelligence (AI)", "Computer Vision", "Image Processing"],
  },
  {
    title: "First 'Belt & Road' International Academic Forum of Engineering, Science and Technology",
    issuer: "Northwestern Polytechnical University",
    issueDate: "May 2024",
    skills: ["Research and Development (R&D)"],
  },
  {
    title: "Python for Data Science and Machine Learning",
    issuer: "Udemy",
    issueDate: "May 2024",
    skills: ["Python", "Data Science", "Machine Learning"],
  },
  {
    title: "Complete Python Bootcamp Go From Zero to Hero in Python 3",
    issuer: "Udemy",
    issueDate: "Apr 2024",
    skills: ["Python", "Programming"],
  },
  {
    title: "Python OOP Four Pillars of OOP in Python 3",
    issuer: "Udemy",
    issueDate: "Apr 2024",
    skills: ["Python", "Object-Oriented Programming"],
  },
  {
    title: "Business Process Transformation",
    issuer: "Pakistan Engineering Council",
    issueDate: "Dec 2023",
    skills: ["Business Process", "Transformation"],
  },
];

const Certifications: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Licenses & Certifications</h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {certifications.map((certification, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {certification.title}
              </h2>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-indigo-600 font-medium">
                  {certification.issuer}
                </p>
                <p className="text-sm text-gray-500">{certification.issueDate}</p>
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
              <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm">Certification Image</span>
              </div>
              
              {certification.credentialId && (
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  <ExternalLink size={16} className="mr-1" /> Show credential
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;