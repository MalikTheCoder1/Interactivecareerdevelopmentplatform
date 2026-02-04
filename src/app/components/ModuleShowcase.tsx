import { useState } from 'react';

type ModuleType = 'resume' | 'counsel' | 'interview';

export function ModuleShowcase() {
  const [activeModule, setActiveModule] = useState<ModuleType>('resume');

  return (
    <section id="modules-showcase" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-purple-500 font-bold uppercase tracking-widest text-sm mb-4">Complete UX Suite</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-12">Choose Your Entry Point</h3>
          
          {/* Module Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveModule('resume')}
              className={`px-8 py-3 rounded-full border font-bold transition-all ${
                activeModule === 'resume'
                  ? 'border-purple-500 text-purple-400 bg-white/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              📄 ResumeBuilder
            </button>
            <button
              onClick={() => setActiveModule('counsel')}
              className={`px-8 py-3 rounded-full border font-bold transition-all ${
                activeModule === 'counsel'
                  ? 'border-purple-500 text-purple-400 bg-white/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              🧭 Counseling
            </button>
            <button
              onClick={() => setActiveModule('interview')}
              className={`px-8 py-3 rounded-full border font-bold transition-all ${
                activeModule === 'interview'
                  ? 'border-purple-500 text-purple-400 bg-white/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              🎙️ Interview Prep
            </button>
          </div>
        </div>

        {/* Module Content: Resume Builder */}
        {activeModule === 'resume' && (
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="space-y-6">
              <h4 className="text-4xl font-bold">AI ResumeBuilder</h4>
              <p className="text-slate-400 text-lg leading-relaxed">
                Drafting keywords jo recruiters dhundhte hain. Aapka resume ATS-friendly hoga aur scoring real-time dikhayega.
              </p>
              <div className="space-y-4 pt-6">
                <div className="flex items-center space-x-4 p-4 rounded-3xl border-none bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center">✓</div>
                  <div>
                    <p className="font-bold">ATS Optimized</p>
                    <p className="text-xs text-slate-500">99% parsing success rate across top HR software.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-3xl border-none bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center">✨</div>
                  <div>
                    <p className="font-bold">AI Skill Suggestions</p>
                    <p className="text-xs text-slate-500">Industry gap analysis ke mutabiq skills add karein.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Resume UI Preview */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 shadow-[0_0_40px_rgba(139,92,246,0.3)] border-purple-500/30 bg-black/40 h-[500px] overflow-hidden relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-bold text-slate-500 uppercase">Live Editor Mode</span>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="w-1/2 h-8 bg-white/5 rounded"></div>
                <div className="w-full h-4 bg-white/5 rounded"></div>
                <div className="w-3/4 h-4 bg-white/5 rounded"></div>
                <div className="mt-10 p-4 border border-purple-500/40 rounded-xl bg-purple-500/5">
                  <p className="text-xs font-bold text-purple-400 mb-2 uppercase tracking-widest">AI Suggestion</p>
                  <p className="text-sm italic">"Instead of 'Managed team', use 'Spearheaded a cross-functional squad of 12 to deliver 20% growth'."</p>
                </div>
                <div className="flex justify-between items-center mt-12 bg-[#050508] p-4 rounded-xl border border-white/5">
                  <span className="text-sm font-bold">Resume Strength</span>
                  <span className="text-xl font-black text-purple-500">82%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Module Content: Career Counseling */}
        {activeModule === 'counsel' && (
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 h-[500px] relative overflow-y-auto">
              <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-transparent"></div>
              <div className="space-y-12 pl-12">
                <div className="relative">
                  <div className="absolute -left-14 w-6 h-6 bg-purple-600 rounded-full border-4 border-black ring-4 ring-purple-600/20"></div>
                  <p className="text-sm text-purple-400 font-bold mb-1">STEP 1: SKILL ASSESSMENT</p>
                  <h5 className="text-xl font-bold">Data Analysis Fundamentals</h5>
                  <p className="text-xs text-slate-500">Current status: Completed</p>
                </div>
                <div className="relative opacity-60">
                  <div className="absolute -left-14 w-6 h-6 bg-slate-700 rounded-full border-4 border-black"></div>
                  <p className="text-sm text-slate-500 font-bold mb-1">STEP 2: CERTIFICATION</p>
                  <h5 className="text-xl font-bold">Advanced Tableau & SQL</h5>
                  <p className="text-xs text-slate-500">Next milestone: March 2024</p>
                </div>
                <div className="relative opacity-30">
                  <div className="absolute -left-14 w-6 h-6 bg-slate-800 rounded-full border-4 border-black"></div>
                  <p className="text-sm text-slate-500 font-bold mb-1">STEP 3: MENTORSHIP</p>
                  <h5 className="text-xl font-bold">FAANG Interview Simulation</h5>
                  <p className="text-xs text-slate-500">Locked</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-4xl font-bold">Career Roadmap Counseling</h4>
              <p className="text-slate-400 text-lg leading-relaxed">
                Counseling sirf baatein nahi, action plan hai. Hum aapko ek dynamic roadmap dete hain jo aapki progress ke mutabiq update hota rehta hai.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-6 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl text-center">
                  <p className="text-2xl font-black text-purple-500">200+</p>
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-widest mt-2">Career Paths</p>
                </div>
                <div className="p-6 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl text-center">
                  <p className="text-2xl font-black text-indigo-400">AI</p>
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-widest mt-2">Market Engine</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Module Content: Interview Prep */}
        {activeModule === 'interview' && (
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="space-y-6">
              <h4 className="text-4xl font-bold">AI Interview Simulation</h4>
              <p className="text-slate-400 text-lg leading-relaxed">
                Ghabrahat khatam karein. Hamara AI interviewer aapke audio, video aur content ko analyze kar ke immediate feedback deta hai. 
              </p>
              <div className="p-6 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl border-indigo-500/20 bg-indigo-500/5">
                <p className="text-sm font-bold mb-3 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                  Now Analyzing: Confidence Levels
                </p>
                <p className="text-slate-300 italic">"Try to reduce filler words like 'um' and 'basically'. Your posture looks great!"</p>
              </div>
              <button className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Start Practicing Now
              </button>
            </div>
            {/* Interview Video Mockup */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl aspect-video relative overflow-hidden bg-slate-900 flex items-center justify-center">
              {/* AI Avatar Placeholder */}
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 mx-auto mb-4 animate-pulse"></div>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">AI INTERVIEWER</p>
              </div>
              {/* UI Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="w-32 h-20 bg-black/60 backdrop-blur rounded-lg border border-white/10 flex flex-col justify-center items-center">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">You (Live)</p>
                  <div className="w-16 h-8 bg-white/5 rounded mt-2"></div>
                </div>
                <div className="space-y-2">
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold rounded-full border border-green-500/40">POSITIVE SENTIMENT</div>
                  <div className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full border border-white/20">CLEAR SPEECH</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
