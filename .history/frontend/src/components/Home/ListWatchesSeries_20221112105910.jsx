import React from 'react'
import Product from '../Product'
import banner from '../../assets/images/home/banner_watch_series.png'
import { list_product } from '../data'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct } from '../../redux/Product/productSlice'

const ListWatchesSeries = () => {

    const listProduct = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    },[])

  return (
    <div className='list-watches'>
        <div className="banner">
            <Link to=''>
                <img src={banner} alt="" />
            </Link>
        </div>

        <div className="list-product-watches">
            
            
            
        </div>

    </div>
  )
}

export default ListWatchesSeries
