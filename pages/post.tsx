import {GetStaticProps, InferGetStaticPropsType} from "next";
import {FaArrowLeft} from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import Link from "next/link";

import NotionService from "../utils/notion";
import Navbar from "../src/Navbar";
import Footer from "../src/Footer";

const Post = ({markdown, post}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(markdown);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta content={post.description} name={"description"} title={"description"} />
        <meta content={post.title} name={"og:title"} title={"og:title"} />
        <meta content={post.description} name={"og:description"} title={"og:description"} />
        <meta content={post.cover} name={"og:image"} title={"og:image"} />
      </Head>
      <Navbar />
      <div className="mx-auto mb-20 max-w-7xl min-h-screen text-white flex flex-col justify-center">
        <Link href="/">
          <a className="self-center my-5">
            <button className="bg-gray-700 px-6 rounded-md text-lg hover:bg-gray-800 flex items-center">
              <FaArrowLeft className="mr-2" size={12} />
              Volver
            </button>
          </a>
        </Link>
        <img className="my-10 self-center w-7xl" src={post.cover.url} />
        <main className="max-w-5xl mx-auto relative">
          <div className="flex items-center justify-center">
            <article>
              <ReactMarkdown className="reactMarkDown">{markdown}</ReactMarkdown>
            </article>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts();
  const post = posts[0];

  // @ts-ignore
  const p = await notionService.getSingleBlogPost(post.slug);

  if (!p) {
    throw "";
  }

  return {
    props: {
      markdown: p.markdown,
      post: p.post,
    },
  };
};

export default Post;
