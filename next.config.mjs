/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // All site images live in /public/images — replace any file with the same
    // name to swap an image. No code changes required.
  },
};

export default nextConfig;
