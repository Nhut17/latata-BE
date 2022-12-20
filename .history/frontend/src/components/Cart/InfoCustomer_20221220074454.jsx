import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch,useSelector } from 'react-redux'
import { createOrder } from '../../redux/Order/orderSlice'
import ModalListAddress from './ModalListAddress'


const InfoCustomer = ({totalPrice}) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
     } = useForm()

    const dispatch = useDispatch()


  const [changeStyleName,setChangeStyleName] = useState(false)
  const [changeStyleNumber,setChangeStyleNumber] = useState(false)


  const handleClickOrderDetail = () => {
    setShowOrderDetail(true)
  }

  const [showOrderDetail, setShowOrderDetail] = useState(false)

  // create order
  const handleCreateOrder = (formData) =>{
        console.log(formData)
        dispatch(createOrder(formData))
  }
 

  // handle style name and phone
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
    <>
        <div className='info-customer'>

            <p>THÔNG TIN KHÁCH HÀNG</p>

            <form onSubmit={handleSubmit(handleCreateOrder)}>

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
                        },
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
                <p style={{textDecoration: 'underline',
            }}          >Địa chỉ:</p>
                    <br />
                {/* <input 
                        className='input-address'
                        {...register('address', {
                            required:true
                        })} />
                        {
                            errors.address?.type === 'required' &&
                            <span className='err-msg' style={{
                                transform: 'translate(0px,75px)',
                            }}>Mời bạn nhập địa chỉ</span> 
                        } */}

                    <div className="address-detail">
                        Số 10 đường số 3 hẻm 613 Lê Văn Việt, Phường Tân Phú, Thành Phố Thủ Đức, TP. Hồ Chí Minh
                    </div>
                    <br />
                    <u className='change' onClick={handleClickOrderDetail}>Thay đổi</u>

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

        {

            showOrderDetail && 
            <ModalListAddress  showAddress={showOrderDetail} 
            setShowAddress={setShowOrderDetail} 
             />
 
        }
    </>



  )
}


export default InfoCustomer
