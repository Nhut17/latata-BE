import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SubProduct = () => {

    const { listProduct } = useSelector(state => state.product)
    const dispatch = useDispatch()
    const {}

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
      }, [])

  return (
    <div className='sub-product'>
        
    </div>
  )
}

export default SubProduct
