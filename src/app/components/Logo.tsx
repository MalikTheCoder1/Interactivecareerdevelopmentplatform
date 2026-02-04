export function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="url(#logo-grad)" />
      <path 
        d="M12 20C12 15.5781 15.5781 12 20 12V20H28C28 24.4219 24.4219 28 20 28C15.5781 28 12 24.4219 12 20Z" 
        fill="white" 
      />
      <path 
        d="M28 20C28 15.5781 24.4219 12 20 12V20H12C12 24.4219 15.5781 28 20 28C24.4219 28 28 24.4219 28 20Z" 
        fill="white" 
        fillOpacity="0.4" 
      />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
