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
              MS Computer Science at Arizona State University, specializing in machine learning and distributed systems.
            </p>
            <p className="mb-3">
              I build full-stack products and the systems behind them. Recently that's meant real-time sports platforms, a FastAPI and
              Next.js migration, an AI advising chatbot, and multi-agent LLM pipelines. Before grad school I built storage and backup
              infrastructure at Telstra's Cloud Group.
            </p>
            <p className="mb-3">
              Outside coursework I build things I find interesting, like Evolution of Formula One (an interactive scrollytelling site) and a
              distributed Counter Strike 2 analytics platform.
            </p>
            <p className="mb-1">Actively looking for SWE and MLE roles. Open to connecting.</p>
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
