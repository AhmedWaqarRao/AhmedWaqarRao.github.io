import { FC } from "react";
import { Linkedin, Github, Mail, Globe, MessageCircle, Code, Wrench, BookOpen, Cpu, Users, Briefcase, Languages } from "lucide-react";

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero Section */}
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

      {/* About Section */}
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-3">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I am a passionate researcher and engineer focused on applying my expertise in{" "}
          <span className="font-semibold">Deep Learning, Machine Learning, and Computer Vision</span> 
          to optimize Unmanned Aerial Vehicles (UAVs) for resource-constrained edge environments. 🚁 
          My current research involves developing edge-based adaptive selection methods for efficient UAV target detection, 
          tackling critical challenges like computational limitations, energy efficiency, and latency to enable real-time{" "}
          <span className="font-semibold">object detection and segmentation</span> in demanding scenarios.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Central to my work is architecting lightweight, high-performance models using state-of-the-art algorithms like YOLO, 
          refined with advanced techniques such as pruning and attention mechanisms. I bridge the gap between theoretical innovation 
          and practical deployment, successfully porting these models to edge devices like the NVIDIA Jetson AGX Xavier to achieve 
          high-speed inference for real-world applications. My research has direct impact across critical domains such as{" "}
          <span className="font-semibold">precision agriculture, wildlife monitoring, disaster response, and industrial automation</span>.
        </p>
        <p className="mt-4 text-gray-700">
          I am dedicated to continuous learning 📚 and interdisciplinary collaboration, striving to push the boundaries of AI 
          integration in UAV systems. My goal is to contribute meaningfully to the field by delivering scalable, robust, and efficient 
          AI solutions that bridge academic research with tangible, real-world impact.
        </p>
      </section>
      {/* Language Proficiency Section */}
<section className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white rounded-2xl shadow-lg p-6">
  <h2 className="text-2xl font-bold mb-4">🌍 Language Proficiency</h2>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* English */}
    <div className="p-4 bg-white/10 rounded-xl shadow hover:bg-white/20 transition">
      <h3 className="font-semibold text-lg">🇬🇧 English</h3>
      <p className="mt-2 text-sm">Fluent – Academic, Professional, and Public Speaking</p>
    </div>

    {/* Chinese HSK-3 */}
    <div className="p-4 bg-white rounded-xl shadow-lg border-2 border-yellow-400 transform hover:-translate-y-1 transition">
      <h3 className="font-semibold text-lg flex items-center gap-2 text-red-600">
        🇨🇳 Chinese <span className="text-sm bg-yellow-200 px-2 py-0.5 rounded-full font-medium">HSK-3</span>
      </h3>
      <p className="mt-2 text-gray-700 text-sm">
        Proficient in daily communication and academic interaction. Actively improving towards advanced HSK levels.
      </p>
    </div>

    {/* Urdu */}
    <div className="p-4 bg-white/10 rounded-xl shadow hover:bg-white/20 transition">
      <h3 className="font-semibold text-lg">🇵🇰 Urdu</h3>
      <p className="mt-2 text-sm">Native – Strong cultural and professional communication</p>
    </div>
  </div>
</section>

      {/* Expertise Section */}
<section className="bg-white rounded-2xl shadow p-6">
  <h2 className="text-2xl font-bold mb-6">⚡ Expertise</h2>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    {[
      "Computer Vision: Image Classification, Object Detection, Machine Learning algorithms, Deep Learning algorithms, LVMs, Neural Networks, Image Processing Techniques, and Data Annotation.",
      "Artificial Intelligence: Machine Learning, Deep Learning, LLMs, Prompt Engineering and many more.",
      "Software: Google Colab, Jupyter Notebook, Spyder, VS Code and many more.",
      "Frameworks & Libraries: PyTorch, TensorFlow, Keras, scikit-learn, Hugging Face Transformers, OpenCV, Ultralytics.",
      "Programming Languages: C++, Python, Assembly Language, Matlab",
    ].map((exp, idx) => (
      <li key={idx} className="leading-relaxed">{exp}</li>
    ))}
  </ul>
</section>

{/* Certifications Section */}
<section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow p-6">
  <h2 className="text-2xl font-bold mb-6">🏅 Certifications</h2>
  <div className="flex flex-wrap gap-3">
    {["Python Programming", "Deep Learning", "Computer Vision",'Data Analytics','Data Science','Efficient Computing','GANS'].map((cert) => (
      <span
        key={cert}
        className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium shadow hover:bg-white/30 transition"
      >
        {cert}
      </span>
    ))}
  </div>
</section>

{/* Technical Skills Section
<section className="bg-white rounded-2xl shadow p-6">
  <h2 className="text-2xl font-bold mb-6">🧑‍💻 Technical Skills</h2>
  <div className="flex flex-wrap gap-3">
    {["Leadership Qualities", "Project Management", "Problem Solving"].map((skill) => (
      <span
        key={skill}
        className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full hover:bg-blue-200 transition"
      >
        {skill}
      </span>
    ))}
  </div>
</section> */}

{/* Interests Section */}
<section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-2xl shadow p-6">
  <h2 className="text-2xl font-bold mb-6">💡 Interests</h2>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Technology Management",
        desc: "Exploring how to align business strategies with emerging technologies.",
      },
      {
        title: "News Stories",
        desc: "Following the latest developments in AI, robotics, and innovation.",
      },
      {
        title: "Engineering",
        desc: "Building solutions that combine creativity with problem-solving.",
      },
      {
        title: "Cyber Security",
        desc: "Interested in securing AI-driven systems and real-time UAV deployments.",
      },
    ].map((interest) => (
      <div
        key={interest.title}
        className="p-4 bg-white/10 rounded-xl shadow hover:bg-white/20 transition"
      >
        <h3 className="font-semibold text-lg">{interest.title}</h3>
        <p className="text-sm mt-2 text-gray-100">{interest.desc}</p>
      </div>
    ))}
  </div>
</section>




{/* Hobbies Section */}
<section className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl shadow p-6">
  <h2 className="text-2xl font-bold mb-6">🎯 Hobbies & Interests</h2>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Entrepreneurship */}
    <div className="p-4 bg-white/10 rounded-xl shadow hover:bg-white/20 transition">
      <h3 className="font-semibold text-lg flex items-center gap-2">
        🔥 Entrepreneurial Mindset
      </h3>
      <p className="text-sm mt-2 text-gray-100">
        Passionate about leading innovative IT projects (150+ completed) that drive
        business growth and strategic impact.
      </p>
    </div>

    {/* Technical Project Management */}
    <div className="p-4 bg-white/10 rounded-xl shadow hover:bg-white/20 transition">
      <h3 className="font-semibold text-lg flex items-center gap-2">
        ✅ Project Management
      </h3>
      <p className="text-sm mt-2 text-gray-100">
        Experienced in managing cross-platform projects, ensuring quality, innovation,
        and successful delivery.
      </p>
    </div>

    {/* Cross-Cultural Collaboration */}
    <div className="p-4 bg-white/10 rounded-xl shadow hover:bg-white/20 transition">
      <h3 className="font-semibold text-lg flex items-center gap-2">
        🌐 Cross-Cultural Exchange
      </h3>
      <p className="text-sm mt-2 text-gray-100">
        Engaged in international collaboration and global networking, actively
        contributing to PCCAI initiatives.
      </p>
    </div>

    {/* Robotics & AI */}
    <div className="p-4 bg-white/10 rounded-xl shadow hover:bg-white/20 transition">
      <h3 className="font-semibold text-lg flex items-center gap-2">
        🤖 Robotics & AI
      </h3>
      <p className="text-sm mt-2 text-gray-100">
        Exploring cutting-edge technologies in robotics, deep learning, and AI-powered
        solutions for real-world problems.
      </p>
    </div>

    {/* Tech & English Talks */}
    <div className="p-4 bg-white/10 rounded-xl shadow hover:bg-white/20 transition">
      <h3 className="font-semibold text-lg flex items-center gap-2">
        🎤 Tech & English Talks
      </h3>
      <p className="text-sm mt-2 text-gray-100">
        Enjoy delivering engaging talks on technology and English communication,
        inspiring others to learn and grow.
      </p>
    </div>

    {/* Content Creation */}
    <div className="p-4 bg-white/10 rounded-xl shadow hover:bg-white/20 transition">
      <h3 className="font-semibold text-lg flex items-center gap-2">
        📝 Content Creation
      </h3>
      <p className="text-sm mt-2 text-gray-100">
        Active in creating content on AI, robotics, and innovation to share knowledge
        and inspire the global community.
      </p>
    </div>

  </div>
</section>
{/* References Section */}
<section className="bg-white rounded-2xl shadow p-8">
  <h2 className="text-2xl font-bold mb-6">📌 References</h2>
  <ul className="space-y-6">
    {[
      {
        name: "Yu Zhang",
        title: "Professor",
        affiliation:
          "Department of AI Computing System, School of Computer Science, Northwestern Polytechnical University",
        address:
          "1 Dongxiang Road, Chang'an District, Xi'an, Shaanxi, 710129, P.R. China",
        email: "zhangyu@nwpu.edu.cn",
        phone: "(+86) 13891997511",
        website: "https://yuzhang-nwpu.github.io/yuzhang/",
        relation: "🎓 Academic Mentor",
        color: "blue",
      },
      {
        name: "Umar Shahbaz Khan",
        title: "Tenured Associate Professor / Project Director NCRA",
        affiliation:
          "Department of Mechatronics Engineering, College of Electrical & Mechanical Engineering, NUST",
        address: "Peshawar Road, Rawalpindi 46000, Pakistan",
        email: "u.shahbaz@ceme.nust.edu.pk",
        phone: "(+92) 3005533775",
        relation: "🎓 Former Teacher & Research Supervisor",
        color: "green",
      },
      {
        name: "Hamid Jabbar",
        title: "Head of Department & Associate Professor",
        affiliation:
          "Mechatronics Engineering Department, College of Electrical & Mechanical Engineering, NUST",
        address: "Peshawar Road, Rawalpindi 46000, Pakistan",
        email: "hamid.jabbar@ceme.nust.edu.pk",
        phone: "(+92) 3005274026",
        relation: "🎓 Department Head & Mentor",
        color: "indigo",
      },
    ].map((ref) => (
      <li
        key={ref.name}
        className="border-l-4 pl-4 hover:shadow transition rounded"
        style={{ borderColor: `var(--tw-color-${ref.color}-500)` }}
      >
        <h3 className={`text-lg font-semibold text-${ref.color}-700`}>
          {ref.name}
        </h3>
        <p className="text-sm text-gray-600">{ref.title}</p>
        <p className="text-sm text-gray-600">{ref.affiliation}</p>
        <p className="text-sm text-gray-600">{ref.address}</p>

        <div className="mt-2 space-y-1 text-sm">
          <p>
            <span className="font-medium text-gray-800">📧 Email:</span>{" "}
            <a
              href={`mailto:${ref.email}`}
              className="text-blue-600 hover:underline"
            >
              {ref.email}
            </a>
          </p>
          <p>
            <span className="font-medium text-gray-800">📞 Phone:</span>{" "}
            <a href={`tel:${ref.phone}`} className="text-blue-600 hover:underline">
              {ref.phone}
            </a>
          </p>
          {ref.website && (
            <p>
              <span className="font-medium text-gray-800">🌐 Website:</span>{" "}
              <a
                href={ref.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {ref.website}
              </a>
            </p>
          )}
        </div>

        <p className="mt-2 text-sm font-medium text-gray-800">
          {ref.relation}
        </p>
      </li>
    ))}
  </ul>
</section>



      {/* Contact Section */}
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-3">Contact Me</h2>
        <div className="flex flex-col gap-2 text-gray-700">
          <p>
            📫 <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:ahmedwaqarrao.909@gmail.com" className="text-blue-600 hover:underline">
              ahmedwaqarrao.909@gmail.com
            </a>
          </p>
          <p>
            📞 <span className="font-semibold">Phone:</span> 
            <a href="tel:+923064922957" className="text-blue-600 hover:underline ml-1">+92 306 4922957</a> / 
            <a href="tel:+8617792251931" className="text-blue-600 hover:underline"> +86 177 92251931</a>
          </p>
          <p>
            📍 <span className="font-semibold">Address:</span> Xian, Shaanxi, P.R China <br /> 
            School of Computer Science, Northwestern Polytechnical University, 710072
          </p>
        </div>

        <div className="flex gap-4 mt-4 flex-wrap">
          <a href="https://www.linkedin.com/in/ahmed-waqar-rao-b1b700183/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-900">
            <Linkedin size={20} /> LinkedIn
          </a>

          <a href="https://github.com/AhmedWaqarRao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-black">
            <Github size={20} /> GitHub
          </a>

          <a href="mailto:ahmedwaqarrao.909@gmail.com" className="flex items-center gap-2 text-red-600 hover:text-red-800">
            <Mail size={20} /> Email
          </a>

          <a href="https://orcid.org/0009-0007-3759-2125" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-700 hover:text-green-900">
            <Globe size={20} /> ORCID
          </a>

          <a href="https://wa.me/923064922957" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:text-green-800">
            <MessageCircle size={20} /> WhatsApp
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
