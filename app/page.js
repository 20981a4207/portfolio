"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "SQL",
  "Data Structures",
  "Java",
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
            <a href="#about" className="hover:text-cyan-400">Home</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#experience" className="hover:text-cyan-400">Experience</a>
            <a href="#education" className="hover:text-cyan-400">Education</a>
            <a href="#certifications" className="hover:text-cyan-400">Certifications</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

        </div>
      </nav>
      

     {/* Hero */}
<section
  id="about"
  className="min-h-screen flex items-center justify-center px-6"
>
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-16">

    {/* Left Image */}
    <div className="flex justify-center md:w-1/3">
      <img
        src="https://img.freepik.com/premium-photo/portrait-male-student-standing-outside-front-college-buildingcreated-with-generative-ai-technology_132358-9085.jpg"
        alt="Profile"
        className="w-52 h-52 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 object-cover shadow-lg"
      />
    </div>

    {/* Right Content */}
    <div className="md:w-2/3 text-center md:text-left">

      <motion.h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
        Raghunad Reddy Chappavarapu
      </motion.h1>

      <p className="text-green-400 mt-4 text-lg">
        Data Scientist • AI/ML Engineer • Python Developer • Risk Analytics Specialist
      </p>

      <p className="text-gray-300 leading-8 mt-6 max-w-2xl">
        I am a Data Scientist and AI/ML Engineer with a strong foundation in
        building intelligent systems that solve real-world problems. My expertise
        spans across Machine Learning, Computer Vision, NLP, and Generative AI,
        with hands-on experience in developing scalable solutions using Python,
        PyTorch, and modern cloud technologies. I am passionate about leveraging
        data to drive innovation and have successfully delivered projects ranging
        from deepfake detection to predictive analytics. Always eager to learn
        and adapt, I thrive in challenging environments where I can apply my
        technical skills to create impactful solutions.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10">

        <a
          href="#contact"
          className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Get in Touch
        </a>

        <a
          href="https://github.com/20981a4207?tab=repositories"
          target="_blank"
          className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/raghu-chappavarapu-516467238"
          target="_blank"
          className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
        >
          LinkedIn
        </a>

      </div>
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
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold mb-12 text-center">
      Experience
    </h2>

    {/* Experience Card */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition duration-300">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            Data Scientist - Credit Risk
          </h3>

          <p className="text-cyan-400 text-lg mt-1">
            AU Small Finance Bank
          </p>
        </div>

        <p className="text-gray-400 mt-3 md:mt-0">
          Feb 2025 – Present
        </p>

      </div>

      {/* Experience Points */}
      <div className="space-y-6 text-gray-300 leading-8 text-[15px]">

        <p>
          ➢ <span className="text-white font-semibold">
            Data Processing & Feature Engineering (Python):
          </span>{" "}
          Performing end-to-end data cleaning, preprocessing, and feature
          engineering using Python (Pandas, NumPy) to build model-ready datasets
          for credit risk and behavioral analysis.
        </p>

        <p>
          ➢ <span className="text-white font-semibold">
            Credit Risk Modeling & Predictive Analytics:
          </span>{" "}
          Developing predictive models for NPA forecasting, delinquency behavior,
          and Early Warning Systems (EWS), including early delinquency detection,
          non-starter identification, and roll-rate analysis.
        </p>

        <p>
          ➢ <span className="text-white font-semibold">
            Vintage & Cohort Analysis:
          </span>{" "}
          Performing PAR1+ and PAR90+ vintage curve analysis to evaluate customer
          repayment behavior across cohorts and identify portfolio stress trends
          over time.
        </p>

        <p>
          ➢ <span className="text-white font-semibold">
            Risk Trend & Behavioral Analysis:
          </span>{" "}
          Analyzing credit cost, slippage trends, Partial OD and Full OD
          movements (MoM), and customer repayment patterns to support portfolio
          risk monitoring and strategic decision-making.
        </p>

        <p>
          ➢ <span className="text-white font-semibold">
            Provisioning & Loss Forecasting:
          </span>{" "}
          Evaluating provision risk, write-off trends, and recovery patterns to
          estimate credit loss movement and support financial forecasting models.
        </p>

        <p>
          ➢ <span className="text-white font-semibold">
            Visualization & Reporting (Power BI / Excel):
          </span>{" "}
          Designing interactive Power BI dashboards and advanced Excel reports
          to track KPIs such as NPA trends, EWS signals, collection efficiency
          (CE), and portfolio performance metrics.
        </p>

      </div>
    </div>

  </div>
</section>

{/* Education */}
<section id="education" className="py-28 px-6 bg-white/5">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold mb-12 text-center">
      Education
    </h2>

    <div className="space-y-8">

      {/* B.Tech */}
      <div className="bg-black border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition duration-300">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">

          <div>
            <h3 className="text-2xl font-semibold text-white">
              Raghu Engineering College, Visakhapatnam
            </h3>

            <p className="text-cyan-400 mt-2">
              Bachelor of Technology – Computer Science (AI & ML)
            </p>

            <p className="text-gray-400 mt-2">
              CGPA: 9.05
            </p>
          </div>

          <p className="text-gray-400 mt-4 md:mt-0">
            2024
          </p>

        </div>
      </div>

      {/* Intermediate */}
      <div className="bg-black border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition duration-300">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">

          <div>
            <h3 className="text-2xl font-semibold text-white">
              Narayana Junior College, Vijayawada
            </h3>

            <p className="text-cyan-400 mt-2">
              Board of Intermediate Education – MPC
            </p>

            <p className="text-gray-400 mt-2">
              CGPA: 9.63
            </p>
          </div>

          <p className="text-gray-400 mt-4 md:mt-0">
            2020
          </p>

        </div>
      </div>

      {/* School */}
      <div className="bg-black border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition duration-300">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">

          <div>
            <h3 className="text-2xl font-semibold text-white">
              Bhashyam High School, Guntur
            </h3>

            <p className="text-cyan-400 mt-2">
              Board of Secondary Education
            </p>

            <p className="text-gray-400 mt-2">
              CGPA: 9.5
            </p>
          </div>

          <p className="text-gray-400 mt-4 md:mt-0">
            2018
          </p>

        </div>
      </div>

    </div>

  </div>
</section>

{/* Internships & Certifications */}
<section id="certifications" className="py-28 px-6 bg-white/5">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold mb-12 text-center">
      Certifications
    </h2>

    <div className="space-y-6">

      {/* IBM */}
      <div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            Artificial Intelligence & Machine Learning
          </h3>

          <p className="text-cyan-400 mt-2">
            Edunet Foundation • IBM Skill Build
          </p>

          <p className="text-gray-400 mt-3 leading-7">
            Completed hands-on training in Artificial Intelligence and Machine Learning concepts including supervised learning, neural networks, NLP, and real-world AI applications using IBM Skill Build resources.
          </p>
        </div>

        <a
          href="https://skills.yourlearning.ibm.com/certificate/URL-WNQKFPCPK1G"
          target="_blank"
          className="border border-cyan-400 px-5 py-3 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition whitespace-nowrap text-center"
        >
          View Certificate
        </a>

      </div>

      {/* AWS */}
      <div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            AWS Academy Graduate - Machine Learning
          </h3>

          <p className="text-cyan-400 mt-2">
            AWS Academy
          </p>

          <p className="text-gray-400 mt-3 leading-7">
            Gained practical exposure to cloud-based machine learning workflows, model deployment strategies, and foundational AI/ML concepts supported by AWS Academy learning modules.
          </p>
        </div>

        <a
          href="https://www.credly.com/badges/f312927a-f38b-4126-bd99-b3c393a1c231/print"
          target="_blank"
          className="border border-cyan-400 px-5 py-3 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition whitespace-nowrap text-center"
        >
          View Certificate
        </a>

      </div>

      {/* NPTEL DBMS */}
      <div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            Database Management System
          </h3>

          <p className="text-cyan-400 mt-2">
            NPTEL
          </p>

          <p className="text-gray-400 mt-3 leading-7">
            Developed strong understanding of relational databases, SQL queries, normalization, transaction management, and database design concepts through NPTEL coursework.
          </p>
        </div>

        <a
          href="https://nptel.ac.in/noc/E_Certificate/NPTEL23CS41S3590004903003879"
          target="_blank"
          className="border border-cyan-400 px-5 py-3 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition whitespace-nowrap text-center"
        >
          View Certificate
        </a>

      </div>

      {/* Kaggle ML */}
      <div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            Intermediate Machine Learning
          </h3>

          <p className="text-cyan-400 mt-2">
            Kaggle
          </p>

          <p className="text-gray-400 mt-3 leading-7">
            Learned advanced machine learning concepts including feature engineering, handling missing values, pipelines, and model validation techniques using Kaggle datasets.
          </p>
        </div>

        <a
          href="https://www.kaggle.com/learn/certification/raghunadreddy/intermediate-machine-learning"
          target="_blank"
          className="border border-cyan-400 px-5 py-3 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition whitespace-nowrap text-center"
        >
          View Certificate
        </a>

      </div>

      {/* Kaggle SQL */}
      <div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            Advanced SQL
          </h3>

          <p className="text-cyan-400 mt-2">
            Kaggle
          </p>

          <p className="text-gray-400 mt-3 leading-7">
            Built expertise in advanced SQL concepts including joins, subqueries, analytical functions, and data querying techniques for real-world business analysis.
          </p>
        </div>

        <a
          href="https://www.kaggle.com/learn/certification/raghunadreddy/advanced-sql"
          target="_blank"
          className="border border-cyan-400 px-5 py-3 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition whitespace-nowrap text-center"
        >
          View Certificate
        </a>

      </div>

      {/* MathWorks */}
      <div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            Image Processing Onramp
          </h3>

          <p className="text-cyan-400 mt-2">
            MathWorks
          </p>

          <p className="text-gray-400 mt-3 leading-7">
            Learned image processing fundamentals including image enhancement, filtering, segmentation, and visualization techniques using MATLAB tools and workflows.
          </p>
        </div>

        <a
          href="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=b80f85ea-1a32-4b93-88ef-882ba7a26fd9&"
          target="_blank"
          className="border border-cyan-400 px-5 py-3 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition whitespace-nowrap text-center"
        >
          View Certificate
        </a>

      </div>

      {/* Python */}
      <div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            Python
          </h3>

          <p className="text-cyan-400 mt-2">
            Hackerrank
          </p>

          <p className="text-gray-400 mt-3 leading-7">
            Built strong programming foundations in Python including basic Python, file handling, and problem-solving techniques through hands-on projects and coding exercises.
          </p>
        </div>

        <a
          href="https://www.hackerrank.com/certificates/bc8cc2b213f2"
          target="_blank"
          className="border border-cyan-400 px-5 py-3 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition whitespace-nowrap text-center"
        >
          View Certificate
        </a>

      </div>

      {/* Java */}
      <div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            Java
          </h3>

          <p className="text-cyan-400 mt-2">
            Hackerrank
          </p>

          <p className="text-gray-400 mt-3 leading-7">
            Developed proficiency in Java programming concepts including object-oriented programming, exception handling, collections framework, multithreading, and application development through coding challenges and practical implementations.
          </p>
        </div>

        <a
          href="https://www.hackerrank.com/certificates/4768fc20fa75"
          target="_blank"
          className="border border-cyan-400 px-5 py-3 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition whitespace-nowrap text-center"
        >
          View Certificate
        </a>

      </div>

    </div>

  </div>
</section>

{/* Projects */}
<section id="projects" className="py-28 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-14">
      Projects
    </h2>

    <div className="space-y-10">

      {/* AU Small Finance Bank */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition duration-300">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h3 className="text-3xl font-semibold text-white">
              Credit Risk Analytics & Portfolio Monitoring System
            </h3>

            <p className="text-cyan-400 mt-2">
              AU Small Finance Bank • Data Scientist
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-2 bg-black border border-cyan-400 rounded-full text-sm">
              Python
            </span>

            <span className="px-4 py-2 bg-black border border-cyan-400 rounded-full text-sm">
              Machine Learning
            </span>

            <span className="px-4 py-2 bg-black border border-cyan-400 rounded-full text-sm">
              Risk Analytics
            </span>

            <span className="px-4 py-2 bg-black border border-cyan-400 rounded-full text-sm">
              Power BI
            </span>

            <span className="px-4 py-2 bg-black border border-cyan-400 rounded-full text-sm">
              SQL
            </span>
          </div>

        </div>

        <p className="text-gray-300 leading-8 mt-6">
          Worked on end-to-end credit risk analytics and portfolio monitoring systems focusing on NPA forecasting, Early Warning Signals (EWS), and customer behavioral analysis within retail banking. Built predictive models and analytical frameworks to identify delinquency trends, portfolio stress indicators, and repayment risk patterns. Processed and transformed large-scale datasets using Python and SQL while developing interactive dashboards to support business decision-making in collections, provisioning, and portfolio performance monitoring.
        </p>

        <div className="mt-8 space-y-5 text-gray-300">

          <div>
            <h4 className="text-white font-semibold text-lg mb-2">
              Key Responsibilities
            </h4>
          </div>

          <div className="space-y-4">

            <p>
              ➢ Performed end-to-end data cleaning, preprocessing, and feature engineering using Python (Pandas, NumPy) to build model-ready datasets for credit risk and behavioral analysis.
            </p>

            <p>
              ➢ Developed predictive analytics solutions for NPA forecasting, delinquency behavior analysis, Early Warning Systems (EWS), non-starter identification, and roll-rate analysis.
            </p>

            <p>
              ➢ Conducted PAR1+ and PAR90+ vintage curve analysis to evaluate repayment behavior across customer cohorts and identify portfolio stress trends over time.
            </p>

            <p>
              ➢ Analyzed credit cost trends, slippages, Partial OD & Full OD movements, and customer repayment behavior to support portfolio risk monitoring and strategic decisions.
            </p>

            <p>
              ➢ Evaluated provision risk, write-off trends, and recovery patterns to estimate credit loss movement and improve forecasting accuracy.
            </p>

            <p>
              ➢ Designed interactive Power BI dashboards and advanced Excel reports to track KPIs including NPA trends, EWS signals, Collection Efficiency (CE), and portfolio performance metrics.
            </p>

          </div>

        </div>

      </div>

      {/* Disease Prediction */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition duration-300">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h3 className="text-3xl font-semibold text-white">
              Disease Prediction & Drug Recommendation System
            </h3>

            <p className="text-cyan-400 mt-2">
              Machine Learning Research Project
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-2 bg-black border border-cyan-400 rounded-full text-sm">
              Python
            </span>

            <span className="px-4 py-2 bg-black border border-cyan-400 rounded-full text-sm">
              Machine Learning
            </span>

            <span className="px-4 py-2 bg-black border border-cyan-400 rounded-full text-sm">
              NLP
            </span>

            <span className="px-4 py-2 bg-black border border-cyan-400 rounded-full text-sm">
              Scikit-learn
            </span>
          </div>

        </div>

        <p className="text-gray-300 leading-8 mt-6">
          Designed and implemented a Disease Prediction & Drug Recommendation System using Machine Learning and NLP techniques to predict diseases based on symptoms and recommend commonly used medications. Applied multiple classification algorithms and data preprocessing techniques to improve prediction accuracy and support intelligent healthcare recommendations.
        </p>

        <div className="mt-8 space-y-5 text-gray-300">

          <div>
            <h4 className="text-white font-semibold text-lg mb-2">
              Key Highlights
            </h4>
          </div>

          <div className="space-y-4">

            <p>
              ➢ Built a machine learning-based disease prediction system using Naive Bayes and multiple classification algorithms for accurate disease prediction.
            </p>

            <p>
              ➢ Implemented Natural Language Processing (NLP) techniques for drug recommendation and symptom analysis.
            </p>

            <p>
              ➢ Applied data preprocessing, feature extraction, and train-test split methodologies to prepare healthcare datasets for model training.
            </p>

            <p>
              ➢ Evaluated multiple machine learning algorithms including Random Forest, K-Nearest Neighbors (KNN), Support Vector Machine (SVM), and Logistic Regression.
            </p>

            <p>
              ➢ Improved model performance through comparative accuracy analysis and prediction optimization techniques.
            </p>

            <p>
              ➢ Developed an intelligent recommendation workflow capable of suggesting commonly used drugs based on predicted diseases and user symptoms.
            </p>

          </div>

        </div>

      </div>

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