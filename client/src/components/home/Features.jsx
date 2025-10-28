import React from "react";
import { FaRobot, FaChartLine, FaDollarSign, FaFolderOpen, FaFilePdf, FaSave } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot className="w-10 h-10 text-blue-700 mb-4" />,
    title: "AI-Powered Market Analysis",
    description: "Get accurate insights into market potential using advanced AI algorithms."
  },
  {
    icon: <FaChartLine className="w-10 h-10 text-green-500 mb-4" />,
    title: "Competition Level Scoring",
    description: "Understand your competition and where your idea stands in the market."
  },
  {
    icon: <FaDollarSign className="w-10 h-10 text-yellow-400 mb-4" />,
    title: "Monetization Suggestions",
    description: "Receive actionable ideas on how to monetize your startup efficiently."
  },
  {
    icon: <FaFolderOpen className="w-10 h-10 text-indigo-700 mb-4" />,
    title: "Idea History & Dashboard",
    description: "Keep track of all your submitted ideas in one organized dashboard."
  },
  {
    icon: <FaFilePdf className="w-10 h-10 text-yellow-400 mb-4" />,
    title: "PDF Pitch Deck Export",
    description: "Generate professional one-page pitch decks instantly for your ideas."
  },
  {
    icon: <FaSave className="w-10 h-10 text-green-500 mb-4" />,
    title: "Save & Track Ideas",
    description: "Easily save ideas and revisit them anytime for further analysis."
  },
];

const Features = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/10 dark:bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">Powerful Tools</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
            Platform <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to validate, analyze, and launch your startup idea with confidence
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card */}
              <div className="relative flex flex-col items-center bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 dark:border-slate-700 group-hover:border-blue-200 dark:group-hover:border-blue-700 h-full">
                {/* Icon container with enhanced styling */}
                <div className="relative mb-6">
                  {/* Animated background pulse */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                  
                  {/* Icon background */}
                  <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-5 rounded-2xl transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section with stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-2">98%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Analysis Accuracy</div>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">&lt;30s</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Average Response Time</div>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">24/7</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Available Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;