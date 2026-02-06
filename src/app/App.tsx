import { useState } from 'react';
import { ModuleShowcase } from './components/ModuleShowcase';
import { IntelligenceDemo } from './components/IntelligenceDemo';
import { PricingSection } from './components/PricingSection';
import { Logo } from './components/Logo';
import { ResumeBuilder } from './components/ResumeBuilder';
import { CareerCounseling } from './components/CareerCounseling';
import { InterviewPrep } from './components/InterviewPrep';
import { AuthModal } from './components/AuthModal';
import { UserDashboard } from './components/UserDashboard';
import { ProgressTracker } from './components/ProgressTracker';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogin = (email: string, name: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    // Scroll to dashboard after login
    setTimeout(() => {
      scrollToSection('dashboard');
    }, 100);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="antialiased selection:bg-purple-500/20 selection:text-purple-300">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#050508]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* SkillSync Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.reload()}>
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Logo />
            </div>
            <span className="text-2xl font-bold tracking-tighter">SkillSync</span>
          </div>

          <div className="hidden md:flex space-x-10 text-sm font-medium">
            {isLoggedIn && (
              <button onClick={() => scrollToSection('dashboard')} className="text-slate-400 hover:text-white transition-colors">
                Dashboard
              </button>
            )}
            <button onClick={() => scrollToSection('modules-showcase')} className="text-slate-400 hover:text-white transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('resume-builder')} className="text-slate-400 hover:text-white transition-colors">
              Resume Builder
            </button>
            <button onClick={() => scrollToSection('career-counseling')} className="text-slate-400 hover:text-white transition-colors">
              Counseling
            </button>
            <button onClick={() => scrollToSection('interview-prep')} className="text-slate-400 hover:text-white transition-colors">
              Interview
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-slate-400 hover:text-white transition-colors">
              Pricing
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center space-x-3 px-4 py-2 bg-white/5 rounded-full">
                  <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-sm">
                    👤
                  </div>
                  <span className="text-sm font-medium">{userName}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all"
                >
                  Start Free
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 text-center" style={{ background: 'radial-gradient(circle at 50% -20%, #2e1065 0%, #050508 70%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-400 mb-8">
            ✨ Introducing Career Intelligence 3.0
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            Design Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Future
            </span>{' '}
            Self
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Sahi tools ke saath apna career sync karein. ResumeBuilder, Career Counseling aur Interview Prep modules ab ek hi platform par.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            {isLoggedIn ? (
              <button 
                onClick={() => scrollToSection('dashboard')} 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all"
              >
                Go to Dashboard
              </button>
            ) : (
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all"
              >
                Get All Modules
              </button>
            )}
            <button 
              onClick={() => scrollToSection('demo')}
              className="bg-white/5 border border-white/10 hover:bg-white/10 px-10 py-5 rounded-2xl text-lg font-bold transition-all"
            >
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* User Dashboard - Only show when logged in */}
      {isLoggedIn && <UserDashboard userName={userName} onLogout={handleLogout} />}

      {/* Progress Tracker - Only show when logged in */}
      {isLoggedIn && <ProgressTracker />}

      {/* Modules Interactive Showcase */}
      <ModuleShowcase />

      {/* Resume Builder - Complete Flow */}
      <ResumeBuilder />

      {/* Career Counseling - Complete Flow */}
      <CareerCounseling />

      {/* Interview Prep - Complete Flow */}
      <InterviewPrep />

      {/* Intelligence Demo */}
      <IntelligenceDemo />

      {/* Pricing Section */}
      <PricingSection />

      {/* Footer */}
      <footer className="py-20 bg-[#050508] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-8 md:mb-0">
            <div className="w-10 h-10 flex items-center justify-center">
              <Logo />
            </div>
            <span className="text-xl font-bold tracking-tighter">SkillSync</span>
          </div>
          <div className="flex space-x-12 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <p className="mt-8 md:mt-0 text-xs text-slate-600 font-medium">
            © 2024 SkillSync Inc. Designed for Global Talent.
          </p>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;