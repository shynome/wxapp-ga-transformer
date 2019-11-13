// @ts-check

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '.' : '',
  distDir: '/docs',
  pageExtensions: ["page.tsx"],
}
