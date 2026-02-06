import { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, name: string) => void;
}

export function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!isLoginMode && !formData.name.trim()) {
      newErrors.name = 'Name required hai';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email required hai';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email enter karein';
    }

    if (!formData.password) {
      newErrors.password = 'Password required hai';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password kam se kam 6 characters ka hona chahiye';
    }

    if (!isLoginMode && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords match nahi ho rahe';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate successful login
      const userName = isLoginMode ? 'Abdul Malik' : formData.name;
      onLogin(formData.email, userName);
      onClose();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const demoLogin = () => {
    onLogin('abdul.malik@email.com', 'Abdul Malik');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 shadow-[0_0_60px_rgba(139,92,246,0.4)] animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">🚀</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">
            {isLoginMode ? 'Welcome Back!' : 'Join SkillSync'}
          </h2>
          <p className="text-slate-400 text-sm">
            {isLoginMode 
              ? 'Apni career journey continue karein' 
              : 'Apna career transformation shuru karein'}
          </p>
        </div>

        {/* Demo Login Button */}
        <button
          onClick={demoLogin}
          className="w-full mb-6 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/50 px-6 py-3 rounded-xl font-bold hover:bg-purple-600/30 transition-all flex items-center justify-center space-x-2"
        >
          <span>⚡</span>
          <span>Quick Demo Login (Abdul Malik)</span>
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-[#050508] px-3 text-slate-500">ya apna account use karein</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLoginMode && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Abdul Malik"
                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition-all`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="abdul.malik@email.com"
              className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition-all`}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="••••••••"
              className={`w-full bg-white/5 border ${errors.password ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition-all`}
            />
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
          </div>

          {!isLoginMode && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Confirm Password</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder="••••••••"
                className={`w-full bg-white/5 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition-all`}
              />
              {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
          )}

          {isLoginMode && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-slate-400">
                <input type="checkbox" className="mr-2 accent-purple-600" />
                Remember me
              </label>
              <button type="button" className="text-purple-400 hover:text-purple-300">
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            {isLoginMode ? 'Login' : 'Create Account'}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="text-center mt-6 text-sm">
          <span className="text-slate-400">
            {isLoginMode ? "Don't have an account? " : 'Already have an account? '}
          </span>
          <button
            onClick={() => {
              setIsLoginMode(!isLoginMode);
              setErrors({});
            }}
            className="text-purple-400 hover:text-purple-300 font-bold"
          >
            {isLoginMode ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
