import { SOCIALS } from '@/constans/common'
import { FaEnvelope, FaGithub, FaGraduationCap, FaLinkedin } from 'react-icons/fa'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="relative flex min-h-full w-full flex-col items-center justify-center">
      <div className="relative flex items-center justify-center py-3">
        <h1 className="relative flex-1">
          <span className="grid grid-cols-2">
            <span className="block text-center text-sm opacity-90">I AM</span>
          </span>{' '}
          <span className=" z-10 block text-[calc(1.825rem+6.9vw)] font-bold leading-none">Hithaishi Surendra</span>{' '}
          <span className="grid grid-cols-2 justify-items-end">
            <span className="block"></span>
            <span className="block text-sm opacity-90">
              SOFTWARE ENGINEER
              <br /> & AI ENTHUSIAST
            </span>
          </span>
        </h1>
        <div className="absolute -bottom-1/4 mx-auto flex">
          <a href={SOCIALS.GH} aria-label="GitHub" target="_blank" rel="noopener" className="mx-2 block p-2 opacity-80 hover:opacity-95">
            <FaGithub size={20} />
          </a>
          <a href={SOCIALS.IN} aria-label="LinkedIn" target="_blank" rel="noopener" className="mx-2 block p-2 opacity-80 hover:opacity-95">
            <FaLinkedin size={20} />
          </a>
          <a
            href={SOCIALS.GS}
            aria-label="Google Scholar"
            target="_blank"
            rel="noopener"
            className="mx-2 block p-2 opacity-80 hover:opacity-95"
          >
            <FaGraduationCap size={20} />
          </a>
          <a href={SOCIALS.EMAIL} aria-label="Email" className="mx-2 block p-2 opacity-80 hover:opacity-95">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
