interface UserDashboardProps {
  userName: string;
  onLogout: () => void;
}

export function UserDashboard({ userName, onLogout }: UserDashboardProps) {
  const stats = [
    { label: 'Resume Score', value: '85%', change: '+12%', color: 'text-purple-400', bg: 'bg-purple-500/20' },
    { label: 'Roadmap Progress', value: '38%', change: '+5%', color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { label: 'Interviews Done', value: '12', change: '+3', color: 'text-green-400', bg: 'bg-green-500/20' },
    { label: 'Skills Added', value: '24', change: '+8', color: 'text-amber-400', bg: 'bg-amber-500/20' }
  ];

  const recentActivity = [
    { action: 'Completed Interview Simulation', module: 'Interview Prep', time: '2 hours ago', icon: '🎙️' },
    { action: 'Updated Resume Skills', module: 'Resume Builder', time: '1 day ago', icon: '📄' },
    { action: 'Unlocked System Design Module', module: 'Career Counseling', time: '2 days ago', icon: '🧭' },
    { action: 'Booked Mentor Session', module: 'Counseling', time: '3 days ago', icon: '👨‍🏫' }
  ];

  const savedResumes = [
    { name: 'Software Engineer Resume', score: 85, updated: '2 hours ago', status: 'active' },
    { name: 'Full Stack Developer', score: 78, updated: '3 days ago', status: 'draft' },
    { name: 'Backend Engineer', score: 92, updated: '1 week ago', status: 'active' }
  ];

  const upcomingSessions = [
    { title: 'Mock Interview with Priya Sharma', date: 'Feb 8, 2026', time: '10:00 AM', type: 'interview' },
    { title: 'Career Counseling - System Design', date: 'Feb 10, 2026', time: '2:00 PM', type: 'counseling' }
  ];

  return (
    <section id="dashboard" className="py-32 px-6 bg-[#050508]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-bold mb-2">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">{userName}</span>! 👋
            </h1>
            <p className="text-slate-400 text-lg">Aaj apni career journey continue karein</p>
          </div>
          <button
            onClick={onLogout}
            className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-bold transition-all flex items-center space-x-2"
          >
            <span>Logout</span>
            <span>→</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 hover:border-purple-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-slate-400">{stat.label}</span>
                <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center`}>
                  <span className={`text-xl ${stat.color}`}>↗</span>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-black">{stat.value}</span>
                <span className={`text-sm font-bold ${stat.color}`}>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <button className="p-6 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/50 rounded-xl hover:from-purple-600/30 hover:to-indigo-600/30 transition-all">
                  <div className="text-4xl mb-3">📄</div>
                  <h4 className="font-bold mb-1">Update Resume</h4>
                  <p className="text-xs text-slate-400">ATS score improve karein</p>
                </button>
                <button className="p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/50 rounded-xl hover:from-blue-600/30 hover:to-cyan-600/30 transition-all">
                  <div className="text-4xl mb-3">🎙️</div>
                  <h4 className="font-bold mb-1">Practice Interview</h4>
                  <p className="text-xs text-slate-400">AI ke saath mock interview</p>
                </button>
                <button className="p-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/50 rounded-xl hover:from-green-600/30 hover:to-emerald-600/30 transition-all">
                  <div className="text-4xl mb-3">🧭</div>
                  <h4 className="font-bold mb-1">View Roadmap</h4>
                  <p className="text-xs text-slate-400">Next steps dekhein</p>
                </button>
              </div>
            </div>

            {/* Saved Resumes */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Your Resumes</h3>
                <button className="text-sm text-purple-400 hover:text-purple-300 font-bold">
                  View All →
                </button>
              </div>
              <div className="space-y-4">
                {savedResumes.map((resume, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl">
                        📄
                      </div>
                      <div>
                        <h4 className="font-bold">{resume.name}</h4>
                        <p className="text-xs text-slate-400">Updated {resume.updated}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-bold text-purple-400">{resume.score}% ATS</p>
                        <p className={`text-xs ${resume.status === 'active' ? 'text-green-400' : 'text-amber-400'}`}>
                          {resume.status}
                        </p>
                      </div>
                      <button className="w-8 h-8 bg-white/5 hover:bg-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                        →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="flex items-start space-x-4 pb-4 border-b border-white/5 last:border-0">
                    <div className="text-3xl">{activity.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{activity.action}</h4>
                      <p className="text-sm text-slate-400">{activity.module}</p>
                    </div>
                    <span className="text-xs text-slate-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👤
                </div>
                <h3 className="text-xl font-bold mb-1">{userName}</h3>
                <p className="text-sm text-slate-400">abdul.malik@email.com</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-xs font-bold text-purple-300">
                  ⭐ Pro Member
                </div>
              </div>
              <button className="w-full bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-3 rounded-xl font-bold transition-all">
                Edit Profile
              </button>
            </div>

            {/* Upcoming Sessions */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
                Upcoming Sessions
              </h3>
              <div className="space-y-4">
                {upcomingSessions.map((session, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border ${
                    session.type === 'interview' 
                      ? 'bg-purple-500/10 border-purple-500/30' 
                      : 'bg-blue-500/10 border-blue-500/30'
                  }`}>
                    <h4 className="font-bold text-sm mb-2">{session.title}</h4>
                    <div className="flex items-center text-xs text-slate-400 space-x-2">
                      <span>📅 {session.date}</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      🕐 {session.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Goal */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
              <h3 className="text-lg font-bold mb-4">Weekly Goal</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Practice Sessions</span>
                  <span className="font-bold text-purple-400">7/10</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <p className="text-xs text-slate-400 italic">
                💪 Keep going! 3 more sessions to complete this week's goal
              </p>
            </div>

            {/* Achievements */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
              <h3 className="text-lg font-bold mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-xl">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-sm font-bold">Interview Master</p>
                    <p className="text-xs text-slate-400">10 interviews completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="text-sm font-bold">Quick Learner</p>
                    <p className="text-xs text-slate-400">Completed 5 modules in a week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
