import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Contact from '../src/Contact'
import Services from '../src/Services'
import Hero from '../src/Hero'
import Navbar from '../src/Navbar'
import Footer from '../src/Footer'
import Horoscope from '../src/Horoscope'
import Post from '../src/Post'
import NotionService from '../utils/notion'

const Home = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(posts)
  const post = posts[0]
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Tzolkin Marce</title>
        <meta name="Tarot" content="Tzolkin Marce Tarot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Navbar />
        <Hero />
        <Horoscope />
          <Post title={post.title} description={post.description} image={post.cover.url} />
          {/* {post.map((item:IPost)=> <Post key={item.titulo} title={item.titulo} description={item.texto} image={item.imagen} />)} */}
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts()

  return {
    props: {
      posts
    },
  }
}

export default Home