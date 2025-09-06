import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://clipforge.app'
  return [
    { url: base + '/', changeFrequency: 'weekly', priority: 1 },
    { url: base + '/coaches', changeFrequency: 'weekly', priority: 0.9 },
    { url: base + '/consultants', changeFrequency: 'weekly', priority: 0.9 },
    { url: base + '/podcasters', changeFrequency: 'weekly', priority: 0.9 },
    { url: base + '/youtube', changeFrequency: 'weekly', priority: 0.9 },
    { url: base + '/course-creators', changeFrequency: 'weekly', priority: 0.9 },
  ]
}
