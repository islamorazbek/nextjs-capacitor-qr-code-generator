/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '',
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
  images: {
    unoptimized: true
  },
  transpilePackages: ['@ionic/react', '@ionic/core', '@stencil/core', 'ionicons'],
}
