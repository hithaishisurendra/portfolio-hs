import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Experience - Hithaishi Surendra',
  openGraph: {
    title: 'Experience - Hithaishi Surendra',
    url: '/experience',
  },
  alternates: {
    canonical: '/experience',
  },
}

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  highlights: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Developer Intern',
    company: 'Thropic Games',
    location: 'Denver, CO',
    period: 'June 2025 – January 2026',
    highlights: [
      'Built a 0-to-1 launch dashboard in React, Next.js and Tailwind that replaced the paid Feathery subscription, cut recurring tooling cost and let non-technical staff run campaigns themselves',
      'Integrated and troubleshot undocumented third-party sports data APIs, building a rate-limit-aware Python polling service with caching and payload trimming to deliver reliable real-time scoring across 3 leagues',
      'Designed and queried PostgreSQL schemas for players, matches and scoring, cutting query latency 40% and holding real-time reads steady under live campaign load',
      'Automated content generation with the Claude API, producing around 130 quiz questions weekly and replacing up to 20 hours of manual work',
    ],
  },
  {
    title: 'Software Developer Intern (Part-Time)',
    company: 'Vantion',
    location: 'Phoenix, AZ',
    period: 'June 2025 – August 2025',
    highlights: [
      'Split a monolith into FastAPI backend and Next.js frontend using Claude Code to ship fast, owning the migration and fixing the API and auth bugs that surfaced. Deployment time dropped 90%',
      'Wired AWS-hosted ML pipeline into the migrated app, connecting frontend, backend and ML service for end-to-end delivery',
      'Set up CI/CD on Vercel for automated build, preview and release, running PR-based code reviews and managing secrets and environment variables across environments',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Telstra',
    location: 'Bengaluru, India',
    period: 'July 2023 – July 2024',
    highlights: [
      'Ran production incident response, troubleshooting and escalation triage for internal and external stakeholders, driving the ticket queue from 50+ to under 15 while covering 24/7 on-call across multi-cluster infrastructure',
      'Automated 850+ Commvault backup jobs in Python and pushed success rate up 15%. Recovery data tiered to Azure Blob Storage',
      'Provisioned NetApp SVMs across 4 clusters, 2,000 to 4,000 volumes each, with snapshot schedules, QoS policies and SLA compliance',
      'Monitored storage health across distributed infrastructure with IT Asset Management tooling, holding observability over backup and recovery while production storage stayed at 99.9% availability',
    ],
  },
]

export default function ExperiencePage() {
  return (
    <>
      <PageTitle title="Experience" />
      <div className="mb-6">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Full-stack development, AI integration, and distributed systems across startups and enterprise environments.
        </p>
      </div>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-400 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-600"
          >
            <div className="mb-3 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold">{exp.title}</h3>
                <p className="text-base font-semibold text-neutral-700 dark:text-neutral-300">{exp.company}</p>
              </div>
            </div>

            <div className="mb-4 flex flex-wrap gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <span>{exp.location}</span>
              <span>•</span>
              <span>{exp.period}</span>
            </div>

            <div className="mb-4">
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex text-sm leading-relaxed">
                    <span className="mr-2 text-neutral-400">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
