
const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-light mb-6 text-white">Professional Journey</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a dedicated researcher and data scientist with extensive experience in machine learning 
              and data analysis projects. Currently pursuing my Bachelor of Science in Mathematics & Its 
              Application with a focus on Probability/Statistics at the University of Toronto.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My expertise spans comprehensive exploratory data analysis, hypothesis testing, and 
              developing sophisticated machine learning models. I am committed to advancing knowledge 
              in analytics and artificial intelligence through impactful research and real-world applications.
            </p>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h4 className="text-xl font-medium mb-4 text-white">Current Focus</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Interpretable Machine Learning Research</li>
                <li>• Statistical Methods for Data Analysis</li>
                <li>• Advanced Analytics for Decision Making</li>
                <li>• Graduate Studies in Applied Mathematics</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-white/10">
              <h4 className="text-xl font-medium mb-2 text-white">Education</h4>
              <p className="text-gray-300">University of Toronto</p>
              <p className="text-gray-400">B.Sc. Mathematics & Its Application</p>
              <p className="text-gray-400">2021 - 2025</p>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-white/10">
              <h4 className="text-xl font-medium mb-2 text-white">Recognition</h4>
              <p className="text-gray-300">Dean's List Scholar</p>
              <p className="text-gray-400">2024, 2023, 2022</p>
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
