
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = {
    1: {
      title: "Statistical Methods for Machine Learning",
      period: "Summer 2024",
      overview: "This comprehensive project focused on implementing and comparing various machine learning algorithms using R programming language. The study involved extensive statistical validation and performance analysis across multiple datasets.",
      objectives: [
        "Compare performance of different ML algorithms (XGBoost, Random Forest, SVM)",
        "Implement cross-validation techniques for robust model evaluation",
        "Develop comprehensive data visualization dashboards",
        "Analyze feature importance and model interpretability"
      ],
      methodology: "The project employed a systematic approach using R's extensive machine learning libraries. Data preprocessing included handling missing values, feature scaling, and outlier detection. Model training utilized k-fold cross-validation with hyperparameter tuning through grid search optimization.",
      results: "XGBoost achieved the highest accuracy (94.2%) followed by Random Forest (91.8%). Feature importance analysis revealed key predictors, and visualization dashboards provided clear insights into model performance metrics.",
      technologies: ["R Programming", "XGBoost", "Random Forest", "ggplot2", "caret", "dplyr"],
      skills: ["Statistical Analysis", "Machine Learning", "Data Visualization", "Model Validation"]
    },
    2: {
      title: "Used Vehicle Turnover Period Prediction",
      period: "Fall 2023",
      overview: "Developed a predictive model to estimate vehicle turnover periods for automotive dealers using multi-linear regression analysis on a comprehensive dataset of 38,000 vehicle observations.",
      objectives: [
        "Predict vehicle turnover time for inventory optimization",
        "Identify key factors affecting vehicle sales velocity",
        "Develop actionable insights for dealer operations",
        "Create automated reporting system for stakeholders"
      ],
      methodology: "Applied multiple linear regression with stepwise variable selection. Performed extensive exploratory data analysis, correlation analysis, and assumption testing. Used diagnostic plots to validate model assumptions and detect influential observations.",
      results: "Achieved R² of 0.78 with significant predictors including vehicle age, mileage, price, and seasonal factors. Model recommendations led to 15% improvement in inventory turnover for pilot dealers.",
      technologies: ["R Programming", "Linear Regression", "Statistical Modeling", "Data Analysis"],
      skills: ["Regression Analysis", "Statistical Inference", "Business Analytics", "Data Interpretation"]
    },
    3: {
      title: "Customer Preference Analysis",
      period: "Winter 2022",
      overview: "Conducted comprehensive analysis of customer behavior patterns using advanced statistical methods to understand purchasing decisions and preferences across different demographic segments.",
      objectives: [
        "Analyze customer segmentation patterns",
        "Identify key drivers of customer preferences",
        "Develop predictive models for customer behavior",
        "Create actionable business recommendations"
      ],
      methodology: "Employed cluster analysis, chi-square tests, and ANOVA to identify significant patterns. Used hypothesis testing to validate findings and applied logistic regression for predictive modeling.",
      results: "Identified 5 distinct customer segments with unique preference patterns. Key findings showed price sensitivity varies significantly across age groups, leading to targeted marketing strategy recommendations.",
      technologies: ["R Programming", "Statistical Analysis", "Cluster Analysis", "Hypothesis Testing"],
      skills: ["Customer Analytics", "Statistical Testing", "Market Research", "Data Mining"]
    },
    4: {
      title: "Time Series Cocoa Price Forecasting",
      period: "Winter 2024",
      overview: "Developed advanced time series forecasting models to predict cocoa commodity prices using both traditional statistical methods and modern machine learning approaches.",
      objectives: [
        "Forecast cocoa prices with high accuracy",
        "Compare traditional vs. ML forecasting methods",
        "Analyze seasonal patterns and trends",
        "Provide risk assessment for commodity trading"
      ],
      methodology: "Implemented ARIMAX and SARIMAX models for traditional forecasting, and LSTM neural networks for machine learning approach. Conducted extensive model validation using walk-forward analysis and out-of-sample testing.",
      results: "LSTM model achieved lowest MAPE (12.3%) compared to ARIMAX (18.7%). Successfully identified seasonal patterns and trend components, providing valuable insights for commodity trading strategies.",
      technologies: ["ARIMAX", "SARIMAX", "LSTM", "Python", "TensorFlow", "Time Series Analysis"],
      skills: ["Time Series Forecasting", "Deep Learning", "Commodity Analysis", "Financial Modeling"]
    }
  };

  const project = projects[parseInt(id as string) as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
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
        <div className="mb-12">
          <h1 className="text-5xl font-light mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 mb-8">{project.period}</p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
            {project.overview}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-medium mb-6 text-white">Project Objectives</h2>
              <ul className="space-y-3">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="text-gray-300 flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-medium mb-6 text-white">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-white/10 px-4 py-2 rounded-full text-gray-300 border border-white/20 text-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-medium mb-6 text-white">Methodology</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{project.methodology}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-medium mb-6 text-white">Key Results</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{project.results}</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-green-500/10 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-medium mb-6 text-white">Skills Demonstrated</h2>
              <div className="space-y-2">
                {project.skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300 text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
