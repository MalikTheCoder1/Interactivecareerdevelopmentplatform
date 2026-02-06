import { useState } from 'react';

export function ProgressTracker() {
  const [completedModules, setCompletedModules] = useState({
    resume: 85,
    counseling: 38,
    interview: 60
  });

  const milestones = [
    { 
      id: 1, 
      title: 'First Resume Created', 
      description: 'Successfully created your first ATS-optimized resume',
      completed: true,
      icon: '📄',
      date: 'Feb 3, 2026'
    },
    { 
      id: 2, 
      title: 'Career Path Selected', 
      description: 'Chose Software Engineer as target career',
      completed: true,
      icon: '🎯',
      date: 'Feb 4, 2026'
    },
    { 
      id: 3, 
      title: 'First Mock Interview', 
      description: 'Completed your first AI interview simulation',
      completed: true,
      icon: '🎙️',
      date: 'Feb 5, 2026'
    },
    { 
      id: 4, 
      title: 'Roadmap 50% Complete', 
      description: 'Halfway through your learning journey',
      completed: false,
      icon: '🚀',
      date: 'In Progress'
    },
    { 
      id: 5, 
      title: 'Interview Ready', 
      description: 'Complete all interview prep modules',
      completed: false,
      icon: '✅',
      date: 'Locked'
    }
  ];

  const weeklyGoals = [
    { task: 'Complete 3 interview simulations', progress: 2, total: 3, category: 'interview' },
    { task: 'Add 5 new skills to resume', progress: 5, total: 5, category: 'resume' },
    { task: 'Watch 2 roadmap modules', progress: 1, total: 2, category: 'counseling' },
    { task: 'Book 1 mentor session', progress: 0, total: 1, category: 'counseling' }
  ];

  return (
    <section id="progress-tracker" className="py-32 px-6 bg-[#080810]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Your Progress Journey</h2>
          <p className="text-slate-400 text-lg">Track your growth across all modules</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Resume Progress */}
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:border-purple-500/30 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Resume Builder</h3>
              <span className="text-3xl">📄</span>
            </div>
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="transform -rotate-90 w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="url(#resumeGrad)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${(completedModules.resume / 100) * 351.68} 351.68`}
                  className="transition-all duration-500"
                />
                <defs>
                  <linearGradient id="resumeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-purple-400">{completedModules.resume}%</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Resumes Created</span>
                <span className="font-bold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Avg ATS Score</span>
                <span className="font-bold text-purple-400">85%</span>
              </div>
            </div>
          </div>

          {/* Counseling Progress */}
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:border-blue-500/30 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Career Counseling</h3>
              <span className="text-3xl">🧭</span>
            </div>
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="transform -rotate-90 w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="url(#counselGrad)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${(completedModules.counseling / 100) * 351.68} 351.68`}
                  className="transition-all duration-500"
                />
                <defs>
                  <linearGradient id="counselGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-blue-400">{completedModules.counseling}%</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Modules Completed</span>
                <span className="font-bold">2/4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Mentor Sessions</span>
                <span className="font-bold text-blue-400">1</span>
              </div>
            </div>
          </div>

          {/* Interview Progress */}
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:border-green-500/30 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Interview Prep</h3>
              <span className="text-3xl">🎙️</span>
            </div>
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="transform -rotate-90 w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="url(#interviewGrad)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${(completedModules.interview / 100) * 351.68} 351.68`}
                  className="transition-all duration-500"
                />
                <defs>
                  <linearGradient id="interviewGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-green-400">{completedModules.interview}%</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Interviews Done</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Avg Score</span>
                <span className="font-bold text-green-400">79%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Milestones */}
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="text-3xl mr-3">🏆</span>
              Career Milestones
            </h3>
            <div className="space-y-6">
              {milestones.map((milestone) => (
                <div 
                  key={milestone.id}
                  className={`flex items-start space-x-4 p-4 rounded-xl transition-all ${
                    milestone.completed 
                      ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30' 
                      : 'bg-white/5 border border-white/10 opacity-60'
                  }`}
                >
                  <div className={`text-4xl ${milestone.completed ? 'animate-bounce' : ''}`}>
                    {milestone.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold">{milestone.title}</h4>
                      {milestone.completed && <span className="text-green-400 text-xl">✓</span>}
                    </div>
                    <p className="text-sm text-slate-400 mb-2">{milestone.description}</p>
                    <span className="text-xs text-slate-500">{milestone.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Goals */}
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="text-3xl mr-3">🎯</span>
              Weekly Goals
            </h3>
            <div className="space-y-6">
              {weeklyGoals.map((goal, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm">{goal.task}</h4>
                    <span className={`text-sm font-bold ${
                      goal.progress === goal.total ? 'text-green-400' : 'text-purple-400'
                    }`}>
                      {goal.progress}/{goal.total}
                    </span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        goal.category === 'interview' 
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600'
                          : goal.category === 'resume'
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-600'
                      }`}
                      style={{ width: `${(goal.progress / goal.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}

              <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-xl">
                <p className="text-sm font-bold text-purple-400 mb-2">🔥 Streak: 5 Days</p>
                <p className="text-xs text-slate-400">Keep the momentum going! 2 more days for a weekly streak badge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
