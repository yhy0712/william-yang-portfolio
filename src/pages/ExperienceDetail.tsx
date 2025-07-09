
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const experiences = {
    'research-1': {
      title: "Research Assistant",
      company: "University of Toronto - Applied Psychology & Human Development",
      period: "Sep 2024 – Mar 2025",
      overview: "Currently conducting comprehensive literature review on the interpretability-accuracy balance in machine learning methods, focusing on how different algorithmic approaches affect both predictive performance and model transparency in educational and psychological contexts.",
      responsibilities: [
        "Conducting systematic literature review on machine learning interpretability methods",
        "Analyzing trade-offs between model accuracy and interpretability across different domains",
        "Evaluating various explanation techniques (LIME, SHAP, attention mechanisms)",
        "Documenting findings and preparing research summaries for academic publication",
        "Collaborating with faculty members on research methodology and analysis approaches"
      ],
      skills: ["Literature Review", "Machine Learning", "Research Methodology", "Academic Writing", "Statistical Analysis"],
      achievements: [
        "Reviewed 50+ research papers on ML interpretability methods",
        "Identified key gaps in current interpretability research",
        "Developed systematic framework for evaluating interpretability techniques"
      ],
      hasImage: false
    },
    'additional-1': {
      title: "Tutor",
      company: "University of Toronto Tutoring Program",
      period: "Oct 2023 – Dec 2024",
      overview: "Provided comprehensive academic support to undergraduate students in mathematics and statistics courses, helping them improve their understanding of complex statistical concepts and mathematical problem-solving techniques.",
      responsibilities: [
        "Conducted one-on-one tutoring sessions for statistics and mathematics courses",
        "Developed customized learning materials and practice problems",
        "Explained complex statistical concepts in accessible ways",
        "Helped students prepare for exams and assignments",
        "Tracked student progress and adjusted teaching methods accordingly"
      ],
      skills: ["Teaching", "Communication", "Statistics", "Mathematics", "Curriculum Development"],
      achievements: [
        "Successfully tutored 15+ students with average grade improvement of 12%",
        "Developed innovative teaching methods for statistical concepts",
        "Received excellent feedback from both students and program coordinators"
      ],
      hasImage: true
    },
    'additional-2': {
      title: "Team Captain",
      company: "University of Toronto Intramural Badminton",
      period: "Sep 2023 – Nov 2023",
      overview: "Led a competitive mixed doubles badminton team in the university's intramural league, managing team dynamics, coordinating practices, and developing strategic game plans for tournament competition.",
      responsibilities: [
        "Organized and led weekly practice sessions for team members",
        "Developed game strategies and tactical approaches for matches",
        "Coordinated team schedules and communicated with league officials",
        "Mentored newer players and helped improve their technical skills",
        "Managed team morale and fostered positive team culture"
      ],
      skills: ["Leadership", "Team Management", "Strategic Planning", "Communication", "Mentoring"],
      achievements: [
        "Led team to semi-final position in university tournament",
        "Improved team coordination and performance through strategic training",
        "Successfully managed diverse team with varying skill levels"
      ],
      hasImage: true
    },
    'additional-3': {
      title: "Volunteer Note-Taker",
      company: "University of Toronto Accessibility Services",
      period: "Sep 2023 – Apr 2024",
      overview: "Supported student accessibility initiatives by providing comprehensive, well-organized lecture notes for students with disabilities, ensuring equal access to educational content and learning opportunities.",
      responsibilities: [
        "Attended lectures and took detailed, comprehensive notes",
        "Organized and formatted notes for clarity and accessibility",
        "Ensured timely delivery of notes to accessibility services",
        "Maintained confidentiality and professionalism in all interactions",
        "Collaborated with accessibility coordinators to meet student needs"
      ],
      skills: ["Organization", "Note-Taking", "Attention to Detail", "Communication", "Time Management"],
      achievements: [
        "Provided notes for 8 different courses across multiple semesters",
        "Maintained 100% on-time delivery rate for all note submissions",
        "Received recognition from Accessibility Services for exceptional service quality"
      ],
      hasImage: false
    }
  };

  const experience = experiences[id as keyof typeof experiences];

  if (!experience) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Experience Not Found</h1>
          <button 
            onClick={() => navigate('/')} 
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/90 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 transition-all duration-[400ms] ease-out hover:scale-[1.2] hover:[transform:perspective(500px)_rotateX(5deg)_rotateY(5deg)]" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="mb-8">
              <h1 className="text-4xl font-light mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {experience.title}
              </h1>
              <h2 className="text-2xl text-blue-400 mb-2">{experience.company}</h2>
              <p className="text-lg text-gray-400 mb-6">{experience.period}</p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {experience.overview}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-medium mb-6 text-white">Key Responsibilities</h3>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-gray-300 flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-medium mb-6 text-white">Skills Developed</h3>
              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-white/10 px-4 py-2 rounded-full text-gray-300 border border-white/20 text-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-medium mb-6 text-white">Key Achievements</h3>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300 flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl border-2 border-dashed border-white/20 p-12 text-center">
              {experience.hasImage ? (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/10 rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-lg">Image placeholder</p>
                  <p className="text-white/40 text-sm">Space reserved for future image</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-white/60 text-lg">No image for this role</p>
                  <p className="text-white/40 text-sm">Content-focused experience</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
