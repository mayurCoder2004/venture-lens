import React from "react";
import { FaLightbulb, FaRobot, FaChartLine, FaSave } from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb className="text-yellow-400 w-12 h-12 mb-4" />,
    title: "Enter Your Startup Idea",
    description: "Type in your innovative idea to start the validation process."
  },
  {
    icon: <FaRobot className="text-blue-700 w-12 h-12 mb-4" />,
    title: "AI Analysis",
    description: "Our AI evaluates market potential, competition, and monetization strategies."
  },
  {
    icon: <FaChartLine className="text-green-500 w-12 h-12 mb-4" />,
    title: "Get Insights",
    description: "Receive scores, summaries, and actionable insights instantly."
  },
  {
    icon: <FaSave className="text-indigo-700 w-12 h-12 mb-4" />,
    title: "Save & Track",
    description: "Save your ideas, generate pitch decks, and track all submissions."
  },
];

const HowItWorks = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-200/20 dark:bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
            How It <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Four simple steps to validate your startup idea and get actionable insights
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-700 to-transparent"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center group"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="w-full bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 dark:border-slate-700 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                {/* Icon container with gradient background */}
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-4 rounded-2xl">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow indicator - hidden on last item and mobile */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-4 text-blue-300 dark:text-blue-700 z-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA text */}
        <div className="mt-16">
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Ready to validate your idea? <span className="font-semibold text-blue-700 dark:text-blue-400">Get started in seconds</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;