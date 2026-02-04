import { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface IntelligenceData {
  metric: string;
  value: number;
}

export function IntelligenceDemo() {
  const [resumeScore, setResumeScore] = useState(85);
  const [roadmapCompletion, setRoadmapCompletion] = useState(42);
  const [interviewReadiness, setInterviewReadiness] = useState(92);

  const chartData: IntelligenceData[] = [
    { metric: 'Resume', value: resumeScore },
    { metric: 'Roadmap', value: roadmapCompletion },
    { metric: 'Interview', value: interviewReadiness },
    { metric: 'Tech Skills', value: 70 },
    { metric: 'Soft Skills', value: 60 },
  ];

  return (
    <section id="demo" className="py-32 bg-[#080810] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 shadow-[0_0_40px_rgba(139,92,246,0.3)] border-purple-500/30">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
              Unified Intelligence Profile
            </h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3 text-sm font-medium text-slate-300">
                  <label>Resume Score</label>
                  <span className="text-purple-400">{resumeScore}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={resumeScore}
                  onChange={(e) => setResumeScore(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>
              <div>
                <div className="flex justify-between mb-3 text-sm font-medium text-slate-300">
                  <label>Roadmap Completion</label>
                  <span className="text-purple-400">{roadmapCompletion}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={roadmapCompletion}
                  onChange={(e) => setRoadmapCompletion(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>
              <div>
                <div className="flex justify-between mb-3 text-sm font-medium text-slate-300">
                  <label>Interview Readiness</label>
                  <span className="text-purple-400">{interviewReadiness}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={interviewReadiness}
                  onChange={(e) => setInterviewReadiness(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>
            </div>
          </div>

          <div className="text-left">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Real-time Skill Sync</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Module based data aggregation se hum aapko batate hain ke market mein aapki worth kya hai. Skills sync karein aur automatic score updates dekhein.
            </p>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={chartData}>
                  <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
                  <PolarAngleAxis
                    dataKey="metric"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                  />
                  <Radar
                    name="Current Intelligence"
                    dataKey="value"
                    stroke="#8b5cf6"
                    fill="rgba(139, 92, 246, 0.2)"
                    fillOpacity={0.6}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
