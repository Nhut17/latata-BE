import React from 'react'
import MenuTopBlock from './MenuTopBlock'
import ListProduct from '../ListProduct'
import { Link } from 'react-router-dom'
import '../../sass/BlockProduct/blockItemProduct.scss'

const BlockItemProduct = ({banner,menuTop,linkTo,title,listProduct}) => {

  const category = listProduct.slice(0,1).map()

  console.log(listProduct)
  console.log(category)

  return (
    <div className='block-item-product'>
        <div className="banner">
            <img src={banner} alt="" />
        </div>

        {/* {
          menuTop.length > 0 &&
          <MenuTopBlock menuTop={menuTop} />

        } */}

        <ListProduct quantity={10}
                      list_product={listProduct} />

        <button className='btnViewMore'><Link to={`/${title}`}>XEM TẤT CẢ CÁC {title} CHÍNH HÃNG</Link></button>

    </div>
  )
}

export default BlockItemProduct