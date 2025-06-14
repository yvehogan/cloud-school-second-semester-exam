"use client"
import { Sparkles, Zap } from "lucide-react"

interface HeroProps {
  name: string
  role: string
  studentId: string
  heroRef: React.RefObject<HTMLDivElement | null>
  heroInView: boolean
}

export default function Hero({ name, role, heroRef, heroInView, studentId }: HeroProps) {
  return (
    <div
      ref={heroRef}
      className={`relative flex place-items-center z-10 px-6 transition-all duration-1000 delay-200 ${
        heroInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
      }`}
    >
      <div className="w-full max-w-3xl text-center">
        <div className="relative">
          <Sparkles className="absolute -top-8 -left-8 h-6 w-6 text-orange-400 animate-spin-slow" />
          <Zap className="absolute -top-6 -right-6 h-5 w-5 text-blue-400 animate-pulse" />
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 bg-clip-text text-transparent sm:text-6xl">
            {name}
          </h1>
        </div>
        <p className="mt-4 text-xl text-blue-600 dark:text-blue-400 font-medium">Student ID: {studentId}</p>
        <p className="mt-4 text-xl text-blue-600 dark:text-blue-400 font-medium">{role}</p>
        <div className="mt-6 flex justify-center mb-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900 dark:to-orange-900 text-sm font-medium text-blue-800 dark:text-blue-200 hover:scale-105 transition-transform duration-300">
            <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
            Available for exciting opportunities
          </div>
        </div>
      </div>
    </div>
  )
}
