import { motion } from "framer-motion";

const About = () => {
  const team = [
    {
      name: "Revanth",
      role: "Tech Lead & Full Stack Developer",
      description: "A passionate developer with expertise in building innovative solutions and leading technical projects.",
      initial: "R",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["Full Stack Development", "System Architecture", "Team Leadership", "Cloud Solutions"]
    },
    {
      name: "Tilak",
      role: "Solutions Architect & AI Specialist",
      description: "An innovative problem solver specializing in AI solutions and system architecture design.",
      initial: "T",
      gradient: "from-purple-500 to-pink-500",
      skills: ["AI/ML Development", "System Design", "Data Engineering", "Cloud Architecture"]
    }
  ];

  const journey = [
    {
      year: "2023",
      title: "South Central Railway Project",
      description: "Successfully delivered a high-impact project for the South Central Railway, Gooty Division",
      number: "1"
    },
    {
      year: "2023",
      title: "Hackathon Champions",
      description: "Won multiple prestigious hackathons, showcasing our innovative problem-solving abilities",
      number: "2"
    },
    {
      year: "2022",
      title: "Project Excellence",
      description: "Completed several successful projects with 100% client satisfaction rate",
      number: "3"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            About Us
          </h2>
        </motion.div>

        {/* Team Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-2xl blur-xl opacity-25 group-hover:opacity-75 transition-all duration-500`} />
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transition-all duration-300 group-hover:border-gray-600/50 group-hover:shadow-2xl">
                <div className="flex items-center gap-6 mb-6">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-3xl font-bold text-white`}>
                    {member.initial}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.gradient} font-medium`}>
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-1.5 text-sm bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 group-hover:border-gray-500/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey Section */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Our Journey
        </motion.h3>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500" />

          {/* Timeline Items */}
          {journey.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="relative grid md:grid-cols-2 gap-8 mb-12 last:mb-0"
            >
              {/* Timeline Number */}
              <div className="absolute left-0 md:left-1/2 -translate-x-2 md:-translate-x-4 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold">
                {item.number}
              </div>

              {/* Content */}
              <div className={`md:text-right ${index % 2 === 0 ? "md:pr-16" : "md:order-2 md:pl-16"}`}>
                <div className="pl-12 md:pl-0">
                  <div className="text-blue-400 font-medium mb-1">{item.year}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
              <div className={index % 2 === 0 ? "md:pl-16" : "md:order-1 md:pr-16"} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
