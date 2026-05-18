"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "SQL",
  "Scikit-learn",
  "TensorFlow",
  "PyTorch",
  "Power BI",
  "Matplotlib",
  "Seaborn",
  "LangChain",
  "OpenCV",
  "MySQL",
  "MongoDB",
  "Git",
  "Jupyter",
  "VS Code",
];

export default function Portfolio() {
  return (
    <main className="bg-black text-white min-h-screen scroll-smooth">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold">Portfolio</h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#experience" className="hover:text-cyan-400">Experience</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">

          <motion.h1 className="text-5xl md:text-5xl font-extrabold">
            Raghunad Reddy Chappavarapu
          </motion.h1>

          <p className="text-green-400 mt-6">
            Data Scientist • AI/ML Engineer
          </p>
          <p className="text-gray-300 leading-8">
            I am a Data Scientist and AI/ML Engineer with a strong foundation in building intelligent systems that solve real-world problems. My expertise spans across Machine Learning, Computer Vision, NLP, and Generative AI, with hands-on experience in developing scalable solutions using Python, PyTorch, and modern cloud technologies. I am passionate about leveraging data to drive innovation and have successfully delivered projects ranging from deepfake detection to predictive analytics. Always eager to learn and adapt, I thrive in challenging environments where I can apply my technical skills to create impactful solutions.
          </p>


          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-10">

            <a
              href="#contact"
              className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold"
            >
              Get in Touch
            </a>

            <a
              href="https://github.com/20981a4207?tab=repositories"
              target="_blank"
              className="border border-cyan-400 px-6 py-3 rounded-xl"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/raghu-chappavarapu-516467238"
              target="_blank"
              className="border border-cyan-400 px-6 py-3 rounded-xl"
            >
              LinkedIn
            </a>

          </div>

        </div>
      </section>


      {/* Skills */}
      <section id="skills" className="py-28 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Technical Arsenal
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-black border border-white/10 rounded-full text-sm hover:border-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Experience</h2>

          <div className="text-gray-300 space-y-4">
            <p>• Credit Risk Analytics & NPA Prediction</p>
            <p>• Early Warning Systems (EWS)</p>
            <p>• Portfolio Monitoring & Dashboards</p>
          </div>
        </div>
      </section>

      {/* Contact / GET IN TOUCH */}
      <section id="contact" className="py-28 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-400 mb-10">
            Have a project in mind? Let’s connect and build something amazing.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-left">

            {/* Left */}
            <div className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">chraghu748@gmail.com</p>

                <a
                  href="mailto:chraghu748@gmail.com"
                  className="text-cyan-400"
                >
                  Send Email
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/raghu-chappavarapu-516467238"
                  target="_blank"
                  className="text-cyan-400"
                >
                  View Profile
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold">GitHub</h3>
                <a
                  href="https://github.com/20981a4207?tab=repositories"
                  target="_blank"
                  className="text-cyan-400"
                >
                  View Repositories
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <a
                  href="tel:+91-7680875892"
    
                  className="text-cyan-400"
                >
                  +91-7680875892
                </a>
              </div>

            </div>

            {/* Right Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-black border border-white/10 rounded"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-black border border-white/10 rounded"
              />

              <textarea
                placeholder="Message"
                className="w-full p-3 bg-black border border-white/10 rounded"
                rows="5"
              />

              <button
                className="bg-cyan-400 text-black px-6 py-3 rounded w-full"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </section>

    </main>
  );
}