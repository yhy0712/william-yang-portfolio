
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-black/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, and innovative projects in data science and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-white/10">
              <div className="flex items-center space-x-4 mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-medium text-white">Email</h3>
              </div>
              <a 
                href="mailto:williamhy.yang@mail.utoronto.ca"
                className="text-gray-300 hover:text-white transition-colors"
              >
                williamhy.yang@mail.utoronto.ca
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 p-6 rounded-xl border border-white/10">
              <div className="flex items-center space-x-4 mb-4">
                <Linkedin className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-medium text-white">LinkedIn</h3>
              </div>
              <a 
                href="https://linkedin.com/in/williamyang"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/williamyang
              </a>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-white/10">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-medium text-white">Location</h3>
              </div>
              <p className="text-gray-300">Toronto, Canada</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-white/10">
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-medium text-white">Phone</h3>
              </div>
              <a 
                href="tel:+14373499382"
                className="text-gray-300 hover:text-white transition-colors"
              >
                (437) 349-9382
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-medium mb-6 text-white">Open to Opportunities</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Full-time Data Science Positions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Research Collaborations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Machine Learning Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Graduate Research Opportunities</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently completing my Bachelor's degree and actively seeking opportunities to apply my expertise in machine learning and data analysis to solve real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
