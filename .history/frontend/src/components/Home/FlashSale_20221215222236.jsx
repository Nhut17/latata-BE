import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListProduct from '../ListProduct'

const FlashSale = () => {

  const {listProduct} = useSelector(state => state.product)
  
  const temp = listProduct.sort(())

  // const [test,setTets] = useState(listProduct)

  const bestSeller = (list) => {
    // return
  }

  return (
    <div className='flash-sales'>
        <div className="title-flash">
            <div className="title">
                <span>FL<i class="fa-solid fa-bolt icon"></i>SH SALE</span>
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
