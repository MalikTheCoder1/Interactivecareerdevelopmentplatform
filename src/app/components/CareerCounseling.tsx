import { useState } from 'react';

interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  status: 'completed' | 'current' | 'locked';
  resources: string[];
}

export function CareerCounseling() {
  const [selectedCareer, setSelectedCareer] = useState('software-engineer');
  const [currentStep, setCurrentStep] = useState(1);

  const careerPaths = [
    { id: 'software-engineer', name: 'Software Engineer', icon: '💻', demand: 'High' },
    { id: 'data-scientist', name: 'Data Scientist', icon: '📊', demand: 'Very High' },
    { id: 'product-manager', name: 'Product Manager', icon: '🎯', demand: 'High' },
    { id: 'ux-designer', name: 'UX Designer', icon: '🎨', demand: 'Medium' },
  ];

  const roadmapSteps: RoadmapStep[] = [
    {
      id: 1,
      title: 'Foundation Building',
      description: 'Core programming concepts aur data structures',
      duration: '2 months',
      status: 'completed',
      resources: ['CS50 Course', 'LeetCode Easy', 'Git & GitHub']
    },
    {
      id: 2,
      title: 'Framework Mastery',
      description: 'React, Node.js aur modern web development',
      duration: '3 months',
      status: 'current',
      resources: ['React Documentation', 'Node.js Projects', 'TypeScript']
    },
    {
      id: 3,
      title: 'System Design & Architecture',
      description: 'Scalable systems design karna seekhein',
      duration: '2 months',
      status: 'locked',
      resources: ['System Design Primer', 'AWS Basics', 'Microservices']
    },
    {
      id: 4,
      title: 'Interview Preparation',
      description: 'FAANG-level interview practice',
      duration: '1 month',
      status: 'locked',
      resources: ['Mock Interviews', 'Behavioral Prep', 'Resume Polish']
    }
  ];

  const mentors = [
    { name: 'Priya Sharma', role: 'Senior SDE @ Google', experience: '8 years', avatar: '👩‍💻' },
    { name: 'Arjun Mehta', role: 'Engineering Manager @ Microsoft', experience: '10 years', avatar: '👨‍💼' },
    { name: 'Neha Gupta', role: 'Tech Lead @ Amazon', experience: '6 years', avatar: '👩‍🔬' },
  ];

  return (
    <section id="career-counseling" className="py-32 px-6 bg-[#080810]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Career Roadmap Counseling</h2>
          <p className="text-slate-400 text-lg">AI-powered personalized career roadmap</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Career Selection */}
          <div className="space-y-6">
            {/* Career Path Selector */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
                Select Career Path
              </h3>
              <div className="space-y-3">
                {careerPaths.map((career) => (
                  <button
                    key={career.id}
                    onClick={() => setSelectedCareer(career.id)}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      selectedCareer === career.id
                        ? 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border-purple-500/50 border'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{career.icon}</span>
                        <div>
                          <p className="font-bold text-sm">{career.name}</p>
                          <p className="text-xs text-slate-500">Demand: {career.demand}</p>
                        </div>
                      </div>
                      {selectedCareer === career.id && (
                        <span className="text-purple-400">✓</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Skill Match */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
              <h3 className="text-lg font-bold mb-4">Current Skill Match</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Technical Skills</span>
                    <span className="text-purple-400 font-bold">72%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Soft Skills</span>
                    <span className="text-amber-400 font-bold">58%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full" style={{ width: '58%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Experience</span>
                    <span className="text-green-400 font-bold">85%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 border-indigo-500/30">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="text-2xl mr-2">🤖</span>
                AI Recommendation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Based on your profile, focus on <span className="text-purple-400 font-bold">System Design</span> and <span className="text-purple-400 font-bold">Cloud Technologies</span>. Market mein iska demand 40% badha hai last 6 months mein.
              </p>
            </div>
          </div>

          {/* Middle Column: Roadmap */}
          <div className="lg:col-span-2 space-y-6">
            {/* Roadmap Header */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Your Personalized Roadmap</h3>
                  <p className="text-slate-400 text-sm">Estimated completion: 8 months</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-purple-400">38%</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Complete</p>
                </div>
              </div>
            </div>

            {/* Roadmap Steps */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-[52px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-slate-800"></div>

              <div className="space-y-8">
                {roadmapSteps.map((step) => (
                  <div key={step.id} className="relative pl-16">
                    {/* Step Indicator */}
                    <div
                      className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-4 border-[#080810] ${
                        step.status === 'completed'
                          ? 'bg-green-500 ring-4 ring-green-500/20'
                          : step.status === 'current'
                          ? 'bg-purple-600 ring-4 ring-purple-600/20 animate-pulse'
                          : 'bg-slate-800'
                      }`}
                    >
                      {step.status === 'completed' ? '✓' : step.status === 'locked' ? '🔒' : step.id}
                    </div>

                    {/* Step Content */}
                    <div
                      onClick={() => step.status !== 'locked' && setCurrentStep(step.id)}
                      className={`cursor-pointer transition-all ${
                        step.status === 'locked' ? 'opacity-50' : 'hover:bg-white/5'
                      } rounded-xl p-4 ${currentStep === step.id ? 'bg-white/5 border border-purple-500/30' : ''}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-xl font-bold mb-1">{step.title}</h4>
                          <p className="text-sm text-slate-400">{step.description}</p>
                        </div>
                        <span className="text-xs px-3 py-1 bg-white/5 rounded-full text-slate-400">
                          {step.duration}
                        </span>
                      </div>

                      {currentStep === step.id && step.status !== 'locked' && (
                        <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
                          <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Resources</p>
                          <div className="flex flex-wrap gap-2">
                            {step.resources.map((resource, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300"
                              >
                                📚 {resource}
                              </span>
                            ))}
                          </div>
                          {step.status === 'current' && (
                            <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                              Continue Learning →
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentors Section */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
              <h3 className="text-lg font-bold mb-4">Connect with Expert Mentors</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {mentors.map((mentor, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-purple-500/50 transition-all">
                    <div className="text-center mb-3">
                      <div className="text-4xl mb-2">{mentor.avatar}</div>
                      <h4 className="font-bold text-sm">{mentor.name}</h4>
                      <p className="text-xs text-slate-400">{mentor.role}</p>
                      <p className="text-xs text-purple-400 mt-1">{mentor.experience}</p>
                    </div>
                    <button className="w-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 px-3 py-2 rounded-lg text-xs font-bold transition-all">
                      Book Session
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
