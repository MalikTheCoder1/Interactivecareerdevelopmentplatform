import { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

interface SkillData {
  skill: string;
  current: number;
  target: number;
}

export function SkillGapAnalysis() {
  const [skills, setSkills] = useState<SkillData[]>([
    { skill: 'Technical', current: 60, target: 85 },
    { skill: 'Communication', current: 40, target: 90 },
    { skill: 'Problem Solving', current: 70, target: 80 },
    { skill: 'Leadership', current: 30, target: 75 },
    { skill: 'Industry Know-How', current: 50, target: 85 },
  ]);

  const updateSkill = (index: number, value: number) => {
    const newSkills = [...skills];
    newSkills[index].current = value;
    setSkills(newSkills);
  };

  return (
    <section id="demo" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Our Technology</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            One of our key features is the <strong>Skill Gap Analysis</strong>. Try this interactive demo to see how we visualize your strengths against the requirements of your target role.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Controls */}
          <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-teal-400">Rate Your Current Confidence</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.skill}>
                  <div className="flex justify-between mb-2 text-sm">
                    <label>{skill.skill}</label>
                    <span>{skill.current}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.current}
                    onChange={(e) => updateSkill(index, parseInt(e.target.value))}
                    className="w-full h-2 bg-stone-600 rounded-lg appearance-none cursor-pointer accent-teal-500"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-stone-700/50 rounded-lg text-sm text-stone-300">
              <p><strong>Insight:</strong> Adjust sliders to see how your profile matches up against a "Senior Product Manager" role benchmark.</p>
            </div>
          </div>

          {/* Visualization */}
          <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 lg:col-span-2 flex flex-col items-center justify-center">
            <h3 className="text-lg font-medium text-stone-300 mb-4 self-start">Visual Gap Analysis Report</h3>
            
            <div className="w-full max-w-[600px] h-[350px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skills}>
                  <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    tick={{ fill: '#d6d3d1', fontSize: 12 }}
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={{ fill: '#d6d3d1' }}
                  />
                  <Radar
                    name="Target Role"
                    dataKey="target"
                    stroke="rgb(120, 113, 108)"
                    fill="rgba(120, 113, 108, 0.2)"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Your Profile"
                    dataKey="current"
                    stroke="rgb(20, 184, 166)"
                    fill="rgba(20, 184, 166, 0.4)"
                    fillOpacity={0.6}
                  />
                  <Legend 
                    wrapperStyle={{ color: '#e7e5e4' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex gap-6 mt-4 text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span> Your Profile
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-stone-500/50 border border-stone-400 rounded-full mr-2"></span> Role Requirement
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
