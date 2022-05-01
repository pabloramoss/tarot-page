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

interface Props {
  heroInfo: HeroInfo;
  services: ServiceInfo[];
  }

const Home: NextPage<Props> = ({ heroInfo, services }) => {
  console.log("Este es el hero info",heroInfo)
  console.log("Este es el services",services)
  
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Tzolkin Marce</title>
        <meta name="Tarot" content="Tzolkin Marce Tarot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Navbar />
        <Hero title={heroInfo.title} image_url={heroInfo.image} />
        <Horoscope />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
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
/*       services,
 */    },
  };
};

export default Home
