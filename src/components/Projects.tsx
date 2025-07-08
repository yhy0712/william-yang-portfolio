
const Projects = () => {
  const projects = [
    {
      title: "Statistical Methods for Machine Learning",
      period: "Summer 2024",
      description: "Comprehensive machine learning analysis using R with advanced statistical validation techniques.",
      tech: ["R", "XGBoost", "Random Forest", "Data Visualization"],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Used Vehicle Turnover Period Prediction",
      period: "Fall 2023",
      description: "Multi-linear regression project analyzing 38,000 observations for vehicle dealer optimization.",
      tech: ["R", "Multi-Linear Regression", "Statistical Analysis"],
      color: "from-green-500/20 to-cyan-500/20"
    },
    {
      title: "Customer Preference Analysis",
      period: "Winter 2022",
      description: "Comprehensive analysis of customer behavior patterns using statistical methods.",
      tech: ["R", "Statistical Analysis", "Hypothesis Testing"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Time Series Cocoa Price Forecasting",
      period: "Winter 2024",
      description: "Advanced forecasting model using time series analysis to predict cocoa prices.",
      tech: ["ARIMAX", "SARIMAX", "LSTM", "Time Series Analysis"],
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">
            Key projects demonstrating expertise in data science and machine learning
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${project.color} p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 group cursor-pointer`}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-medium mb-2 text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.period}</p>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-blue-300 text-sm font-medium">
                Click to view details →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
