import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import TrustBar from '../components/TrustBar'
import Testimonials from '../components/Testimonials'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/Faq'
import CareBySpeciality from '../components/CareBySpeciality'
import RecentBlogs from '../components/RecentBlogs'
import Support from '../components/Support'

const Home = () => {
  return (
    <div>
      <Header />
      <TrustBar />
      <SpecialityMenu />
      <HowItWorks />
      <TopDoctors />
      <CareBySpeciality />
      <RecentBlogs />
      <Testimonials />
      <FAQ />
      <Banner />
      <Support />
    </div>
  )
}

export default Home
