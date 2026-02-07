interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  onLogout: () => void;
  onNavigate: (section: string) => void;
}

export function MobileMenu({ isOpen, onClose, userName, onLogout, onNavigate }: MobileMenuProps) {
  if (!isOpen) return null;

  const menuItems = [
    { id: 'dashboard', icon: '🏠', label: 'Dashboard', color: 'text-purple-400' },
    { id: 'resume-builder', icon: '📄', label: 'Resume Builder', color: 'text-blue-400' },
    { id: 'career-counseling', icon: '🧭', label: 'Career Counseling', color: 'text-green-400' },
    { id: 'interview-prep', icon: '🎙️', label: 'Interview Prep', color: 'text-amber-400' },
    { id: 'progress-tracker', icon: '📊', label: 'Progress', color: 'text-pink-400' }
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    onClose();
  };

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Slide-in Menu */}
      <div className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#050508] border-l border-white/10 animate-slide-in-right">
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Menu</h3>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all"
            >
              ✕
            </button>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-xl">
              👤
            </div>
            <div className="flex-1">
              <h4 className="font-bold">{userName}</h4>
              <p className="text-xs text-purple-400">Pro Member</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-2 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 280px)' }}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="w-full flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className={`font-bold ${item.color}`}>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-[#050508]">
          <button className="w-full mb-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl font-bold transition-all flex items-center justify-center space-x-2">
            <span>⚙️</span>
            <span>Settings</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full p-4 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-2xl font-bold text-red-400 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
