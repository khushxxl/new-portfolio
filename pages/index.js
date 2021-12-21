import Head from 'next/head'
import About from '../components/About'
import Connect from '../components/Connect'
import End from '../components/End'
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
        <meta
          name="description"
          content="Want a to build beautiful and cool Apps and Websites? Hire me as your freelancer and get it done in no time!"
        />
        <meta
          name="keywords"
          content=" KHUSHAAL CHOITHRAMANI , KHUSHAAL , CHOITHRAMANI ,  HTML , CSS , JAVASCRIPT , FIREBASE , REACTJS , NEXTJS ,TAILWIND CSS , React-Native , FREELANCER , HIRE , APPS , WEBSITES , WEB-APPS , MOBILE APPLICATIONS , ANDROID , IOS , WEB "
        />
        <meta name="author" content="Khushaal Choithramani" />
      </Head>

      <main className="">
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <Projects />
        <About />
        <Connect />
        <End />
      </main>
    </div>
  )
}
