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
    <section className="bg-slate-50 dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800 dark:text-slate-200">
          Platform Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
