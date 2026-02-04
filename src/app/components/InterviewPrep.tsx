import { useState, useEffect } from 'react';

interface Question {
  id: number;
  question: string;
  type: 'technical' | 'behavioral' | 'situational';
  difficulty: 'easy' | 'medium' | 'hard';
}

interface Feedback {
  category: string;
  score: number;
  comment: string;
  color: string;
}

export function InterviewPrep() {
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [interviewType, setInterviewType] = useState<'technical' | 'behavioral' | 'mixed'>('mixed');

  const questions: Question[] = [
    {
      id: 1,
      question: 'Tell me about a time when you had to handle a difficult team situation.',
      type: 'behavioral',
      difficulty: 'medium'
    },
    {
      id: 2,
      question: 'Explain the difference between var, let, and const in JavaScript.',
      type: 'technical',
      difficulty: 'easy'
    },
    {
      id: 3,
      question: 'How would you optimize a slow-performing database query?',
      type: 'technical',
      difficulty: 'hard'
    },
    {
      id: 4,
      question: 'Describe a situation where you had to meet a tight deadline.',
      type: 'situational',
      difficulty: 'medium'
    }
  ];

  const aiAnalysis: Feedback[] = [
    { category: 'Confidence', score: 82, comment: 'Good eye contact aur clear voice', color: 'text-green-400' },
    { category: 'Content Quality', score: 75, comment: 'Structure improve kar sakte hain using STAR method', color: 'text-blue-400' },
    { category: 'Communication', score: 68, comment: 'Filler words (um, like) kam karein', color: 'text-amber-400' },
    { category: 'Body Language', score: 90, comment: 'Excellent posture and gestures', color: 'text-purple-400' }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      setRecordingTime(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const startInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestion(0);
    setShowFeedback(false);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsRecording(false);
    } else {
      setShowFeedback(true);
      setIsRecording(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="interview-prep" className="py-32 px-6 bg-[#050508]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">AI Interview Simulation</h2>
          <p className="text-slate-400 text-lg">Real-time feedback ke saath practice karein</p>
        </div>

        {!interviewStarted ? (
          /* Setup Screen */
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-12">
              <div className="text-center mb-10">
                <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl animate-pulse">
                  🎙️
                </div>
                <h3 className="text-3xl font-bold mb-4">Ready for Your Interview?</h3>
                <p className="text-slate-400">AI interviewer aapke responses ko analyze karega aur instant feedback dega</p>
              </div>

              {/* Interview Type Selection */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest text-center">Select Interview Type</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setInterviewType('technical')}
                    className={`p-6 rounded-xl transition-all ${
                      interviewType === 'technical'
                        ? 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border-purple-500/50 border'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-3xl mb-2">💻</div>
                    <h5 className="font-bold mb-1">Technical</h5>
                    <p className="text-xs text-slate-400">Coding & System Design</p>
                  </button>
                  <button
                    onClick={() => setInterviewType('behavioral')}
                    className={`p-6 rounded-xl transition-all ${
                      interviewType === 'behavioral'
                        ? 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border-purple-500/50 border'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-3xl mb-2">🗣️</div>
                    <h5 className="font-bold mb-1">Behavioral</h5>
                    <p className="text-xs text-slate-400">STAR Method Practice</p>
                  </button>
                  <button
                    onClick={() => setInterviewType('mixed')}
                    className={`p-6 rounded-xl transition-all ${
                      interviewType === 'mixed'
                        ? 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border-purple-500/50 border'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-3xl mb-2">🎯</div>
                    <h5 className="font-bold mb-1">Mixed</h5>
                    <p className="text-xs text-slate-400">Complete Interview</p>
                  </button>
                </div>
              </div>

              {/* Pre-Interview Checklist */}
              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-6 mb-8">
                <h4 className="font-bold mb-4 flex items-center">
                  <span className="text-xl mr-2">✓</span>
                  Pre-Interview Checklist
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-400">
                    <span className="mr-2">✓</span>
                    <span>Camera permission granted</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="mr-2">✓</span>
                    <span>Microphone working</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="mr-2">✓</span>
                    <span>Quiet environment</span>
                  </div>
                </div>
              </div>

              <button
                onClick={startInterview}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-5 rounded-2xl text-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Start Interview →
              </button>
            </div>
          </div>
        ) : showFeedback ? (
          /* Feedback Screen */
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-12">
              <div className="text-center mb-10">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-3xl font-bold mb-2">Interview Complete!</h3>
                <p className="text-slate-400">Aapki performance ka detailed analysis</p>
              </div>

              {/* Overall Score */}
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 mb-8 text-center border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                <p className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">Overall Performance</p>
                <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">
                  79%
                </div>
                <p className="text-lg text-green-400 font-bold">Above Average</p>
              </div>

              {/* Category Breakdown */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {aiAnalysis.map((item, idx) => (
                  <div key={idx} className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold">{item.category}</h4>
                      <span className={`text-2xl font-black ${item.color}`}>{item.score}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2 mb-3">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-slate-400 italic">💡 {item.comment}</p>
                  </div>
                ))}
              </div>

              {/* Detailed Insights */}
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 mb-8">
                <h4 className="font-bold mb-4 flex items-center">
                  <span className="text-2xl mr-2">🤖</span>
                  AI Detailed Insights
                </h4>
                <div className="space-y-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                    <p className="text-sm font-bold text-green-400 mb-2">✓ Strengths</p>
                    <ul className="text-sm text-slate-300 space-y-1">
                      <li>• Strong technical knowledge demonstration</li>
                      <li>• Confident body language and eye contact</li>
                      <li>• Clear and structured answers</li>
                    </ul>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                    <p className="text-sm font-bold text-amber-400 mb-2">! Areas for Improvement</p>
                    <ul className="text-sm text-slate-300 space-y-1">
                      <li>• Reduce filler words ("um", "like", "basically")</li>
                      <li>• Add more specific examples from past experience</li>
                      <li>• Practice time management - some answers were too long</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setInterviewStarted(false);
                    setShowFeedback(false);
                  }}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Start New Interview
                </button>
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-4 rounded-xl font-bold transition-all">
                  📥 Download Report
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Active Interview Screen */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Interview Window */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Feed */}
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl aspect-video relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                {/* AI Interviewer Avatar */}
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 mx-auto mb-6 flex items-center justify-center text-5xl animate-pulse">
                    🤖
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400">AI Interviewer</p>
                </div>

                {/* User Video Thumbnail */}
                <div className="absolute bottom-6 left-6 w-40 h-28 bg-black/60 backdrop-blur rounded-xl border border-white/10 flex flex-col justify-center items-center">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">You (Live)</p>
                  <div className="w-20 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded"></div>
                </div>

                {/* Live Indicators */}
                {isRecording && (
                  <div className="absolute top-6 right-6 flex flex-col gap-2">
                    <div className="px-4 py-2 bg-red-500/20 text-red-400 text-xs font-bold rounded-full border border-red-500/40 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                      RECORDING
                    </div>
                    <div className="px-4 py-2 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/40">
                      CLEAR SPEECH
                    </div>
                    <div className="px-4 py-2 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/40">
                      GOOD POSTURE
                    </div>
                  </div>
                )}

                {/* Recording Timer */}
                {isRecording && (
                  <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur rounded-xl border border-white/10">
                    <p className="text-xl font-mono font-bold text-white">{formatTime(recordingTime)}</p>
                  </div>
                )}
              </div>

              {/* Question Card */}
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-xs font-bold text-purple-300">
                      Question {currentQuestion + 1}/{questions.length}
                    </span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-slate-400 capitalize">
                      {questions[currentQuestion].type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      questions[currentQuestion].difficulty === 'easy'
                        ? 'bg-green-500/20 text-green-400'
                        : questions[currentQuestion].difficulty === 'medium'
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {questions[currentQuestion].difficulty}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6 leading-relaxed">
                  {questions[currentQuestion].question}
                </h3>

                {/* Controls */}
                <div className="flex gap-4">
                  <button
                    onClick={toggleRecording}
                    className={`flex-1 px-8 py-4 rounded-xl font-bold transition-all ${
                      isRecording
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/50'
                    }`}
                  >
                    {isRecording ? '⏹ Stop Answer' : '🎙️ Start Answer'}
                  </button>
                  {!isRecording && recordingTime > 0 && (
                    <button
                      onClick={nextQuestion}
                      className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-bold transition-all"
                    >
                      Next Question →
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar: Tips & Progress */}
            <div className="space-y-6">
              {/* Progress */}
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
                <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest">Interview Progress</h4>
                <div className="space-y-3">
                  {questions.map((q, idx) => (
                    <div
                      key={q.id}
                      className={`flex items-center space-x-3 p-2 rounded-lg ${
                        idx === currentQuestion ? 'bg-purple-500/20' : idx < currentQuestion ? 'bg-green-500/10' : 'bg-white/5'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          idx < currentQuestion
                            ? 'bg-green-500 text-white'
                            : idx === currentQuestion
                            ? 'bg-purple-600 text-white'
                            : 'bg-slate-700 text-slate-400'
                        }`}
                      >
                        {idx < currentQuestion ? '✓' : idx + 1}
                      </div>
                      <span className="text-xs text-slate-300 capitalize">{q.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Tips */}
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
                <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                  Live Tips
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                    <p className="text-purple-300">💡 Use STAR method for behavioral questions</p>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                    <p className="text-blue-300">👁️ Maintain eye contact with camera</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <p className="text-green-300">⏱️ Keep answers under 2 minutes</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6">
                <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest">Session Stats</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Avg Response Time</span>
                    <span className="font-bold text-white">1:45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Filler Words</span>
                    <span className="font-bold text-amber-400">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Confidence</span>
                    <span className="font-bold text-green-400">High</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
