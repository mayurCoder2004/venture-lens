import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-800 text-white py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-300/5 rounded-full blur-2xl"></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="flex-1 text-center md:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              <span className="text-sm font-medium">Start Your Journey</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Validate Your{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Startup Idea?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl">
              Let our AI analyze your idea and give actionable insights in seconds.
              Take the first step toward building your successful startup today!
            </p>

            {/* Feature checkmarks */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3 text-blue-100">
                <FaCheckCircle className="text-yellow-400 flex-shrink-0" />
                <span>Instant AI-powered analysis</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <FaCheckCircle className="text-yellow-400 flex-shrink-0" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <FaCheckCircle className="text-yellow-400 flex-shrink-0" />
                <span>Save and track your ideas</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/analyze"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-lg shadow-2xl hover:shadow-yellow-500/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaRocket className="w-5 h-5" />
                <span>Get Started</span>
              </Link>
              <p className="text-sm text-blue-200 mt-3">
                Join thousands of entrepreneurs validating their ideas
              </p>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex-1 relative">
            {/* Decorative elements around image */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl"></div>

            {/* Image container with modern frame */}
            <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl"></div>
              <img
                src="/cta-illustration.png"
                alt="Startup Illustration"
                className="w-full max-w-sm mx-auto relative z-10 rounded-xl transform hover:scale-105 transition-transform duration-500"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border border-white/20 hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">1000+ Ideas Validated</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="hidden lg:block absolute top-20 -right-12 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">⚡</div>
                <div className="text-xs text-white mt-1">Fast Results</div>
              </div>
            </div>

            <div className="hidden lg:block absolute bottom-32 -left-8 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">✓</div>
                <div className="text-xs text-white mt-1">Validated</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default CTASection;