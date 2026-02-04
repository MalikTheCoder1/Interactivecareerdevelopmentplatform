import { useState } from 'react';
import { SkillGapAnalysis } from './components/SkillGapAnalysis';
import { ComparisonChart } from './components/ComparisonChart';

function App() {
  const [activeModule, setActiveModule] = useState<'counseling' | 'interview'>('counseling');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-teal-800 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>SkillSync.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-stone-600 hover:text-teal-700 font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('modules')} className="text-stone-600 hover:text-teal-700 font-medium transition-colors">Modules</button>
              <button onClick={() => scrollToSection('demo')} className="text-stone-600 hover:text-teal-700 font-medium transition-colors">Demo</button>
              <button onClick={() => scrollToSection('advantage')} className="text-stone-600 hover:text-teal-700 font-medium transition-colors">Why Us</button>
            </div>
            <button onClick={() => scrollToSection('cta')} className="bg-teal-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-800 transition-all shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 leading-tight">
            Sync Your Skills with <br />
            <span className="bg-gradient-to-r from-teal-700 to-amber-600 bg-clip-text text-transparent">
              Your Ambitions.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The all-in-one platform bridging the gap between academia and your dream career. Personalized counseling and elite interview prep for the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollToSection('demo')} className="px-8 py-4 bg-teal-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-teal-800 transform hover:-translate-y-1 transition-all w-full sm:w-auto">
              Try Skill Gap Analysis
            </button>
            <button onClick={() => scrollToSection('modules')} className="px-8 py-4 bg-white text-stone-700 border border-stone-300 text-lg font-semibold rounded-lg hover:bg-stone-50 hover:border-teal-600 transition-all w-full sm:w-auto">
              View Success Stories
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-2 text-stone-500 text-sm">
            <span className="text-teal-600 text-lg">★ ★ ★ ★ ★</span>
            <span>Trusted by 10,000+ students and grads</span>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">About SkillSync</span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-6">Navigating the Transition from Campus to Corporate</h2>
              <p className="text-stone-600 mb-6 text-lg">
                SkillSync is a comprehensive career development ecosystem. We combine <span className="font-semibold text-teal-700">data-driven insights</span> with <span className="font-semibold text-teal-700">human expertise</span> to eliminate the guesswork in career planning.
              </p>
              <p className="text-stone-600 mb-8">
                By aligning your natural strengths with market demands, we provide a clear, actionable roadmap to your first (or next) dream job.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-stone-700">
                  <span className="mr-2 text-teal-600">✓</span> Data-Driven Career Roadmaps
                </li>
                <li className="flex items-center text-stone-700">
                  <span className="mr-2 text-teal-600">✓</span> Expert Mentors from Top Firms
                </li>
                <li className="flex items-center text-stone-700">
                  <span className="mr-2 text-teal-600">✓</span> Weekly Curriculum Updates
                </li>
              </ul>
            </div>
            <div className="bg-stone-100 p-8 rounded-2xl border border-stone-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="text-3xl font-bold text-teal-700 mb-1">92%</div>
                  <div className="text-sm text-stone-500">Placement Rate</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-1">3x</div>
                  <div className="text-sm text-stone-500">Faster Hires</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center col-span-2">
                  <div className="text-3xl font-bold text-stone-800 mb-1">10k+</div>
                  <div className="text-sm text-stone-500">Community Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature Demo */}
      <SkillGapAnalysis />

      {/* Modules Section */}
      <section id="modules" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-teal-700 font-semibold tracking-wider uppercase text-sm">Our Core Modules</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2">Tailored Paths for Growth</h2>
            <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Choose the module that fits your current career stage. Whether you need clarity or preparation, we have a plan.</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-full shadow-sm border border-stone-200 inline-flex">
              <button
                onClick={() => setActiveModule('counseling')}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeModule === 'counseling'
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                Career Counseling
              </button>
              <button
                onClick={() => setActiveModule('interview')}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeModule === 'interview'
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                Interview Preparation
              </button>
            </div>
          </div>

          {/* Module Content: Counseling */}
          {activeModule === 'counseling' && (
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center text-2xl mb-6">🎯</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Personalized Guidance</h3>
                <p className="text-stone-600">One-on-one sessions tailored to your unique background, ensuring no generic advice—only actionable strategies.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center text-2xl mb-6">🗺️</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Career Roadmap</h3>
                <p className="text-stone-600">A step-by-step visual path from your current skill set to your target role, with clear milestones.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-2xl mb-6">🎓</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Expert Mentors</h3>
                <p className="text-stone-600">Direct access to a network of industry veterans who have walked the path before you.</p>
              </div>
            </div>
          )}

          {/* Module Content: Interview */}
          {activeModule === 'interview' && (
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center text-2xl mb-6">🎤</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Mock Interviews</h3>
                <p className="text-stone-600">Realistic, role-specific simulations with detailed feedback loops to build your confidence under pressure.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6">📄</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Resume & CV Review</h3>
                <p className="text-stone-600">Professional audits to ensure your application beats the ATS and grabs recruiter attention instantly.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-2xl mb-6">💡</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Tips & Frameworks</h3>
                <p className="text-stone-600">Access our library of "curveball" questions and master the STAR method for structured answering.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us / Advantage Section */}
      <section id="advantage" className="py-20 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Why Choose SkillSync?</h2>
              <p className="text-stone-600 mb-8 text-lg">
                We don't just "advise"; we track your progress until you land the job. Our community-driven approach ensures you are never alone in your journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-700 font-bold">1</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-stone-900">Affordability</h4>
                    <p className="text-stone-600 text-sm">Premium career coaching at a fraction of the cost of traditional private consultants.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-700 font-bold">2</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-stone-900">Up-to-Date Insights</h4>
                    <p className="text-stone-600 text-sm">Our curriculum evolves weekly based on current hiring trends in Tech, Finance, and Creative industries.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-700 font-bold">3</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-stone-900">Results-Oriented</h4>
                    <p className="text-stone-600 text-sm">We focus on the metrics that matter: your placement speed and starting salary.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Side */}
            <ComparisonChart />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-teal-900 text-stone-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
            <p className="text-teal-200 mt-2">Your 4-step journey to career success.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative p-6 border border-teal-700 rounded-xl hover:bg-teal-800 transition-colors group">
              <div className="text-5xl font-bold text-teal-800 absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:text-teal-600 transition-all">01</div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Sign Up</h3>
              <p className="text-teal-100 text-sm relative z-10">Create your professional profile and tell us about your goals.</p>
            </div>
            {/* Step 2 */}
            <div className="relative p-6 border border-teal-700 rounded-xl hover:bg-teal-800 transition-colors group">
              <div className="text-5xl font-bold text-teal-800 absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:text-teal-600 transition-all">02</div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Choose Module</h3>
              <p className="text-teal-100 text-sm relative z-10">Select between deep-dive counseling or intensive interview training.</p>
            </div>
            {/* Step 3 */}
            <div className="relative p-6 border border-teal-700 rounded-xl hover:bg-teal-800 transition-colors group">
              <div className="text-5xl font-bold text-teal-800 absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:text-teal-600 transition-all">03</div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Get Guidance</h3>
              <p className="text-teal-100 text-sm relative z-10">Connect with your mentor and begin your personalized curriculum.</p>
            </div>
            {/* Step 4 */}
            <div className="relative p-6 border border-teal-700 bg-teal-800/50 rounded-xl hover:bg-teal-800 transition-colors group shadow-lg shadow-teal-900/50">
              <div className="text-5xl font-bold text-teal-500 absolute top-4 right-4 opacity-30 group-hover:opacity-100 transition-all">04</div>
              <h3 className="text-xl font-bold text-amber-400 mb-2 relative z-10">Achieve</h3>
              <p className="text-teal-50 text-sm relative z-10">Secure your dream offer with the confidence of a seasoned pro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="cta" className="bg-stone-900 pt-20 pb-10 border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Stop Searching. Start Syncing.</h2>
          <p className="text-xl text-stone-400 mb-8">Your dream career isn't a matter of luck; it's a matter of preparation. Join 10,000+ students moving upward.</p>
          <button className="px-10 py-4 bg-amber-600 text-white text-lg font-bold rounded-lg hover:bg-amber-700 hover:scale-105 transition-all shadow-xl shadow-amber-900/20">
            Book Your First Session
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 pt-10 border-t border-stone-800 text-stone-400 text-sm">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-bold text-white block mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>SkillSync.</span>
            <p className="max-w-sm">Empowering the next generation of talent through expert mentorship and tactical career preparation.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Our Mentors</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Career Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>support@skillsync.com</li>
              <li>hello@skillsync.com</li>
              <li className="text-teal-500">24/7 Professional Help Desk</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
