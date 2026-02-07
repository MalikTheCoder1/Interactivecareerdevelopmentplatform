import { useState } from 'react';

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  skills: string[];
}

export function ResumeBuilder() {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(45);
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: []
  });
  const [currentSkill, setCurrentSkill] = useState('');

  const aiSuggestions = [
    'Led a cross-functional team of 12 engineers',
    'Increased revenue by 35% through strategic initiatives',
    'Spearheaded digital transformation project',
    'Optimized system performance by 60%'
  ];

  const skillSuggestions = ['React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker', 'Leadership', 'Agile'];

  const handleAddSkill = (skill: string) => {
    if (skill && !resumeData.skills.includes(skill)) {
      const newSkills = [...resumeData.skills, skill];
      setResumeData({ ...resumeData, skills: newSkills });
      setCurrentSkill('');
      setScore(Math.min(score + 10, 100));
    }
  };

  const removeSkill = (skill: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter(s => s !== skill)
    });
    setScore(Math.max(score - 10, 0));
  };

  const handleInputChange = (field: keyof ResumeData, value: string) => {
    setResumeData({ ...resumeData, [field]: value });
    if (value.length > 0 && score < 100) {
      setScore(Math.min(score + 5, 100));
    }
  };

  return (
    <section id="resume-builder" className="py-20 md:py-32 px-4 md:px-6 bg-[#050508]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">AI ResumeBuilder</h2>
          <p className="text-slate-400 text-base md:text-lg">ATS-optimized resume banayein AI ke saath</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left: Builder Steps */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Bar */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-sm font-bold text-slate-300">Resume Building Progress</span>
                <span className="text-sm font-bold text-purple-400">Step {step}/4</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                  Basic Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={resumeData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Abdul Malik"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={resumeData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="abdul.malik@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={resumeData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Experience */}
            {step === 2 && (
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                  Work Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Experience Description</label>
                    <textarea
                      value={resumeData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      placeholder="Managed team of developers..."
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                    <p className="text-xs font-bold text-purple-400 mb-3 uppercase tracking-widest flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                      AI Suggestions
                    </p>
                    <div className="space-y-2">
                      {aiSuggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleInputChange('experience', suggestion)}
                          className="block w-full text-left text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg transition-all"
                        >
                          💡 {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Skills */}
            {step === 3 && (
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                  Skills & Expertise
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Add Skills</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={currentSkill}
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddSkill(currentSkill)}
                        placeholder="Type a skill..."
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition-all"
                      />
                      <button
                        onClick={() => handleAddSkill(currentSkill)}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">AI Recommended Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {skillSuggestions.map((skill) => (
                        <button
                          key={skill}
                          onClick={() => handleAddSkill(skill)}
                          className="px-3 py-1.5 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-full text-sm font-medium transition-all"
                        >
                          + {skill}
                        </button>
                      ))}
                    </div>
                  </div>

                  {resumeData.skills.length > 0 && (
                    <div>
                      <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">Your Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill) => (
                          <div
                            key={skill}
                            className="px-3 py-1.5 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/50 rounded-full text-sm font-medium flex items-center gap-2"
                          >
                            {skill}
                            <button
                              onClick={() => removeSkill(skill)}
                              className="text-red-400 hover:text-red-300"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  Review & Download
                </h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                    <div className="text-5xl mb-3">🎉</div>
                    <h4 className="text-2xl font-bold mb-2">Resume Complete!</h4>
                    <p className="text-slate-400">Aapka ATS-optimized resume ready hai</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                      📥 Download PDF
                    </button>
                    <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-4 rounded-xl font-bold transition-all">
                      📧 Email Resume
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                ← Previous
              </button>
              <button
                onClick={() => setStep(Math.min(4, step + 1))}
                disabled={step === 4}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                {step === 4 ? 'Complete' : 'Next →'}
              </button>
            </div>
          </div>

          {/* Right: Live Preview & Score */}
          <div className="space-y-6">
            {/* ATS Score */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.3)] sticky top-24">
              <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest">ATS Score</h4>
              <div className="relative w-40 h-40 mx-auto mb-6">
                <svg className="transform -rotate-90 w-40 h-40">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="12"
                    fill="transparent"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="url(#scoreGradient)"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={`${(score / 100) * 439.6} 439.6`}
                    className="transition-all duration-500"
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-purple-400">{score}%</span>
                  <span className="text-xs text-slate-500">Resume Strength</span>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Contact Info</span>
                  <span className={resumeData.name && resumeData.email ? "text-green-400" : "text-slate-600"}>
                    {resumeData.name && resumeData.email ? "✓" : "○"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Experience</span>
                  <span className={resumeData.experience ? "text-green-400" : "text-slate-600"}>
                    {resumeData.experience ? "✓" : "○"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Skills ({resumeData.skills.length})</span>
                  <span className={resumeData.skills.length >= 3 ? "text-green-400" : "text-amber-400"}>
                    {resumeData.skills.length >= 3 ? "✓" : "!"}
                  </span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
              <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest">💡 Pro Tips</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Action verbs use karein (Led, Managed, Developed)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Quantifiable results include karein (35% increase)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Industry-specific keywords add karein</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}