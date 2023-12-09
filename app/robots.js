export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: 'https://flight-schedule-imadeekosatria.vercel.app/sitemap.xml',
    }
  }