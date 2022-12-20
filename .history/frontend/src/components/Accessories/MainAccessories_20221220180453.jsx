import React, { useEffect } from 'react'
import { useContext } from 'react'
import TopSlider from '../Tablet/TopSlider'
import { AccessoryContext } from '../../context/accessoryContext'
import FeaturedListCate from './FeaturedListCate'
import ListBrand from './ListBrand'
import ListBlockAccessories from './ListBlockAccessories'
import BlockSaleProduct from '../SubComponents/BlockSaleProduct'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCate, resetListCate } from '../../redux/Product/productSlice'
import { useParams } from 'react-router-dom'


const MainAccessories = () => {

    const context = useContext(AccessoryContext)
    const {listProductCate} = useSelector(state => state.product)
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(() => {
    dispatch(resetListCate())
    dispatch(getProductCate(id))
  },[])

  const listSale = (list_product) => {
      return list_product?.filter(val => val.promotion >= 50)
  }

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

            <BlockSaleProduct listProduct={listSale(listProductCate)} />

           <ListBlockAccessories listProduct={listProductCate} />

        </div>

    </div>
  )
}

export default MainAccessories