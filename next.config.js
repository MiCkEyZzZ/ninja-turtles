const withReactSvg = require('next-react-svg')

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
  nextConfig,
  withReactSvg,
}
