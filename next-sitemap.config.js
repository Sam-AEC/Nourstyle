/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nourstyle.nl',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*', '/privacy', '/terms'],
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    if (path === '/women' || path === '/men') priority = 0.9;
    if (path.includes('/contact')) priority = 0.8;

    return {
      loc: path,
      changefreq: 'weekly',
      priority: priority,
      lastmod: new Date().toISOString(),
    }
  },
}
