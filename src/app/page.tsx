import BlurFadeText from '@/components/magicui/blue-fade-text';
import BlurFade from '@/components/magicui/blur-fade';
import { ResumeCard } from '@/components/resume.card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { DATA } from '@/data/resume';
import { AvatarFallback } from '@radix-ui/react-avatar';
import Markdown from 'react-markdown';
import { Badge } from '@/components/ui/badge';

const BLUR_FADE_DELAY = 0.04;
const NO_EXPERIENCE = true;
export default function Home() {
  return (
    <main className='flex flex-col min-h-[100dvh] space-y-10'>
      <section id='hero'>
        <div className='mx-auto w-full max-w-2xl  space-y-8'>
          <div className='gap-2 flex justify-between'>
            <div className='flex flex-col flex-1 space-y-1.5'>
              <BlurFadeText
                text={`Hi i'm ${DATA.name.split(' ')[0]} 👋`}
                delay={BLUR_FADE_DELAY}
                yOffset={8}
                className='text-3xl font-bold tracking-tight  sm:text-5xl xl:text-6xl/none'
              />
              <BlurFadeText
                text={DATA.description}
                delay={BLUR_FADE_DELAY}
                yOffset={8}
                className='max-w-[600px] md:text-lg'
              />
            </div>
            <BlurFade>
              <Avatar className='size-40 border border-blue-300'>
                <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id='about'>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className='text-xl font-bold'>About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert'>
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id='work'>
        <div className='flex min-h-0 flex-col gap-y-4'>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className='text-xl font-bold'>Work Experient</h2>
          </BlurFade>
          {NO_EXPERIENCE ? (
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h1>No experience</h1>
            </BlurFade>
          ) : (
            <div>
              {DATA.work.map((work, id) => (
                <BlurFade
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                  key={work.company}
                >
                  <ResumeCard
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? 'present'}`}
                    description={work.description}
                  />
                </BlurFade>
              ))}
            </div>
          )}
        </div>
      </section>
      <section id='Education'>
        <div className='flex min-h-0 flex-col gap-y-4'>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className='text-xl font-bold'>Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.logoUrl}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                logoUrl={education.logoUrl}
                altText={education.school}
                key={education.school}
                subtitle={education.degree}
                href={education.href}
                title={education.school}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id='skills'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className='text-xl font-bold'>Skills</h2>
          </BlurFade>
          <div className='flex flex-wrap gap-1'>
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id='projects'>
        <div className='space-y-12 w-full py-12'>
          <div className='space-y-12 w-full py-12'>
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='space-y-2'>
                  <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                    My Projects
                  </div>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                    Check out my latest work
                  </h2>
                  <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </main>
  );
}
