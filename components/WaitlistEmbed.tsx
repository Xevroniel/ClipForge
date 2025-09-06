'use client'

type Props = { role: string }

const EMBEDS: Record<string, string | undefined> = {
  coach: process.env.NEXT_PUBLIC_FORM_EMBED_COACHES,
  consultant: process.env.NEXT_PUBLIC_FORM_EMBED_CONSULTANTS,
  podcast: process.env.NEXT_PUBLIC_FORM_EMBED_PODCASTERS,
  youtube: process.env.NEXT_PUBLIC_FORM_EMBED_YOUTUBE,
  'course-creator': process.env.NEXT_PUBLIC_FORM_EMBED_COURSE_CREATORS,
}

export function WaitlistEmbed({ role }: Props) {
  const html = EMBEDS[role]
  if (html) {
    return <div dangerouslySetInnerHTML={{ __html: html }} aria-label="waitlist form" />
  }
  return (
    <div
      style={{
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px dashed rgba(255,255,255,.18)',
        borderRadius: 10,
        color: '#9fb3d3',
        marginBottom: 10,
        textAlign: 'center',
        padding: 12,
      }}
    >
      Set env var <code>NEXT_PUBLIC_FORM_EMBED_{role.replace('-', '_').toUpperCase()}</code> with your Beehiiv / ConvertKit / Tally HTML embed.
    </div>
  )
}
