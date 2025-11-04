/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // cualquiera de estas dos sirve; usa SOLO una de las dos
    // 1) Lista simple de dominios
    // domains: ["images.unsplash.com", "source.unsplash.com", "plus.unsplash.com"],

    // 2) remotePatterns (más flexible)
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" }
    ],
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
