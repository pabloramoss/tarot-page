import {GetStaticProps, InferGetStaticPropsType} from "next";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import NotionService from "../utils/notion";

const Post = ({markdown, post}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name={"description"} title={"description"} content={post.description}/>
                <meta name={"og:title"} title={"og:title"} content={post.title}/>
                <meta name={"og:description"} title={"og:description"} content={post.description}/>
                <meta name={"og:image"} title={"og:image"} content={post.cover}/>
            </Head>

            <div className="mx-auto max-w-7xl min-h-screen text-white flex flex-col justify-center">
              <img className="self-center" height={500} width={500} src={post.cover.url} />
                <main className="max-w-5xl mx-auto relative">
                    <div className="flex items-center justify-center">
                        <article>
                            <ReactMarkdown>{markdown}</ReactMarkdown>
                        </article>
                    </div>
                </main>
            </div>
        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const notionService = new NotionService()
    const posts = await notionService.getPublishedBlogPosts()
    const post = posts[0]

    // @ts-ignore
    const p = await notionService.getSingleBlogPost(post.slug)

    if (!p) {
        throw ''
    }

    return {
        props: {
            markdown: p.markdown,
            post: p.post
        },
    }
}

export default Post;