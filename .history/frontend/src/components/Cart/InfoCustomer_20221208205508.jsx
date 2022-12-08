import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const InfoCustomer = ({totalPrice}) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
     } = useForm()



  const [changeStyleName,setChangeStyleName] = useState(false)
  const [changeStyleNumber,setChangeStyleNumber] = useState(false)

  console.log(changeStyleName)

  const createOrder = (formData) =>{
        console.log(formData)
  }
 

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

        <form onSubmit={handleSubmit(createOrder)}>

        <div className="name-and-number">
        <div className="name input"  >
            <input 
                type="text" 
                onChange={handleOnChange}
                {...register('name',{
                    required: true,
                    onChange: (e) => {
                        if(e.target.value)
                        {
                            setChangeStyleName(true)   
                            
                        } else{
                            setChangeStyleName(false)
                        }
                    }
                    
                })}
                />
                <span className='err-msg'>Mời bạn nhập họ tên</span> 

            {
                errors.name?.type === 'required' &&
                <span className='err-msg'>Mời bạn nhập họ tên</span> 
            }

            
            <span className='style-change' htmlFor='name' style={changeStyleName ? {
                                                        transform: 'translate(15px,-15px)',
                                                       fontSize: 14,
                                                       backgroundColor:'white',
                                                       padding: '0 3px' } : {}}>Họ và Tên</span>
        </div>
        <div className="number input">
            <input 
                type="text"  
                onChange={handleOnChangeNumber}
                {...register('phoneNo',{
                    required: true,
                    onChange: (e) => {
                        setChangeStyleNumber(true)
   
                        if(e.target.value === '')
                        {
                            setChangeStyleNumber(false)   
                            
                        }
                    }
                    pattern: {
                        message: 'Số điện thoại không phù hợp',
                        value: /^\d+$/,
                        
                    }
                })}
                 />
                 <span className='style-change' htmlFor='number' style={changeStyleNumber ? {transform: 'translate(15px,-15px)',
                 fontSize: 14,
                 backgroundColor:'white',
                 padding: '0 3px' } : {}}>Số điện thoại</span>

                 {
                    errors.phoneNo?.type === 'required' &&
                     <span className='err-msg'>Mời bạn nhập Số điện thoại</span> 
                }
                {
                    errors.phoneNo?.type === 'pattern' &&
                     <span className='err-msg'>{errors.phoneNo.message}</span> 
                }
           
        </div>
        </div>
        
        <div className='address'>
              <p>Địa chỉ</p>
              <input 
                    className='input-address'
                    {...register('address', {
                        required:true
                    })} />
                    {
                        errors.address?.type === 'required' &&
                         <span className='err-msg'>Mời bạn nhập địa chỉ</span> 
                    }
        </div>
        
        <div className="note">
        <p>Yêu cầu khác</p>
        <textarea name="" id="" cols="30" rows="3"
                  {...register('note')}  ></textarea>
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
