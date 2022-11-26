import React from 'react'
import AddressSelect from './AddressSelect'
import InfoGender from './InfoGender'
import InfoNameNumber from './InfoNameNumber'

const InfoCustomer = () => {



  return (
    <div className='info-customer'>
        <p>THÔNG TIN KHÁCH HÀNG</p>

        <form>
       <InfoNameNumber />
       

        <div className="note">
            <p>Yêu cầu khác</p>
            <textarea name="" id="" cols="30" rows="3"></textarea>
        </div>

    </div>
  )
}

export default InfoCustomer
