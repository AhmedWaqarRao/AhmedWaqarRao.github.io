import { FC } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Header Section with Image */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text */}
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

        {/* Right Side - Profile Image */}
        <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
          <img
            src="/ahmadwaqar.jpg"
            alt="Ahmed Waqar Rao"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </section>

      {/* About Me */}
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-3">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I am passionate about applying my experience in Deep Learning,
          Machine Learning, and Computer Vision to UAV technology 🚁. My focus
          is on <span className="font-semibold">Object Detection</span> and{" "}
          <span className="font-semibold">Segmentation</span>. I have experience
          in developing edge-based adaptive selection methods for UAV target
          detection and enhancing UAV technology through sensor group selection
          and embedded AI integration.
        </p>
        <p className="mt-4 text-gray-700">
          I am dedicated to continuous learning 📚 and staying updated on the
          latest advancements to deliver high-quality results. With strong
          problem-solving skills and a collaborative mindset, my goal is to make
          meaningful contributions to AI.
        </p>
      </section>

      {/* Contact Section */}
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

        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://www.github.com"
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

      {/* Learning Section */}
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
