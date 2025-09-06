import Image from "next/image"

export function ProboscisMonkeyLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Nanoprobo Logo"
      width={32}
      height={32}
      className={className}
      priority
    />
  )
}
