"use client"

interface ProjectCardProps {
  title: string
  description: string
  projectRef: React.RefObject<HTMLDivElement | null>
  projectInView: boolean
}

export default function ProjectCard({ title, description, projectRef, projectInView }: ProjectCardProps) {
  return (
    <div
      ref={projectRef}
      className={`group rounded-xl border border-blue-200 dark:border-blue-800 px-6 py-6 transition-all duration-1000 hover:border-blue-400 dark:hover:border-blue-600 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:-translate-y-2 ${
        projectInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h2 className="mb-3 text-2xl font-semibold text-blue-900 dark:text-blue-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
