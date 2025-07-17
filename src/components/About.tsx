
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [showFullJourney, setShowFullJourney] = useState(false);

  return (
    <section id="about" className="py-32 px-6 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl font-light mb-6 text-white">Professional Journey</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Recent graduate with extensive experience in machine learning and data analysis projects, 
              now pursuing advanced studies in analytics and artificial intelligence.
            </p>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <button 
                onClick={() => setShowFullJourney(!showFullJourney)}
                className="flex items-center justify-between w-full text-left"
              >
                <h4 className="text-xl font-medium text-white">View Full Journey</h4>
                {showFullJourney ? 
                  <ChevronUp className="w-5 h-5 transition-all duration-[400ms] ease-out hover:scale-[1.2] hover:[transform:perspective(500px)_rotateX(5deg)_rotateY(5deg)]" /> : 
                  <ChevronDown className="w-5 h-5 transition-all duration-[400ms] ease-out hover:scale-[1.2] hover:[transform:perspective(500px)_rotateX(5deg)_rotateY(5deg)]" />
                }
              </button>
              
              {showFullJourney && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I am a dedicated researcher and data scientist with extensive experience in machine learning 
                    and data analysis projects. Having completed my Bachelor of Science in Mathematics & Its 
                    Application with a focus on Probability/Statistics at the University of Toronto, I am now 
                    pursuing my Master of Management Analytics.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    My expertise spans comprehensive exploratory data analysis, hypothesis testing, and 
                    developing sophisticated machine learning models. I am committed to advancing knowledge 
                    in analytics and artificial intelligence through impactful research and real-world applications.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Interpretable Machine Learning Research</li>
                    <li>• Statistical Methods for Data Analysis</li>
                    <li>• Advanced Analytics for Decision Making</li>
                    <li>• Applied Machine Learning Solutions</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-white/10">
              <h4 className="text-xl font-medium mb-4 text-white">Education</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 font-medium">Master of Management Analytics</p>
                  <p className="text-gray-400">Rotman School of Management, University of Toronto</p>
                  <p className="text-gray-400">2025 - 2026</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">B.Sc. Mathematics & Its Application</p>
                  <p className="text-gray-400">University of Toronto</p>
                  <p className="text-gray-400">2021 - 2025 (Completed)</p>
                  <div className="mt-2">
                    <p className="text-sm text-blue-300">Recognition:</p>
                    <p className="text-sm text-gray-400">• Dean's List Scholar (2024, 2023, 2022)</p>
                    <p className="text-sm text-gray-400">• New College In-Course Scholarship</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-white/10">
              <h4 className="text-xl font-medium mb-2 text-white">Location</h4>
              <p className="text-gray-300">Toronto, Canada</p>
              <p className="text-gray-400">Open to opportunities worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
