import { FC } from "react";

interface Publication {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const publications: Publication[] = [
  {
    id: 1,
    title:
      "🚀 Adaptive-Precision-Spraying-Tasks-on-Edge-Device-Using-Real-Time-Crop-Segmentation",
    subtitle:
      '"Adaptive Edge AI Deployment for Real-Time Crop Segmentation Using Scenario-Aware Dynamic Model Pruning"',
    description:
      "This work presents an advanced research implementation for real-time crop segmentation using YOLOv8L-Seg, optimized for edge AI deployment on Jetson Xavier with TensorRT acceleration and entropy-guided dynamic pruning (F2Zip).",
    tags: [
      "Edge AI",
      "YOLOv8-Seg",
      "Model Pruning",
      "TensorRT",
      "Smart Agriculture",
    ],
  },
  {
    id: 2,
    title:
      "Passive-Two-Phase-Flow-Regime-Identification-based-on-Wavelet-Transform-Scalogram-and-Deep-Learning",
    subtitle: "",
    description:
      "This research focuses on two-phase flow regime identification using wavelet transform scalograms combined with deep learning architectures for robust, accurate classification of complex flow patterns.",
    tags: ["Deep Learning", "Wavelet Transform", "Scalogram", "Flow Regimes"],
  },
  {
    id: 3,
    title:
      "Time Aware Deep Reinforcement Learning Framework for Dynamics Multi Agent Perception",
    subtitle: "",
    description:
      "This research introduces a time-aware deep reinforcement learning framework designed to enhance dynamic multi-agent perception, enabling improved decision-making and coordination among agents in complex environments.",
    tags: [ "Deep Reinforcement Learning", "Multi-Agent Systems", "Time Awareness" ],
  },
  {
    id: 4,
    title:
      "Impact of Colormap Selection on Deep Learning Predictions using Wavelet Scalograms for Flow Regime Identification",
    subtitle: "",
    description:
      "This research investigates the effect of colormap selection on deep learning model predictions, specifically using wavelet scalograms for flow regime identification.",
    tags: ["Deep Learning", "Wavelet Transform", "Colormap Selection", "Flow Regimes"],
  },
];

const Publications: FC = () => {
  return (
    <div className="p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">📚 Publications</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {publications.map((pub) => (
          <div
            key={pub.id}
            className="group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
          >
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
              {pub.title}
            </h2>

            {pub.subtitle && (
              <p className="text-sm text-gray-500 italic mt-1">{pub.subtitle}</p>
            )}

            <p className="text-gray-700 mt-4 flex-grow leading-relaxed">
              {pub.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {pub.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* <div className="mt-6 flex justify-end">
              <button className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
                View Details
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
