export type RoleKey = 'coach' | 'consultant' | 'podcast' | 'youtube' | 'course-creator'

export const rolePacks: Record<
  RoleKey,
  {
    title: string
    hero: string
    why: string[]
    gets: string[]
    slug: string
  }
> = {
  coach: {
    title: 'Coaches & Consultants',
    slug: 'coach',
    hero: 'Turn a 60‑minute session into 6 short videos and a LinkedIn post — in minutes.',
    why: [
      'Stay top‑of‑mind on LinkedIn and YouTube every week.',
      'Authority‑first copy; clear captions; brand‑safe overlays.',
      'Every clip ships with a call‑to‑action to book calls.',
    ],
    gets: [
      '6 Shorts/Reels per session',
      'LinkedIn post draft (120–180 words)',
      'Newsletter summary',
      'Professional caption styles + brand kit',
    ],
  },
  consultant: {
    title: 'Consultants',
    slug: 'consultant',
    hero: 'Your client calls come from consistent content — ClipForge makes it effortless.',
    why: [
      'Finds your best moments and packages them for LinkedIn.',
      'Save 4+ hours weekly while posting more.',
      'CTA templates designed to book discovery calls.',
    ],
    gets: ['5–10 Shorts per long video', 'LinkedIn post draft', 'Carousel outline (3–5 slides)', 'Lead magnet teaser line'],
  },
  podcast: {
    title: 'Podcasters',
    slug: 'podcast',
    hero: 'Every episode becomes Shorts, show notes, and a newsletter — in minutes.',
    why: [
      'Quote overlays highlight your guest’s best moments.',
      '5–10 Shorts per episode for YouTube/IG/TikTok.',
      'Auto‑generated show notes and newsletter blurbs.',
    ],
    gets: [
      '6–10 Shorts per episode',
      'Guest name tags + quote overlays',
      'Show notes (Apple/Spotify ready)',
      'Newsletter blurb (120–160 words)',
      'Chapter timestamps',
    ],
  },
  youtube: {
    title: 'YouTube Creators',
    slug: 'youtube',
    hero: 'Turn your long videos into 10 Shorts — optimized for growth.',
    why: ['AI finds hooks and drafts clickable titles.', 'Thumbnail text ideas so you ship faster.', 'Stay consistent: more posts, less editing.'],
    gets: ['8–10 Shorts per video', '10 title suggestions', '6 thumbnail text options', 'Pinned comment + Community post drafts'],
  },
  'course-creator': {
    title: 'Course Creators',
    slug: 'course-creator',
    hero: 'Turn live workshops into clips, email drafts, and social posts — in minutes.',
    why: ['Keep your audience warm between launches.', 'Educational caption styles designed for clarity.', 'Repurpose Q&A moments into evergreen snippets.'],
    gets: ['5–10 Shorts per session', 'Email/newsletter draft', 'LinkedIn post draft', 'Lesson highlight captions'],
  },
}
