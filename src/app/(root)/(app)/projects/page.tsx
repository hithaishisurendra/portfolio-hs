import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import ProjectCard from './components/ProjectCard'
import { projects } from './projectsData'

export const metadata: Metadata = {
  title: 'Projects - Hithaishi Surendra',
  openGraph: {
    title: 'Projects - Hithaishi Surendra',
    url: '/projects',
  },
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsPage() {
  return (
    <>
      <PageTitle title="Projects" />
      <div className="mb-6">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          A collection of academic and personal projects showcasing my work in AI/ML, distributed systems, cloud computing, and data
          visualization.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  )
}
