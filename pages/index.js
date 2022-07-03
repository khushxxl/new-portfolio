import Head from 'next/head'
import About from '../components/About'
import Connect from '../components/Connect'
import End from '../components/End'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Review from '../components/Review'
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
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Source+Sans+Pro:wght@200&family=Truculenta:opsz,wght@12..72,500&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Arima:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="keywords"
          content=" KHUSHAAL CHOITHRAMANI , KHUSHAAL , CHOITHRAMANI ,  HTML , CSS , JAVASCRIPT , FIREBASE , REACTJS , NEXTJS ,TAILWIND CSS , React-Native , FREELANCER , HIRE , APPS , WEBSITES , WEB-APPS , MOBILE APPLICATIONS , ANDROID , IOS , WEB "
        />
        <meta name="author" content="Khushaal Choithramani" />
        {/* <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init();</script> */}
      </Head>

      <main className="">
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <Review />
        <Projects />
        <About />
        <Connect />
        <End />
      </main>
    </div>
  )
}
