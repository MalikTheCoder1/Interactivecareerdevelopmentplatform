interface MobileNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  isLoggedIn: boolean;
}

export function MobileNav({ activeSection, onNavigate, isLoggedIn }: MobileNavProps) {
  const navItems = isLoggedIn
    ? [
        { id: 'dashboard', icon: '🏠', label: 'Home' },
        { id: 'resume-builder', icon: '📄', label: 'Resume' },
        { id: 'career-counseling', icon: '🧭', label: 'Path' },
        { id: 'interview-prep', icon: '🎙️', label: 'Interview' },
        { id: 'progress-tracker', icon: '📊', label: 'Progress' }
      ]
    : [
        { id: 'hero', icon: '🏠', label: 'Home' },
        { id: 'modules-showcase', icon: '✨', label: 'Features' },
        { id: 'resume-builder', icon: '📄', label: 'Resume' },
        { id: 'demo', icon: '🎯', label: 'Demo' },
        { id: 'pricing', icon: '💎', label: 'Pricing' }
      ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#050508]/95 backdrop-blur-xl border-t border-white/10 pb-safe md:hidden">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-all ${
              activeSection === item.id
                ? 'text-purple-400'
                : 'text-slate-500'
            }`}
          >
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            {activeSection === item.id && (
              <div className="absolute bottom-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-full" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
