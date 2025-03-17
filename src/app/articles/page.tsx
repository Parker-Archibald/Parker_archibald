import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import ArticleList from './articles'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Writing on software development and my journey as a Full Stack Web Developer."
      intro="All of my hard learned lessons as I progress in my development journey."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="">
          <ArticleList articles={articles} />
        </div>
      </div>
    </SimpleLayout>
  )
}
