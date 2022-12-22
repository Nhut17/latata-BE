import React from 'react'
import MenuTopBlock from './MenuTopBlock'
import ListProduct from '../ListProduct'
import { Link } from 'react-router-dom'
import '../../sass/BlockProduct/blockItemProduct.scss'
import { useSelector } from 'react-redux'

const BlockItemProduct = ({banner,menuTop,linkTo,title,listProduct,category}) => {

  const { listCate } = useSelector(state => state.category)

  const id = listCate

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

        <button className='btnViewMore'><Link to={`/${category}/${title}/`}>XEM TẤT CẢ CÁC {title} CHÍNH HÃNG</Link></button>

    </div>
  )
}

export default BlockItemProduct