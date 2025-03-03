'use client'
import { formatDate } from '@/lib/formatDate'
import { Card } from '@/components/Card'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { useState } from 'react'

function Article({ article }: { article: ArticleWithSlug }) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <Card.Title href={`/articles/${article.slug}`}>
                    {article.title}
                </Card.Title>
                <Card.Eyebrow
                    as="time"
                    dateTime={article.date}
                    className="md:hidden"
                    decorate
                >
                    {formatDate(article.date)}
                </Card.Eyebrow>
                <Card.Description>{article.description}</Card.Description>
                <Card.Cta>Read article</Card.Cta>
            </Card>
            <Card.Eyebrow
                as="time"
                dateTime={article.date}
                className="mt-1 hidden md:block"
            >
                {formatDate(article.date)}
            </Card.Eyebrow>
        </article>
    )
}

type Props = {
    articles: any
}

const ArticleList = ({ articles }: Props) => {

    const [allowedAmnt, setAllowedAmnt] = useState(3)

    return (
        <div className='flex max-w-3xl flex-col space-y-16'>
            {articles.map((article: any, index: any) => (
                <>
                    {index <= allowedAmnt && (
                        <Article key={article.slug} article={article} />
                    )}
                </>
            ))}
            {allowedAmnt < articles.length && (
                <div className='w-full flex justify-center'>
                    <button className='ring-1 ring-zinc-100 dark:ring-zinc-800 px-8 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 ease-in-out hover:cursor-pointer' onClick={() => setAllowedAmnt(allowedAmnt + 3)}>See More Articles</button>
                </div>
            )}
        </div>
    )
}

export default ArticleList;