/** @type {import('next').NextConfig} */
    const nextConfig = {
      reactStrictMode: true,
      swcMinify: true,
      images: {
        domains: ['localhost'],
      },
      i18n: {
        locales: ['en', 'hu'],
        defaultLocale: 'en',
      },
    }

    module.exports = nextConfig
