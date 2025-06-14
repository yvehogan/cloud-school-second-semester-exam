"use client"

import Link from "next/link"
import { Github, Cloud } from "lucide-react"
import { FiLinkedin } from "react-icons/fi"
import { MdOutlineMailOutline } from "react-icons/md"

interface HeaderProps {
  headerRef: React.RefObject<HTMLDivElement | null>
  headerInView: boolean
}

export default function Header({ headerRef, headerInView }: HeaderProps) {
  return (
    <div
      ref={headerRef}
      className={`z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex p-6 md:p-24 pb-0 transition-all duration-1000 ${
        headerInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-blue-200 dark:border-blue-800 bg-gradient-to-b from-blue-100/80 via-white/80 to-transparent pb-6 pt-8 backdrop-blur-2xl dark:from-blue-900/80 dark:via-gray-900/80 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-blue-100/50 dark:lg:bg-blue-900/50 lg:p-4 transition-all duration-300 hover:bg-blue-200/50 dark:hover:bg-blue-800/50">
        <Cloud className="inline mr-2 h-4 w-4 text-blue-600 dark:text-blue-400 animate-pulse" />
        Cloud School of Engineering Second Semester Exam.
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div className="flex space-x-4">
          <Link
            href="https://github.com/yvehogan"
            className="group rounded-lg border border-transparent px-3 py-2 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 dark:hover:border-blue-700 dark:hover:bg-blue-900/30 hover:scale-110 hover:shadow-lg"
          >
            <Github className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:animate-bounce" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/evelyn-ita"
            className="group rounded-lg border border-transparent px-3 py-2 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 dark:hover:border-blue-700 dark:hover:bg-blue-900/30 hover:scale-110 hover:shadow-lg"
          >
            <FiLinkedin className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:animate-bounce" />
          </Link>
          <Link
            href="mailto:hoganevelyn5@gmail.com"
            className="group rounded-lg border border-transparent px-3 py-2 transition-all duration-300 hover:border-orange-300 hover:bg-orange-50 dark:hover:border-orange-700 dark:hover:bg-orange-900/30 hover:scale-110 hover:shadow-lg"
          >
            <MdOutlineMailOutline className="h-5 w-5 text-orange-600 dark:text-orange-400 group-hover:animate-bounce" />
          </Link>
        </div>
      </div>
    </div>
  )
}
