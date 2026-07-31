'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { Project } from '../projectsData'

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter()

  const handleCardClick = () => {
    if (project.slug) {
      router.push(`/projects/${project.slug}`)
    }
  }

  return (
    <div
      onClick={handleCardClick}
      className={`group relative border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-400 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-600 ${
        project.slug ? 'cursor-pointer' : ''
      }`}
    >
      <div className="mb-3 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="mb-1 text-lg font-bold">{project.title}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{project.date}</p>
        </div>
        <span className="ml-2 rounded bg-neutral-100 px-2 py-1 text-xs dark:bg-neutral-900">{project.category}</span>
      </div>

      <p className="mb-4 text-sm leading-relaxed">{project.description}</p>

      <div className="mb-4">
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">Key Highlights</h4>
        <ul className="space-y-1">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="flex text-sm">
              <span className="mr-2 text-neutral-400">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {project.slug && (
          <span className="inline-flex items-center text-sm font-medium hover:underline">
            View Details
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center text-sm font-medium hover:underline"
          >
            GitHub
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}
