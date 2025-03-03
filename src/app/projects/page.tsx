
import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import huluLogo from '@/images/logos/huluLogo.svg'
import sortLogo from '@/images/logos/sortLogo.svg'
import instagramLogo from '@/images/logos/instagramLogo.svg'
import lyricLogo from '@/images/logos/lyricLogo.svg'
import slackLogo from '@/images/logos/slackLogo.svg'
import favoriteComponents from '@/images/logos/favoriteComponents.svg'
import nextLogo from '@/images/logos/nextLogo.svg'
import firebaseLogo from '@/images/logos/firebaseLogo.svg'
import tailwindLogo from '@/images/logos/tailwindLogo.svg'
import javascriptLogo from '@/images/logos/javascriptLogo.svg'
import reactLogo from '@/images/logos/reactLogo.svg'
import cssLogo from '@/images/logos/cssLogo.svg'
import dragIcon from '@/images/logos/dragIcon.svg'
import appwriteLogo from '@/images/logos/appwriteLogo.png'
import typescriptLogo from '@/images/logos/typescriptLogo.svg'
import disneyLogo from '@/images/logos/Disney+logo.svg'

const projects = [
  {
    name: 'Disney Plus Clone',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'https://disney-plus-clone-9g12.vercel.app/', label: 'disney-plus-clone' },
    logo: disneyLogo,
    tech: [
      nextLogo,
      firebaseLogo,
      tailwindLogo,
      javascriptLogo
    ]
  },
  {
    name: 'Favorite Components',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'https://favorite-components.vercel.app/', label: 'favorite-components' },
    logo: favoriteComponents,
    tech: [
      nextLogo,
      firebaseLogo,
      tailwindLogo,
      javascriptLogo
    ]
  },
  {
    name: 'Drag & Drop',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://drag-and-drop-tau-six.vercel.app/', label: 'drag-&-drop' },
    logo: dragIcon,
    tech: [
      nextLogo,
      tailwindLogo,
      appwriteLogo,
      typescriptLogo
    ]
  },
  {
    name: 'Hulu Clone',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: 'https://hulu-clone-kappa-two.vercel.app/?genre=fetchTrending', label: 'hulu-clone' },
    logo: huluLogo,
    tech: [
      nextLogo,
      tailwindLogo,
      javascriptLogo
    ]
  },
  {
    name: 'Instagram Clone',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: 'https://insta-clone-red-ten.vercel.app/', label: 'insta-clone' },
    logo: instagramLogo,
    tech: [
      nextLogo,
      firebaseLogo,
      tailwindLogo,
      javascriptLogo
    ]
  },
  {
    name: 'Sorting Visualizer',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: 'https://sort-visualizer-opal.vercel.app/', label: 'sort-vizualizer' },
    logo: sortLogo,
    tech: [
      reactLogo,
      javascriptLogo,
      cssLogo
    ]
  },
  {
    name: 'Lyric Finder',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://song-lyrics-ten.vercel.app/', label: 'song-lyrics' },
    logo: lyricLogo,
    tech: [
      nextLogo,
      tailwindLogo,
      javascriptLogo
    ]
  },
  {
    name: 'Slack Clone',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: 'https://slackclone-40f8f.web.app/', label: 'slack-clone' },
    logo: slackLogo,
    tech: [
      reactLogo,
      javascriptLogo,
      cssLogo,
      firebaseLogo
    ]
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Sites I',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="My projects"
      intro="I'm constantly trying to learn and create new things. I love to build and I love to learn. Here are some of my recent projects."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target='_blank'>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <div className='my-4 flex space-x-4'>
              {project.tech.map(img => (
                <div key={img}>
                  <Image src={img} alt='' width={100} height={100} className='w-8 h-8 rounded-full bg-white' />
                </div>
              ))}
            </div>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-cyan-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
