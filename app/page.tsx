"use client"

import { Cloud, Code, Server, Database, Shield, Zap } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

import Header from "../components/Header"
import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"
import BioCard from "../components/BioCard"
import Skills from "../components/Skills"
import AnimatedBackground from "../components/AnimatedBackground"

export default function Home() {
  const name = "Evelyn Ita"
  const studentId = "ALT/SOE/024/5137"
  const role = "Current FrontEnd Engineer and Future Lead Cloud Engineer"
  const projectTitle = "The Future of Healing "
  const pitch =
    "Everyone experiences loss, but few know how to navigate the emotional aftermath. Our platform creates a safe, digital space for people to process grief, share memories, and find comfort in guided support and community. We're using technology not to distract from pain but to walk alongside it."
  const bio =
    "I'm a Frontend Engineer with a passion for building thoughtful, user-centered web experiences. With over three years of experience working with modern JavaScript frameworks like React and Next.js, I specialize in translating design into performant, accessible interfaces. Currently, I'm expanding my skills into cloud computing—learning how to deploy and scale web applications in real-world environments using platforms like AWS."

  const [headerRef, headerInView] = useScrollAnimation({ threshold: 0.1 })
  const [heroRef, heroInView] = useScrollAnimation({ threshold: 0.2 })
  const [projectRef, projectInView] = useScrollAnimation({ threshold: 0.3 })
  const [bioRef, bioInView] = useScrollAnimation({ threshold: 0.3 })
  const [skillsRef, skillsInView] = useScrollAnimation({ threshold: 0.2 })

  const skills = [
    { name: "AWS", icon: Cloud, delay: 0 },
    { name: "Docker", icon: Server, delay: 100 },
    { name: "Kubernetes", icon: Database, delay: 200 },
    { name: "CI/CD", icon: Code, delay: 300 },
  ]


  return (
    <main className="flex min-h-screen pb-24 flex-col items-center justify-between bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-blue-950 dark:via-gray-900 dark:to-orange-950 overflow-x-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Header */}
      <Header headerRef={headerRef} headerInView={headerInView} />

      {/* Hero Section */}
      <Hero name={name} role={role} studentId={studentId} heroRef={heroRef} heroInView={heroInView} />

      {/* Content Cards */}
      <div className="mb-16 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left gap-6 z-10 px-6">
        {/* Project Card */}
        <ProjectCard 
          title={projectTitle} 
          description={pitch} 
          projectRef={projectRef} 
          projectInView={projectInView} 
        />

        {/* Bio Card */}
        <BioCard 
          bio={bio} 
          bioRef={bioRef} 
          bioInView={bioInView} 
        />

        {/* Skills showcase */}
        <Skills 
          skills={skills} 
          skillsRef={skillsRef} 
          skillsInView={skillsInView} 
        />
      </div>
    </main>
  )
}
