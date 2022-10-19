import React from 'react'
import '../sass/Home/Home.scss'
import BigBanner from '../components/Home/BigBanner'
import FlashSale from '../components/Home/FlashSale'
import OptionPromote from '../components/Home/OptionPromote'
import Banner from '../components/Home/Banner'
import banner_opt from '../assets/images/home/banner_opt.png'

import ShoppingTrends from '../components/Home/ShoppingTrends'
import GreatDeals from '../components/Home/GreatDeals'
import RecommendToday from '../components/Home/RecommendToday'
import Tech24h from '../components/Home/Tech24h'

import MenuOptions from '../components/Home/MenuOptions'
import ListWatchesSeries from '../components/Home/ListWatchesSeries'
import bannerGalaxy from '../assets/images/home/banner_galaxy.png'


const Home = () => {
  return (
    <div className="home">
      
      <div className="big-banner">
        <BigBanner />
      </div>

      <div className="container">
        <div className="banner-home">

          <Banner banner={banner_opt} />
        </div>
        <OptionPromote />
        
        <FlashSale />


        <ShoppingTrends/>
        
        

        <MenuOptions />
        <ListWatchesSeries />
        <div className="banner-galaxy">
          <Banner banner={bannerGalaxy} />
        </div>
        <GreatDeals/>
        <RecommendToday/>
        <Tech24h/>
      </div>


    </div>
  )
}

export default Home
