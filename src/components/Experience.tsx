
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const navigate = useNavigate();
  
  const researchExperience = [
    {
      id: 'research-1',
      title: "Research Assistant",
      company: "University of Toronto - Applied Psychology & Human Development",
      period: "Sep 2024 – Mar 2025",
      description: "Conducting literature review on interpretability-accuracy balance in machine learning methods.",
      color: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  const additionalExperience = [
    {
      id: 'additional-1',
      title: "Tutor",
      company: "University of Toronto Tutoring Program",
      period: "Oct 2023 – Dec 2024",
      description: "Provided personalized tutoring in mathematics and statistics.",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 'additional-2',
      title: "Team Captain",
      company: "University of Toronto Intramural Badminton",
      period: "Sep 2023 – Nov 2023",
      description: "Led a mixed doubles badminton team, coordinating practices and managing team dynamics.",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 'additional-3',
      title: "Volunteer Note-Taker",
      company: "University of Toronto Accessibility Services",
      period: "Sep 2023 – Apr 2024",
      description: "Supporting student accessibility by providing comprehensive lecture notes.",
      color: "from-green-500/20 to-blue-500/20"
    }
  ];

  const handleExperienceClick = (experienceId: string) => {
    navigate(`/experience/${experienceId}`);
  };

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </div>

        {/* Work Experience - Placeholder */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white">Work Experience</h3>
          <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <p className="text-gray-400 text-center">Coming Soon - Professional Experience</p>
          </div>
        </div>

        {/* Research Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white">Research Experience</h3>
          <div className="space-y-6">
            {researchExperience.map((exp, index) => (
              <div 
                key={index}
                onClick={() => handleExperienceClick(exp.id)}
                className={`bg-gradient-to-r ${exp.color} p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="text-2xl font-medium mb-2 text-white group-hover:text-blue-300 transition-colors">{exp.title}</h4>
                    <h5 className="text-xl text-gray-300 mb-2">{exp.company}</h5>
                    <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                    <div className="text-blue-300 text-sm font-medium">
                      Click to view details →
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-sm">
                      <p className="text-gray-300 font-medium">{exp.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Experience */}
        <div>
          <h3 className="text-3xl font-light mb-8 text-white">Additional Experience</h3>
          <div className="space-y-6">
            {additionalExperience.map((exp, index) => (
              <div 
                key={index}
                onClick={() => handleExperienceClick(exp.id)}
                className={`bg-gradient-to-r ${exp.color} p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="text-2xl font-medium mb-2 text-white group-hover:text-blue-300 transition-colors">{exp.title}</h4>
                    <h5 className="text-xl text-gray-300 mb-2">{exp.company}</h5>
                    <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                    <div className="text-blue-300 text-sm font-medium">
                      Click to view details →
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-sm">
                      <p className="text-gray-300 font-medium">{exp.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
