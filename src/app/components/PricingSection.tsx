export function PricingSection() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Choose Your Level</h2>
        <p className="text-slate-400 mb-16 text-lg">One subscription, three powerful modules.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Starter Plan */}
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 text-left border-white/5 bg-white/2">
            <h4 className="text-xl font-bold mb-2">Starter</h4>
            <p className="text-slate-500 text-sm mb-6">Career shuru karne walon ke liye.</p>
            <div className="text-5xl font-black mb-8">
              $0 <span className="text-sm font-medium text-slate-500">/mo</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-400 mb-10">
              <li className="flex items-center">✓ 1 AI Resume Analysis</li>
              <li className="flex items-center">✓ Limited Career Roadmap</li>
              <li className="flex items-center text-slate-600">✕ Unlimited Interview Prep</li>
            </ul>
            <button className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 font-bold transition-all">
              Get Started
            </button>
          </div>

          {/* Sync Pro Plan */}
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 text-left border-purple-500/50 shadow-[0_0_40px_rgba(139,92,246,0.3)] scale-105 bg-gradient-to-br from-purple-900/10 to-indigo-900/10 relative">
            <div className="absolute -top-4 right-10 bg-purple-600 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
              MOST POPULAR
            </div>
            <h4 className="text-xl font-bold mb-2">Sync Pro</h4>
            <p className="text-purple-300 text-sm mb-6">Maximum result orientation.</p>
            <div className="text-5xl font-black mb-8">
              $29 <span className="text-sm font-medium text-slate-400">/mo</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-200 mb-10">
              <li className="flex items-center">✓ Unlimited Builder AI</li>
              <li className="flex items-center">✓ Dynamic Counseling Suite</li>
              <li className="flex items-center">✓ Unlimited Video Interviews</li>
            </ul>
            <button className="w-full py-4 rounded-xl font-bold shadow-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
              Unlock Full Sync
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
