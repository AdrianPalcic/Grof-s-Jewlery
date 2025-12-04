/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://grofsjewelry.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily", // note: small c
  priority: 0.7,
};

export default config;
