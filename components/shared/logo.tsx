import Image from "next/image"

export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AoQ7KCy9_400x400.jpg-1oX37WPeQGtWDZcFN2mt9fOVgCJ49x.jpeg"
        alt="Team Valioux Logo"
        width={100}
        height={100}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
