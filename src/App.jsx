import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from "react-icons/fa";

import {
  SiMongodb,
  SiDjango,
  SiTailwindcss
} from "react-icons/si";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div>

      {/* Navbar */}

      <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-4 md:py-6 bg-slate-900 sticky top-0 z-50 shadow-lg">

  <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4 md:mb-0">
    Jainam.dev
  </h1>

  <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-lg">

    <li>
      <a href="#about" className="hover:text-cyan-400 transition">
        About
      </a>
    </li>

    <li>
      <a href="#skills" className="hover:text-cyan-400 transition">
        Skills
      </a>
    </li>

    <li>
      <a href="#projects" className="hover:text-cyan-400 transition">
        Projects
      </a>
    </li>

    <li>
      <a href="#contact" className="hover:text-cyan-400 transition">
        Contact
      </a>
    </li>

  </ul>

</nav>

      {/* Hero Section */}

      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20 top-20 left-10"></div>

        <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-20 bottom-10 right-10"></div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-bold"
        >
          Hi, I'm{" "}
          <span className="text-cyan-400">
            Jainam 👋
          </span>
        </motion.h1>

        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="mt-6 text-2xl text-slate-300 max-w-2xl font-semibold"
>

  <TypeAnimation
    sequence={[
      "Full Stack Developer 🚀",
      2000,
      "MERN Stack Developer 💻",
      2000,
      "Django Developer ⚡",
      2000,
      "Machine Learning Enthusiast 🤖",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />

</motion.div>

        {/* Buttons */}

        <div className="mt-8 flex gap-6">

          <a
            href="#projects"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-110 duration-300 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            Contact Me
          </a>

        </div>

        {/* Social Icons */}

        <div className="flex gap-8 text-4xl mt-10">

          <a href="https://github.com/jainamja/">
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>

          <a href="https://www.linkedin.com/in/jainam-jadav-287380321/">
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>

          <a href="https://www.instagram.com/jainam_0512/">
            <FaInstagram className="hover:text-cyan-400 transition" />
          </a>

        </div>

      </section>

      {/* About Section */}

<section
  id="about"
  className="min-h-screen flex flex-col justify-center items-center px-6"
>

  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl font-bold text-cyan-400 mb-10"
  >
    About Me
  </motion.h1>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="max-w-4xl bg-slate-800 p-10 rounded-3xl shadow-2xl"
  >

    <p className="text-lg text-slate-300 leading-9">

      I'm a passionate Full Stack Developer skilled in
      MERN Stack, Django, and Machine Learning.

      I enjoy building responsive web applications,
      dashboards, and AI-powered systems that solve
      real-world problems 🚀

    </p>

    <div className="grid md:grid-cols-3 gap-6 mt-10">

      <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition">
        <h2 className="text-2xl font-bold text-cyan-400">
          Frontend
        </h2>

        <p className="mt-3 text-slate-400">
          React, Tailwind CSS, JavaScript
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition">
        <h2 className="text-2xl font-bold text-cyan-400">
          Backend
        </h2>

        <p className="mt-3 text-slate-400">
          Node.js, Express.js, Django
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition">
        <h2 className="text-2xl font-bold text-cyan-400">
          Database
        </h2>

        <p className="mt-3 text-slate-400">
          MongoDB, SQLite, MySQL
        </p>
      </div>

    </div>

  </motion.div>

</section>

      {/* Skills Section */}

<section
  id="skills"
  className="min-h-screen flex flex-col justify-center items-center px-6"
>

  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl font-bold text-cyan-400 mb-16"
  >
    Skills
  </motion.h1>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

    {[
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <FaGithub />, name: "GitHub" },
    ].map((skill, index) => (

      <motion.div
        key={index}
        whileHover={{ scale: 1.1 }}
        className="bg-slate-800 p-8 rounded-3xl flex flex-col items-center shadow-xl"
      >

        <div className="text-6xl text-cyan-400">
          {skill.icon}
        </div>

        <h2 className="mt-4 text-xl font-semibold">
          {skill.name}
        </h2>

      </motion.div>

    ))}

  </div>

</section>
     {/* Projects Section */}

<section
  id="projects"
  className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
>

  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl font-bold text-cyan-400 mb-16"
  >
    Projects
  </motion.h1>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">

    {/* Project Card 1 */}

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-800 rounded-3xl overflow-hidden shadow-2xl"
    >

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        alt="project"
        className="h-52 w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-cyan-400">
          Student Performance Predictor
        </h2>

        <p className="text-slate-300 mt-4">
          Machine Learning + Django based web app
          that predicts student performance using
          analytics and charts.
        </p>

        <div className="flex gap-4 mt-6">

          <a
            href="#"
            className="bg-cyan-400 text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/jainamja/Student_Performance_Predictor" target="_blank"
            className="border border-cyan-400 px-4 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            GitHub
          </a>

        </div>

      </div>

    </motion.div>

    {/* Project Card 2 */}

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-800 rounded-3xl overflow-hidden shadow-2xl"
    >

      <img
        src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b"
        alt="project"
        className="h-52 w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-cyan-400">
          Goal Tracker MERN App
        </h2>

        <p className="text-slate-300 mt-4">
          Full-stack MERN application with JWT
          authentication, streak tracking,
          dashboard, and analytics.
        </p>

        <div className="flex gap-4 mt-6">

          <a
            href="#"
            className="bg-cyan-400 text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/jainamja/Goal_Tracker"
            className="border border-cyan-400 px-4 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            GitHub
          </a>

        </div>

      </div>

    </motion.div>



    {/* Project Card 3 */}

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-800 rounded-3xl overflow-hidden shadow-2xl"
    >

    <img
      src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
      alt="project"
      className="h-52 w-full object-cover"
    />

  <div className="p-6">

    <h2 className="text-2xl font-bold text-cyan-400">
      Library Management System
    </h2>

    <p className="text-slate-300 mt-4">
      Full-stack library management application
      with book issuing, return system,
      authentication, and admin dashboard.
    </p>

    <div className="flex gap-4 mt-6">

      <a
        href="#"
        className="bg-cyan-400 text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
      >
        Live Demo
      </a>

      <a
        href="#"
        className="border border-cyan-400 px-4 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition"
      >
        GitHub
      </a>

    </div>

  </div>

</motion.div>

  </div>

</section>

     {/* Contact Section */}

<section
  id="contact"
  className="min-h-screen flex flex-col justify-center items-center px-6"
>

  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl font-bold text-cyan-400 mb-12"
  >
    Contact Me
  </motion.h1>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="bg-slate-800 p-10 rounded-3xl shadow-2xl max-w-3xl w-full text-center"
  >

    <h2 className="text-3xl font-bold mb-6">
      Let's Work Together 🚀
    </h2>

    <p className="text-slate-300 text-lg leading-8">
      I'm open to internships, freelance projects,
      and collaboration opportunities in
      Full Stack Development and Machine Learning.
    </p>

    {/* Buttons */}

    <div className="flex flex-wrap justify-center gap-6 mt-10">

      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=jainamjadav98@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-110 duration-300 transition"
>
  Email Me
</a>

      <a
        href="/resume.pdf" download className="border border-cyan-400 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black transition"
      >
        Download Resume
      </a>

    </div>

    {/* Social Links */}

    <div className="flex justify-center gap-8 text-4xl mt-10">

      <a href="https://github.com/jainamja/" target="_blank">
        <FaGithub className="hover:text-cyan-400 transition" />
      </a>

      <a href="https://www.linkedin.com/in/jainam-jadav-287380321/" target="_blank">
        <FaLinkedin className="hover:text-cyan-400 transition" />
      </a>

      <a href="https://www.instagram.com/jainam_0512/" target="_blank">
        <FaInstagram className="hover:text-cyan-400 transition" />
      </a>

    </div>

  </motion.div>

</section>

    {/* Footer */}

<footer className="bg-slate-950 text-center py-6 border-t border-slate-800">

  <p className="text-slate-400">
    © 2026 Jainam.dev | Built with React & Tailwind CSS 🚀
  </p>

</footer>
    </div>
  );
}

export default App;