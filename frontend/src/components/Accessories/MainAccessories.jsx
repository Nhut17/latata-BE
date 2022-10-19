import React from 'react'
import { useContext } from 'react'
import TopSlider from '../Tablet/TopSlider'
import { AccessoryContext } from '../../context/accessoryContext'
import FeaturedListCate from './FeaturedListCate'
import ListBrand from './ListBrand'
import ListBlockAccessories from './ListBlockAccessories'
import BlockSaleProduct from '../SubComponents/BlockSaleProduct'


const MainAccessories = () => {

    const context = useContext(AccessoryContext)

  return (
    <div className='main-accessories'>

        <div className="bg-slider">
            <div className="container">
                <TopSlider sliders={context.sliderTablet} banners={context.bannerTablet} />
            </div>
        </div>


        <div className="container">

            <FeaturedListCate />
            <ListBrand />

            <BlockSaleProduct />

           <ListBlockAccessories />

        </div>

    </div>
  )
}

export default MainAccessories