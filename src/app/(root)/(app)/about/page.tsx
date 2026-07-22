import dedeard from '@/assets/dedeard.jpg'
import { RESUME_URL } from '@/constans/common'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'About - Hithaishi Surendra',
  openGraph: {
    title: 'About - Hithaishi Surendra',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image src={dedeard} alt="Hithaishi Surendra profile photo" className="block w-full" placeholder="blur" />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h2 className="mb-2 text-xl font-bold">I'm Hithaishi Surendra</h2>
          <div className="mb-6">
            <p className="mb-3">
              Fresh CS grad from Arizona State with a focus on ML, Agentic AI, and Distributed Systems. I build things end-to-end - scalable
              backends, AI-powered features, microservices and I care about systems that actually work in production.
            </p>
            <p className="mb-1">
              I've shipped at startups (Thropic, Vantion) and at scale (Telstra), which means I'm comfortable going from zero to one and
              from one to many. Think automated scoring and AI quiz generation, monolith-to-microservices, and cloud storage systems at
              scale. Currently looking for software engineering and MLE roles where I can keep doing both.
            </p>
          </div>
          <a
            download
            target="_blank"
            rel="nofollow"
            href={RESUME_URL}
            className="mr-3 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Resume
          </a>
          <Link
            href="/contact"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}
