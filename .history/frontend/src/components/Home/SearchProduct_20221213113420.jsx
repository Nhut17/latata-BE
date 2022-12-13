import React from 'react'
import "../../sass/Home/searchProduct.scss"
import ListSearchProduct from './ListSearchProduct'

const SearchProduct = ({listProduct}) => {
  return (

    <div className='search-product' style={
      listProduct.length >= 10 ? {
          height: 780,
          overflowY: 'scroll'
      } : {}
  }>
      {
          listProduct.map(data => (

               <ItemSearchProduct data={data} /> 
          ))
      }
    
  </div>

  )
}

export default SearchProduct
