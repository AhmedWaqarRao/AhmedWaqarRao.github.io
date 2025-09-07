import { FC } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold">Ahmed Waqar Rao 👋</h1>
          <p className="mt-3 text-lg leading-relaxed">
            Passionate about <span className="font-semibold">Deep Learning</span>,{" "}
            <span className="font-semibold">Machine Learning</span>, and{" "}
            <span className="font-semibold">Computer Vision</span>, particularly
            in the technology sector using{" "}
            <span className="italic">Unmanned Aerial Vehicles (UAVs) 🚁</span>.
          </p>
        </div>

        <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
          <img
            src="/ahmadwaqar.jpg"
            alt="Ahmed Waqar Rao"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold mb-3">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
              I am a passionate researcher and engineer focused on applying my expertise in <span className="font-semibold">Deep Learning, Machine Learning, and Computer Vision</span> to optimize Unmanned Aerial Vehicles (UAVs) for resource-constrained edge environments. 🚁 My current research involves developing edge-based adaptive selection methods for efficient UAV target detection, tackling critical challenges like computational limitations, energy efficiency, and latency to enable real-time <span className="font-semibold">object detection and segmentation</span> in demanding scenarios.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
              Central to my work is architecting lightweight, high-performance models using state-of-the-art algorithms like YOLO, refined with advanced techniques such as pruning and attention mechanisms. I bridge the gap between theoretical innovation and practical deployment, successfully porting these models to edge devices like the NVIDIA Jetson AGX Xavier to achieve high-speed inference for real-world applications. My research has direct impact across critical domains such as <span className="font-semibold">precision agriculture, wildlife monitoring, disaster response, and industrial automation</span>.
          </p>
          <p className="mt-4 text-gray-700">
              I am dedicated to continuous learning 📚 and interdisciplinary collaboration, striving to push the boundaries of AI integration in UAV systems. My goal is to contribute meaningfully to the field by delivering scalable, robust, and efficient AI solutions that bridge academic research with tangible, real-world impact.
          </p>
      </section>
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-3">Contact Me</h2>
        <div className="flex flex-col gap-2 text-gray-700">
          <p>
            📫 <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:ahmedwaqarrao.909@gmail.com"
              className="text-blue-600 hover:underline"
            >
              ahmedwaqarrao.909@gmail.com
            </a>
          </p>
          <p>
            📍 <span className="font-semibold">Address:</span> Xian, Shaanxi, P.R
            China <br /> School of Computer Science, Northwestern Polytechnical
            University, 710072
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/ahmed-waqar-rao-b1b700183/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/AhmedWaqarRao"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 hover:text-black"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="mailto:ahmedwaqarrao.909@gmail.com"
            className="flex items-center gap-2 text-red-600 hover:text-red-800"
          >
            <Mail size={20} /> Email
          </a>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-3">🌱 Currently Learning</h2>
        <p>
          Artificial Intelligence in UAV technology, with a focus on advanced
          feature extraction, object detection, and segmentation.
        </p>
      </section>
    </div>
  );
};

export default Home;
