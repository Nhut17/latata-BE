import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const SubProduct = () => {

    const { list } = useSelector(state => state.product)

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
