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
    company: 'Thropic Technology',
    location: 'Denver, CO, USA',
    period: 'June 2025 – Jan 2026',
    highlights: [
      'Built automated scoring backend integrating ESPN APIs (NFL, NBA, NCAA), eliminating manual validation.',
      'Integrated Claude into quiz-generation workflows, designing prompts and automation pipelines that eliminated manual content creation steps across live campaigns.',
      'Designed and optimized Postgres schemas for players, matches, and scoring, reducing query latency by 40%.',
      'Replaced Feathery with internal dashboard built from scratch, enabling self-serve game launches.',
      'Led 0 to 1 website (React, Next.js, Tailwind), scaling to 10K+ users, 3× engagement, 2× session time.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Vantion',
    location: 'Phoenix, AZ, USA',
    period: 'June 2025 – Aug 2025',
    highlights: [
      'Split a monolithic application into separate FastAPI (backend) and Next.js (frontend) services, fixing more than 12 integration issues and reducing deployment time by 90%.',
      'Set up CI/CD pipelines on Vercel with automated previews and sub-minute builds; used Claude Code, Cursor, and Copilot to accelerate development.',
      'Updated data handling and APIs after Supabase schema redesign, improving auth and cutting dev time by 40%.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Telstra',
    location: 'Bangalore, KA, India',
    period: 'July 2023 – July 2024',
    highlights: [
      'Built backend services for a Kafka-based messaging platform using Node.js and MongoDB, supporting over 10K messages per day with stable uptime.',
      'Improved reliability and scalability by using Kafka queues and containerized deployments with Docker.',
      'Automated 850+ cloud backups with Python across NetApp and Commvault, improving success rate by 15%.',
      'Provisioned NetApp Storage Virtual Machines and applied QoS policies to maintain steady IOPS.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'R.V. College of Engineering - Cisco',
    location: 'Bangalore, KA, India',
    period: 'Sept 2021 – Oct 2021',
    highlights: [
      'Built a Flask-based NLP tool (NLTK, entity recognition) for campus Q&A, handling more than 100 daily queries and improving accuracy through a feedback loop.',
      'Deployed chatbot on college website handling 100+ daily queries as part of Cisco internship.',
    ],
  },
]

export default function ExperiencePage() {
  return (
    <>
      <PageTitle title="Experience" />
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-neutral-300 pl-4 dark:border-neutral-700">
            <div className="mb-2">
              <h2 className="text-xl font-bold">{exp.title}</h2>
              <h3 className="text-lg text-neutral-700 dark:text-neutral-300">{exp.company}</h3>
              <div className="mt-1 flex flex-wrap gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                <span>{exp.location}</span>
                <span>•</span>
                <span>{exp.period}</span>
              </div>
            </div>
            <ul className="mt-3 space-y-2">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex text-sm leading-relaxed">
                  <span className="mr-2 text-neutral-400">◦</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
