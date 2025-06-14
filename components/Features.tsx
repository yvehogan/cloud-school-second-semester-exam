"use client"

import { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  delay: number
}

interface FeaturesProps {
  features: Feature[]
  featuresRef: React.RefObject<HTMLDivElement | null>
  featuresInView: boolean
}

export default function Features({ features, featuresRef, featuresInView }: FeaturesProps) {
  return (
    <div ref={featuresRef} className="mt-16">
      <h3
        className={`text-2xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent transition-all duration-1000 ${
          featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Why Choose Our Platform
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className={`group p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: featuresInView ? `${feature.delay}ms` : "0ms",
              }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-orange-100 dark:from-blue-900 dark:to-orange-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
