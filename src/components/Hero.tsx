
import { Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-light mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Huayu
          </h1>
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-300">
            (William) Yang
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
            Data Scientist & Machine Learning Researcher
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-lg leading-relaxed">
            Applying advanced data analysis and machine learning techniques to business analysis and decision-making
          </p>
          <div className="flex space-x-6 justify-center md:justify-start">
            <a 
              href="mailto:williamyang0712@outlook.com" 
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <Mail className="w-5 h-5 transition-all duration-[400ms] ease-out hover:scale-[1.2] hover:[transform:perspective(500px)_rotateX(5deg)_rotateY(5deg)]" />
              <span>Get in Touch</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/yang0712" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600/20 hover:bg-blue-600/30 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-blue-500/30"
            >
              <Linkedin className="w-5 h-5 transition-all duration-[400ms] ease-out hover:scale-[1.2] hover:[transform:perspective(500px)_rotateX(5deg)_rotateY(5deg)]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src="/lovable-uploads/7e59c247-a312-4b40-b931-832852646510.png"
                alt="William Yang"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
