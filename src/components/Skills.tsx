
const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        { name: "R", level: 95 },
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Machine Learning", level: 92 },
        { name: "Statistical Analysis", level: 95 },
        { name: "Data Visualization", level: 88 }
      ],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Professional Skills",
      skills: [
        { name: "Research & Analysis", level: 95 },
        { name: "Project Management", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 92 },
        { name: "Team Leadership", level: 88 },
        { name: "Critical Thinking", level: 93 }
      ],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Specialized Knowledge",
      skills: [
        { name: "Hypothesis Testing", level: 90 },
        { name: "Model Evaluation", level: 88 },
        { name: "Time Series Analysis", level: 85 },
        { name: "Artificial Intelligence", level: 87 },
        { name: "Algorithm Design", level: 83 },
        { name: "Data Mining", level: 89 }
      ],
      color: "from-green-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning advanced analytics, machine learning, and professional capabilities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
            >
              <h3 className="text-2xl font-medium mb-8 text-white text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-white/80 to-white/60 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-medium mb-4 text-white">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-xl">
                <h4 className="text-lg font-medium text-white mb-2">SQL for Data Science</h4>
                <p className="text-gray-400">University of California, Davis (2024)</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h4 className="text-lg font-medium text-white mb-2">Languages</h4>
                <p className="text-gray-400">Mandarin (Native) • English (Fluent)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
