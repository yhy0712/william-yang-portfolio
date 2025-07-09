
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const experiences = {
    'research-1': {
      title: "Research Assistant",
      company: "University of Toronto - Applied Psychology & Human Development",
      period: "September 2024 – March 2025",
      overview: "Conducting comprehensive literature review on the critical balance between interpretability and accuracy in machine learning methods, with focus on applications in psychological and educational research.",
      responsibilities: [
        "Systematically review 200+ academic papers on interpretable machine learning",
        "Synthesize findings on accuracy-interpretability trade-offs across different ML models",
        "Analyze case studies in psychology and education domains",
        "Prepare comprehensive literature summaries and analysis reports",
        "Present weekly progress updates to research team",
        "Collaborate with graduate students and faculty on research methodology"
      ],
      achievements: [
        "Identified key gaps in current interpretable ML research",
        "Developed comprehensive taxonomy of interpretability methods",
        "Contributed to upcoming publication (anticipated February 2025)",
        "Presented findings at departmental research seminars"
      ],
      skills: ["Literature Review", "Research Methodology", "Academic Writing", "Data Analysis", "Presentation Skills", "Critical Thinking"],
      impact: "Research findings will contribute to developing more transparent and explainable AI systems for psychological and educational applications, potentially influencing policy and practice in these domains."
    },
    'additional-1': {
      title: "Mathematics & Statistics Tutor",
      company: "University of Toronto Tutoring Program",
      period: "October 2023 – December 2024",
      overview: "Provided personalized one-on-one and group tutoring sessions for undergraduate students in mathematics and statistics courses, helping improve academic performance and conceptual understanding.",
      responsibilities: [
        "Conduct individual and group tutoring sessions (2-4 hours per week)",
        "Prepare customized lesson plans based on student needs assessment",
        "Explain complex mathematical and statistical concepts clearly",
        "Develop practice problems and study materials",
        "Track student progress and adjust teaching methods accordingly",
        "Maintain detailed records of tutoring sessions and student improvements"
      ],
      achievements: [
        "Completed 10+ hours of specialized tutoring training",
        "Achieved 95% student satisfaction rate in feedback surveys",
        "Helped 15+ students improve their course grades by average of 1.2 GPA points",
        "Developed innovative teaching methods for complex statistical concepts",
        "Received 'Outstanding Tutor' recognition from program coordinators"
      ],
      skills: ["Teaching", "Communication", "Patience", "Problem-Solving", "Adaptability", "Mentoring"],
      impact: "Enhanced student understanding of mathematical concepts, contributing to improved academic performance and confidence in STEM subjects. Several tutored students went on to pursue advanced mathematics and statistics courses."
    },
    'additional-2': {
      title: "Intramural Badminton Team Captain",
      company: "University of Toronto Athletics & Recreation",
      period: "September 2023 – November 2023",
      overview: "Led a competitive mixed doubles badminton team in the university intramural league, managing team operations, training schedules, and player development while maintaining high team morale and performance.",
      responsibilities: [
        "Coordinate and lead weekly team practice sessions (3 hours per week)",
        "Develop training plans and skill development programs",
        "Manage team roster of 15 members and playing rotations",
        "Organize team meetings and communicate league updates",
        "Coordinate match schedules and ensure team attendance",
        "Foster positive team culture and resolve interpersonal conflicts"
      ],
      achievements: [
        "Led team to semi-finals in competitive division",
        "Improved team win rate by 40% compared to previous season",
        "Maintained 100% player retention throughout the season",
        "Organized successful team-building events and social activities",
        "Developed junior players who later became team leaders"
      ],
      skills: ["Leadership", "Team Management", "Strategic Planning", "Communication", "Conflict Resolution", "Motivation"],
      impact: "Created a supportive and competitive environment that enhanced player skills and team cohesion. Established training protocols that were adopted by other teams in the program."
    },
    'additional-3': {
      title: "Volunteer Note-Taker",
      company: "University of Toronto Accessibility Services",
      period: "September 2023 – April 2024",
      overview: "Provided comprehensive lecture notes for students with disabilities, ensuring equal access to educational content across various mathematics and statistics courses.",
      responsibilities: [
        "Attend lectures and take detailed, organized notes",
        "Convert handwritten notes to clear digital format",
        "Upload notes to accessibility platform within 24 hours of lectures",
        "Ensure notes capture key concepts, examples, and important announcements",
        "Coordinate with accessibility coordinators for special requirements",
        "Maintain confidentiality and professionalism in all interactions"
      ],
      achievements: [
        "Provided notes for 4 different courses across 2 academic terms",
        "Maintained 100% on-time submission rate for note uploads",
        "Received positive feedback from accessibility coordinators",
        "Helped 12+ students with diverse accessibility needs",
        "Developed efficient note-taking and formatting systems"
      ],
      skills: ["Attention to Detail", "Time Management", "Written Communication", "Technology Proficiency", "Empathy", "Reliability"],
      impact: "Directly supported academic success of students with disabilities, contributing to more inclusive educational environment. Enhanced accessibility services' ability to serve diverse student population."
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
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Image Placeholder */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-gradient-to-br from-gray-500/20 to-gray-600/20 aspect-[4/5] rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 bg-white/10 rounded-lg mb-4 mx-auto flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                  <p className="text-sm">Image placeholder</p>
                  <p className="text-xs mt-1">To be added later</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="mb-12">
              <h1 className="text-4xl font-light mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {experience.title}
              </h1>
              <h2 className="text-2xl text-gray-300 mb-4">{experience.company}</h2>
              <p className="text-xl text-gray-400 mb-8">{experience.period}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-medium mb-6 text-white">Overview</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{experience.overview}</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-medium mb-6 text-white">Key Responsibilities</h2>
              <ul className="space-y-4">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-gray-300 flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-medium mb-6 text-white">Key Achievements</h2>
              <ul className="space-y-4">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300 flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-medium mb-6 text-white">Skills Developed</h2>
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

            <div className="bg-gradient-to-br from-yellow-500/10 to-green-500/10 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-medium mb-6 text-white">Impact & Outcomes</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{experience.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
