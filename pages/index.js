import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Khushaal Choithramani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <Projects />
      </div>
    </div>
  )
}
