// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { dirs: ['app', 'components', 'lib'] },
  async headers() {
    const csp = [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' https://plausible.io https://*.beehiiv.com https://*.convertkit.com https://tally.so;",
      "style-src 'self' 'unsafe-inline' https:;",
      "img-src 'self' data: blob: https:;",
      "connect-src 'self' https://plausible.io;",
      "frame-src https://*.beehiiv.com https://*.convertkit.com https://tally.so;",
      "font-src 'self' https: data:;"
    ].join(' ')
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { key: 'Content-Security-Policy', value: csp }
      ]
    }]
  }
}
export default nextConfig
