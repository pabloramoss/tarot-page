import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Contact from '../src/Contact'
import Services from '../src/Services'
import Hero from '../src/Hero'
import Navbar from '../src/Navbar'
import Footer from '../src/Footer'
import api from '../src/api'
import { HeroInfo, ServiceInfo } from '../src/types'
import dbConnect from "../lib/dbConnect"
import Herodb from "../models/Herodb"
import Servicesdb from '../models/Servicesdb'
import Horoscope from '../src/Horoscope'
import { createClient } from "@supabase/supabase-js"
import Post from '../src/Post'
import NavbarTest from '../src/Navbar/NavbarTest'
interface Props {
  heroInfo: HeroInfo;
  services: ServiceInfo[];
  post: IPost[];
  }

interface IPost {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Home: NextPage<Props> = ({ heroInfo, services, post }) => {
  console.log("Este es el hero info",heroInfo)
  console.log("Este es el services",services)
  console.log("Este es el post",post)
  
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Tzolkin Marce</title>
        <meta name="Tarot" content="Tzolkin Marce Tarot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <NavbarTest />
{/*         <Navbar />
        <Hero title={heroInfo.title} image_url={heroInfo.image} /> */}
          {post.map((item:IPost)=> <Post key={item.id} title={item.title} description={item.description} image={item.image} />)}
        <Horoscope />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  )

  const { data } = await supabaseAdmin
  .from("Post")
  .select("*")
  /* await dbConnect() */

   /* find all the data in our database */
/*   const result = await Herodb.find({})
  const heroInfo = result.map((doc) => {
    const hero = doc.toObject()
    hero._id = hero._id.toString()
    return hero
  }) */
/*   const result = await Servicesdb.find({})
  const services = result.map((doc) => {
    const service = doc.toObject()
    service._id = service._id.toString()
    return service
  }) */
  const heroInfo = {
    title: "Calendario Maya",
    image: "https://www.aliciagalvan.com/wp-content/uploads/2019/05/su_signo_segun_el_horoscopo_maya_1_joya_life-1600x400.jpg"
  }

  return {
    props: {
      heroInfo,
      post: data,
/*       services,
 */    },
  };
};

export default Home
