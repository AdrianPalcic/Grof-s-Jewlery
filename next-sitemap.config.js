/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://grofsjewelry.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changeFreq: "daily",
  prority: 0.7,
};
