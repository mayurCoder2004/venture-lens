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
    <section className="bg-white dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 dark:text-slate-200">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">{step.title}</h3>
              <p className="text-slate-500 dark:text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
