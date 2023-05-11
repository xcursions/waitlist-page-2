import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../components/Waitlist-page/HeroSection'
import SafeTravelSection from '../components/Waitlist-page/SafeTravelSection'
import VacationSection from '../components/Waitlist-page/VacactionSection'
import BookHotelSection from '../components/Waitlist-page/BookHotelSection'
import FaqSection from '../components/Waitlist-page/FaqSection'
import FooterSection from '../components/Waitlist-page/FooterSection'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Xcursions</title>
        <meta name="description" content="Travel, Discover, Explore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
      <HeroSection />
      <SafeTravelSection />
      <VacationSection />
      <BookHotelSection />
      {/* <VacationSection /> */}
      <FaqSection />
      <FooterSection />
      
      </main>

     
    </div>
  )
}
