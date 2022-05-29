import type {GetStaticProps, InferGetStaticPropsType} from "next";

import Head from "next/head";

import Contact from "../src/Contact";
import Services from "../src/Services";
import Hero from "../src/Hero";
import Navbar from "../src/Navbar";
import Footer from "../src/Footer";
import Horoscope from "../src/Horoscope";
import Post from "../src/Post";
import NotionService from "../utils/notion";

const Home = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(posts);
  const post = posts[0];

  return (
    <div className="bg-slate-900">
      <Head>
        <title>Tzolkin Marce</title>
        <meta content="Tzolkin Marce Tarot" name="Tarot" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="">
        <Navbar />
        <Hero />
        <Horoscope />
        <Post description={post.description} image={post.cover.url} title={post.title} />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
