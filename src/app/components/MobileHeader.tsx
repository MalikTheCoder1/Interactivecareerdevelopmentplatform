import { Logo } from './Logo';

interface MobileHeaderProps {
  isLoggedIn: boolean;
  userName?: string;
  onMenuClick: () => void;
  onAuthClick: () => void;
}

export function MobileHeader({ isLoggedIn, userName, onMenuClick, onAuthClick }: MobileHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/95 backdrop-blur-xl border-b border-white/10 md:hidden">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8">
            <Logo />
          </div>
          <span className="text-xl font-bold tracking-tighter">SkillSync</span>
        </div>

        {isLoggedIn ? (
          <button
            onClick={onMenuClick}
            className="flex items-center space-x-2 px-3 py-2 bg-white/5 rounded-full"
          >
            <div className="w-7 h-7 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-xs">
              👤
            </div>
            <span className="text-sm font-medium max-w-[100px] truncate">{userName}</span>
          </button>
        ) : (
          <button
            onClick={onAuthClick}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 rounded-full text-sm font-bold"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}
