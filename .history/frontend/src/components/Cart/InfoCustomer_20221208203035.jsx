import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const InfoCustomer = ({totalPrice}) => {

    // const { } = useForm

//   const {

//   } = useFormAction()

  const [changeStyleName,setChangeStyleName] = useState(false)
  const [changeStyleNumber,setChangeStyleNumber] = useState(false)


 

  const handleOnChange = (e) => {
   
      if(e.target.value)
      {
          setChangeStyleName(true)   
          
      } else{
          setChangeStyleName(false)
      }
  }
  const handleOnChangeNumber = (e) => {
      setChangeStyleNumber(true)
   
      if(e.target.value === '')
      {
          setChangeStyleNumber(false)   
          
      }
  }

  return (
    <div className='info-customer'>
        <p>THÔNG TIN KHÁCH HÀNG</p>

        <form>

        <div className="name-and-number">
        <div className="name input"  >
            <input type="text" name='name' onChange={handleOnChange}
                />
            <span htmlFor='name' style={changeStyleName ? {
                                                        transform: 'translate(15px,-15px)',
                                                       fontSize: 14,
                                                       backgroundColor:'white',
                                                       padding: '0 3px' } : {}}>Họ và Tên</span>
        </div>
        <div className="number input">
            <input type="text"  name='number' onChange={handleOnChangeNumber}
                 />
            <span htmlFor='number' style={changeStyleNumber ? {transform: 'translate(15px,-15px)',
                                                       fontSize: 14,
                                                       backgroundColor:'white',
                                                       padding: '0 3px' } : {}}>Số điện thoại</span>
        </div>
        </div>
        
        <div className='address'>
              <p>Địa chỉ</p>
              <input className='input-address' />
        </div>
        
        <div className="note">
        <p>Yêu cầu khác</p>
        <textarea name="" id="" cols="30" rows="3"></textarea>
        </div>

        <div className='voucher'>
        <i class="fa-solid fa-tag ic"></i>
        <div className="input">
         <input type="text" placeholder='Sử dụng mã giảm giá' />
        </div>

    </div>
    <div className='final-total'>
    <div className="total">
        <span className="tt-price">Tổng tiền:</span>
        <span className="price">{totalPrice.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span>
    </div>

    <button className='order' type='submit'>ĐẶT HÀNG</button>

    </div>
        
        </form>
    </div>
  )
}

export default InfoCustomer
