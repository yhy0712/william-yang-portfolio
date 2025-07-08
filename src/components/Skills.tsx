
const Skills = () => {
  const technicalSkills = [
    "R Programming",
    "Python",
    "SQL & Database Management",
    "Machine Learning Algorithms",
    "Statistical Analysis & Modeling",
    "Data Visualization"
  ];

  const specializedKnowledge = [
    "Data Exploratory Analysis",
    "Hypothesis Testing",
    "Model Evaluation & Validation",
    "Time Series Analysis",
    "Predictive Analytics",
    "Statistical Inference"
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Core competencies in data science, machine learning, and statistical analysis
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-2xl font-medium mb-8 text-white text-center">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <span className="text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Knowledge */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-2xl font-medium mb-8 text-white text-center">
              Specialized Knowledge
            </h3>
            <div className="space-y-4">
              {specializedKnowledge.map((skill, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <span className="text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-medium mb-6 text-white">Certifications & Languages</h3>
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
