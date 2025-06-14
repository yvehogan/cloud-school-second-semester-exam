"use client"

import { LucideIcon } from "lucide-react"

interface Skill {
  name: string
  icon: LucideIcon
  delay: number
}

interface SkillsProps {
  skills: Skill[]
  skillsRef: React.RefObject<HTMLDivElement | null>
  skillsInView: boolean
}

export default function Skills({ skills, skillsRef, skillsInView }: SkillsProps) {
  return (
    <div ref={skillsRef} className="mt-8">
      <h3
        className={`text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent transition-all duration-1000 ${
          skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Core Technologies
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => {
          const Icon = skill.icon
          return (
            <div
              key={skill.name}
              className={`group p-6 rounded-lg bg-gradient-to-br from-blue-100 to-orange-100 dark:from-blue-900 dark:to-orange-900 border border-blue-200 dark:border-blue-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-700 hover:scale-105 hover:shadow-lg ${
                skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: skillsInView ? `${skill.delay}ms` : "0ms",
              }}
            >
              <div className="text-center">
                <Icon className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-blue-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 group-hover:scale-110" />
                <div className="text-lg font-semibold text-blue-800 dark:text-blue-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {skill.name}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
