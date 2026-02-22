import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Gradify',
  description:
    'Web-basiertes Notenverwaltungssystem für Hochschulen mit Microservice-Architektur, Spring Boot, Angular und Kubernetes',
  href: 'https://gradify.app',
  author: 'jakub',
  locale: 'de-DE',
  featuredPostCount: 6,
  postsPerPage: 12,
}

export const ANALYTICS = {
  google: import.meta.env.PUBLIC_GOOGLE_ANALYTICS_ID || '',
}

export const UMAMI = {
  websiteId: import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || '',
}

export const DISQUS = {
  shortname: '',
}

export const BREVO = {
  apiKey: '',
  listId: '',
  templateId: '',
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/#nutzer-liste',
    label: 'Demo-Zugänge',
  },
  {
    href: '/blog',
    label: 'Dokumentation',
  },
  {
    href: '/tags',
    label: 'Themen',
  },
  {
    href: '/about',
    label: 'Team',
  },
]

/** URL der laufenden Gradify-App (z. B. http://localhost:4200). Leer = kein Link im Header. */
export const APP_URL = import.meta.env.PUBLIC_APP_URL || 'http://localhost:4200'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/your-org/webapp-http-200',
    label: 'GitHub',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

export const NEWSLETTER_CONSENT_TEXT = {
  text: '',
  privacyLink: '/privacy',
  privacyText: 'Privacy Policy',
}
