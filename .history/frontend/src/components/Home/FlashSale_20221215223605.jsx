import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListProduct from '../ListProduct'

const FlashSale = () => {

  const {listProduct} = useSelector(state => state.product)
  
  const [bes,setTets] = useState(listProduct.slice(0,10).sort((a,b) =>  b.sold - a.sold))



  return (
    <div className='flash-sales'>
        <div className="title-flash">
            <div className="title">
                {/* <span>FL<i class="fa-solid fa-bolt icon"></i>SH SALE</span> */}
                <span>Xu hướng mua sắm</span>
                <img src="https://cdn-icons-png.flaticon.com/512/1942/1942070.png" alt="" />
            </div>

            {/* <div className="time-sale">
                <ul>
                  <li>
                    <p>Đang diễn ra</p>
                    <p className='time-line'>09:00 - 11:00</p>
                  </li>
                  <li>
                    <p>Sắp diễn ra</p>
                    <p className='time-line'>14:00 - 16:00</p>
                  </li>
                  <li>
                    <p>Sắp diễn ra</p>
                    <p className='time-line'>20:00 - 22:00</p>
                  </li>
                </ul>
            </div> */}

        </div>

        {/* <div className="end-sale">
            <p>Kết thúc:</p>
            <div className="count-down">
                <span>24</span>
                :
                <span>00</span>
                :
                <span>00</span>
            </div>
        </div> */}

        <ListProduct quantity={10} />

    </div>
  )
}

export default FlashSale
