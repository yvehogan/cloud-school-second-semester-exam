"use client"

interface BioCardProps {
  bio: string
  bioRef: React.RefObject<HTMLDivElement | null>
  bioInView: boolean
}

export default function BioCard({ bio, bioRef, bioInView }: BioCardProps) {
  return (
    <div
      ref={bioRef}
      className={`group rounded-xl border border-orange-200 dark:border-orange-800 px-6 py-6 transition-all duration-1000 delay-200 hover:border-orange-400 dark:hover:border-orange-600 bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-orange-950 hover:shadow-2xl hover:shadow-orange-500/20 dark:hover:shadow-orange-400/20 hover:-translate-y-2 ${
        bioInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h2 className="mb-3 text-2xl font-semibold text-orange-900 dark:text-orange-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
            Professional Bio
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  )
}
