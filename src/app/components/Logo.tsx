import logoImage from "figma:asset/6950c0b680e6ef9ead48ee27ca1121cc5ba73943.png";

export function Logo() {
  return (
    <img 
      src={logoImage} 
      alt="SkillSync Logo" 
      className="w-full h-full object-contain"
    />
  );
}