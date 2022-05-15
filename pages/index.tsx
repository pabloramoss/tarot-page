import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Contact from '../src/Contact'
import Services from '../src/Services'
import Hero from '../src/Hero'
import Navbar from '../src/Navbar'
import Footer from '../src/Footer'
import Horoscope from '../src/Horoscope'
import fetchNotion from '../utils/fetchNotion'
import Post from '../src/Post'

interface Props {
  post: any;
}

const Home: NextPage<Props> = ({ post }) => {
  console.log(post)
  console.log(post[0].properties)
  
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
          <Post title={post[0].properties.Name.title[0].text.content} description={post[0].properties.Description.rich_text[0].plain_text} image={post[0].properties.Image.files[0].name} />
          {/* {post.map((item:IPost)=> <Post key={item.titulo} title={item.titulo} description={item.texto} image={item.imagen} />)} */}
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetchNotion()

  return {
    props: {
      post: response
    },
    revalidate: 60,
  };
};

export default Home