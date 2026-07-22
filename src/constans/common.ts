import { FiAward, FiBriefcase, FiClipboard, FiHome, FiMail, FiUser } from 'react-icons/fi'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/experience', label: 'Experience', Icon: FiBriefcase },
  { path: '/projects', label: 'Projects', Icon: FiClipboard },
  { path: '/blog', label: 'Publications', Icon: FiAward },
  { path: '/contact', label: 'Contact', Icon: FiMail },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/experience': 'Experience',
  '/projects': 'Projects',
  '/blog': 'Publications',
  '/contact': 'Contact',
}

export const SOCIALS = {
  GH: 'https://github.com/hithaishisurendra',
  IN: 'https://www.linkedin.com/in/hithaishi-surendra',
  GS: 'https://scholar.google.com/citations?user=dY1Zyw8AAAAJ&hl=en',
  EMAIL: 'mailto:hsurendr@asu.edu',
}

export const RESUME_URL = 'https://drive.google.com/file/d/1WybyrpPrNGs60ckVYO-nJrhFtuO5USBQ/view?usp=sharing'

export const FORMSPREE_KEY = 'mredeykn'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCVXW6MTdRVtYPTOoV92ruBQ3ZQcF5Ho0g',
  authDomain: 'dede-ard.firebaseapp.com',
  databaseURL: 'https://dede-ard.firebaseio.com',
  projectId: 'dede-ard',
  storageBucket: 'dede-ard.appspot.com',
  messagingSenderId: '120930847292',
  appId: '1:120930847292:web:eb77034f59e9ee37b65139',
  measurementId: 'G-KJRFL3X06T',
}
