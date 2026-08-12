/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: build on laptop/CI, serve with nginx/caddy on the VPS.
  // The 1-core/1GB VPS cannot run `next build` safely.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
