import React from 'react'

const ItemCart = ({data}) => {
  return (
    
    <div className='item' key={data.id}>
            <div className="img-sp">
                <img src={data.imgUrl} alt="" />
                <div className="delete">
                    <button ><i class="fa-solid fa-trash-can"></i> Xóa</button>
                </div>
            </div>
            <div className="content-product">
                <div className="name-and-price">
                    <p className="name">{data.name}</p>
                    <div>
                    <p className='price'>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        <span className='currency'>&#8363;</span>
                    </p>
                    <div className="price-old">
                    {
                         data.promotion > 0 ? (
                            <div className="">
                        <span className='initialPrice'>
                            {data.priceOld
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
                        <button className='decrease'><i class="fa-solid fa-minus"></i></button>
                        <input type="text" name="" id="" />
                        <button className='increase'><i class="fa-solid fa-plus"></i></button>
                    </div>

                </div>
            </div>

    </div>  
    
    
    
  )
}

export default ItemCart
