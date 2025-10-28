import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, TrendingUp, Target, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-800 text-white py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Sparkles size={16} className="text-yellow-400" />
              <span className="text-sm font-medium">AI-Powered Validation</span>
            </div>

            {/* Heading with gradient */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Validate Your Startup Ideas{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Instantly
              </span>{" "}
              with AI
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Get AI-powered insights on market potential, competition, and monetization strategies in seconds.
              Make informed decisions for your next big idea.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <TrendingUp size={16} className="text-yellow-400" />
                <span className="text-sm font-medium">Market Analysis</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <Target size={16} className="text-yellow-400" />
                <span className="text-sm font-medium">Competition Intel</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <Zap size={16} className="text-yellow-400" />
                <span className="text-sm font-medium">Instant Results</span>
              </div>
            </div>

            {/* Call-to-Action Button - KEEPING ORIGINAL LINK FUNCTIONALITY */}
            <div className="pt-4">
              <Link
                to="/analyze"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Get Started</span>
                <Sparkles size={18} />
              </Link>
              <p className="text-sm text-blue-200 mt-3">
                ✨ No credit card required • Free to start
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl"></div>
            
            {/* Image container with modern frame */}
            <div className="relative bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl"></div>
              <img
                src="/hero-ai-illustration.png"
                alt="AI Startup Illustration"
                className="w-full max-w-md mx-auto relative z-10 rounded-xl transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating stats cards */}
              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <TrendingUp size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-900">98%</div>
                    <div className="text-xs text-slate-600">Accuracy</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                    <Zap size={20} className="text-blue-900" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-900">&lt;30s</div>
                    <div className="text-xs text-slate-600">Analysis Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;