export function ProboscisMonkeyLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main head shape with gradient-like effect using multiple layers */}
      <ellipse cx="50" cy="42" rx="28" ry="22" fill="#D2691E" />
      <ellipse cx="50" cy="42" rx="25" ry="19" fill="#CD853F" />
      <ellipse cx="50" cy="42" rx="22" ry="16" fill="#DEB887" />

      {/* Distinctive large proboscis nose - the key feature */}
      <ellipse cx="50" cy="52" rx="10" ry="15" fill="#CD853F" />
      <ellipse cx="50" cy="58" rx="8" ry="12" fill="#D2691E" />
      <ellipse cx="50" cy="62" rx="6" ry="8" fill="#DEB887" />

      {/* Nostrils */}
      <ellipse cx="47" cy="60" rx="1.5" ry="2" fill="#8B4513" />
      <ellipse cx="53" cy="60" rx="1.5" ry="2" fill="#8B4513" />

      {/* Eyes with more detail */}
      <circle cx="40" cy="38" r="4" fill="#FFFFFF" />
      <circle cx="60" cy="38" r="4" fill="#FFFFFF" />
      <circle cx="40" cy="38" r="2.5" fill="#2F4F4F" />
      <circle cx="60" cy="38" r="2.5" fill="#2F4F4F" />
      <circle cx="41" cy="37" r="1" fill="#FFFFFF" />
      <circle cx="61" cy="37" r="1" fill="#FFFFFF" />

      {/* Eyebrows */}
      <path d="M35 33 Q40 30 45 33" stroke="#8B4513" strokeWidth="2" fill="none" />
      <path d="M55 33 Q60 30 65 33" stroke="#8B4513" strokeWidth="2" fill="none" />

      {/* Ears with inner detail */}
      <ellipse cx="28" cy="32" rx="7" ry="10" fill="#CD853F" />
      <ellipse cx="72" cy="32" rx="7" ry="10" fill="#CD853F" />
      <ellipse cx="28" cy="32" rx="4" ry="6" fill="#DEB887" />
      <ellipse cx="72" cy="32" rx="4" ry="6" fill="#DEB887" />

      {/* Mouth */}
      <path d="M45 48 Q50 52 55 48" stroke="#8B4513" strokeWidth="1.5" fill="none" />

      {/* Body with natural coloring */}
      <ellipse cx="50" cy="78" rx="18" ry="20" fill="#D2691E" />
      <ellipse cx="50" cy="78" rx="15" ry="17" fill="#DEB887" />

      {/* Arms with hands */}
      <ellipse cx="22" cy="72" rx="9" ry="18" fill="#CD853F" />
      <ellipse cx="78" cy="72" rx="9" ry="18" fill="#CD853F" />
      <circle cx="18" cy="85" r="5" fill="#DEB887" />
      <circle cx="82" cy="85" r="5" fill="#DEB887" />

      {/* Chest marking */}
      <ellipse cx="50" cy="75" rx="8" ry="12" fill="#F5DEB3" />
    </svg>
  )
}
