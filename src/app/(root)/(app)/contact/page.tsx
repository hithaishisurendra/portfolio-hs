import { FORMSPREE_KEY } from '@/constans/common'
import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import ContactForm from './components/ContactForm'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contact - Hithaishi Surendra',
  openGraph: {
    title: 'Contact - Hithaishi Surendra',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 w-full text-center lg:w-[480px] lg:text-left">
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">LOCATION</h2>
            <p className="text-sm leading-5">United States</p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">EMAIL ADDRESS</h2>
            <p className="text-sm leading-5">
              <a href="mailto:hsurendr@asu.edu" rel="noopener" className="hover:text-yellow-600">
                hsurendr@asu.edu
              </a>
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">PHONE</h2>
            <p className="text-sm leading-5">
              <a href="tel:+14807426031" target="_blank" rel="noopener" className="hover:text-yellow-600">
                (480) 742-6031
              </a>
            </p>
          </div>
        </div>
        <div className="lg:flex-1">
          <ContactForm formspreeKey={FORMSPREE_KEY} />
        </div>
      </div>
    </>
  )
}
