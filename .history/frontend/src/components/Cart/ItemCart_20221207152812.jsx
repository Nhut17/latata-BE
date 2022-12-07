import React, { useState } from 'react'

const ItemCart = ({data}) => {

    const [quantity,setQuantity] = useState(0)

    const handleIncrease = () => {

    }

    const handleDecrease = () => {
        
    }

  return (
    
    <div className='item' key={data.productId}>
            <div className="img-sp">
                <img src={data.images[0].url} alt="" />
                <div className="delete">
                    <button ><i class="fa-solid fa-trash-can"></i> Xóa</button>
                </div>
            </div>
            <div className="content-product">
                <div className="name-and-price">
                    <p className="name">{data.name}</p>
                    <div>
                    <p className='price'>{data.priceDeal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        <span className='currency'>&#8363;</span>
                    </p>
                    <div className="price-old">
                    {
                         data.promotion > 0 ? (
                            <div className="">
                        <span className='initialPrice'>
                            {data.price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span>
                        </span>
                  </div>
                ) : ('')
              }
                    </div>
                    </div>
                </div>
                <div className="promotion">
                    4 khuyến mãi
                </div>

                <div className="product-quantity-and-color">

                <p className="color-product">Màu: Đen</p>

                    <div className="select-quantity">
                        <button className='decrease'
                                onClick={handleDecrease} ><i class="fa-solid fa-minus"></i></button>
                        <input type="text" name="" id="" />
                        <button className='increase'
                                onClick={handleIncrease} ><i class="fa-solid fa-plus"></i></button>
                    </div>

                </div>
            </div>

    </div>  
    
    
    
  )
}

export default ItemCart
