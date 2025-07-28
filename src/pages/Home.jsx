import React from 'react'
import Header from '../components/Header'
import SpecilatyMenu from '../components/specilatyMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header />
     <SpecilatyMenu />
     <TopDoctors />
     <Banner />
      
    </div>
  )
}

export default Home
