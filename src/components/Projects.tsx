import { motion } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const containerRef = useRef(null);
  
  const projects = [
    {
      title: "South Central Railway Project",
      description: "A comprehensive digital solution developed for the South Central Railway, Gooty Division, streamlining operations and improving efficiency through automation and real-time monitoring. Features include real-time train tracking, automated scheduling, and maintenance management.",
      tags: ["React", "Node.js", "MongoDB", "Railway Systems", "IoT"],
      achievements: ["Successfully deployed across Gooty Division", "Reduced manual operations by 60%", "Real-time monitoring of 100+ trains"],
      featured: true,
      color: "from-blue-500/20 to-cyan-500/20",
      bgColor: "from-blue-600 to-cyan-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent analytics platform that leverages machine learning to provide real-time insights and predictive analysis for business metrics and performance indicators. Features advanced data visualization and automated reporting systems.",
      tags: ["Python", "TensorFlow", "React", "Data Analytics", "Machine Learning"],
      achievements: ["Processing 1M+ data points daily", "99.9% prediction accuracy", "Automated report generation"],
      featured: true,
      color: "from-purple-500/20 to-pink-500/20",
      bgColor: "from-purple-600 to-pink-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Smart Automation System",
      description: "Award-winning hackathon project that automates routine tasks using advanced machine learning algorithms and natural language processing. Includes custom workflow automation and intelligent task scheduling.",
      tags: ["Python", "Machine Learning", "NLP", "Automation", "CI/CD"],
      achievements: ["First place in National Hackathon", "Featured in Tech Magazine", "Open-source contribution"],
      featured: false,
      color: "from-green-500/20 to-emerald-500/20",
      bgColor: "from-green-600 to-emerald-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
            Our Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore our portfolio of innovative solutions and award-winning projects
            that demonstrate our expertise in creating impactful technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-25 group-hover:opacity-75 transition-all duration-500`} />
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-300 group-hover:border-gray-600/50 group-hover:shadow-2xl">
                <div className="p-8 flex flex-col h-full">
                  <div className={`mb-8 p-6 rounded-2xl bg-gradient-to-br ${project.bgColor} relative group-hover:scale-105 transition-all duration-300`}>
                    <div className="absolute inset-0 bg-black/10 rounded-2xl" />
                    <div className="relative flex items-center gap-6">
                      <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 text-sm bg-black/20 text-white/90 rounded-full backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  {project.tags.length > 3 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.slice(3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-1.5 text-sm bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 group-hover:border-gray-500/50 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto">
                    <div className="mb-6">
                      <h4 className="text-blue-400 font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 min-w-[1.25rem] mt-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 px-6 bg-gradient-to-r ${project.color} rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 text-white font-medium text-lg group-hover:shadow-lg`}
                    >
                      View Project Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
