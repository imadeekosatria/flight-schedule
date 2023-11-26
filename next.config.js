/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/my-project-584ac.appspot.com/o/**',
          },
          {
            protocol: 'https',
            hostname: 'juanda-airport.com',
            port: '',
            pathname: '/frontend/uploads/defaults/**'
          }
        ],
    },
}

module.exports = nextConfig
