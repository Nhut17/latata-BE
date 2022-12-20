import React from 'react'

const InfoListAddress = ({val,selected,setSelectedAddress}) => {
  return (
    <div className="address-item flex" key={val._id}>
                 
    <div className="input-radio">
        <input 
            checked={ val.address_default == 1 && true }
            type="radio" 
            name="" 
            id="" />

    </div>
    

    <div className="detail">
        <p><span>{val.name}</span> <span className='space'>|</span> <span className='gray'>{val.phone}</span> </p>
        
        <span className='gray'>{val.address}</span>

        {
            val.address_default == 1 && 
            <div className="default">
            <span>Mặc định</span>
        </div>
        }
       

    </div>
    <div className="update-address">
        <span>Cập nhật</span>
    </div>


</div>
  )
}

export default InfoListAddress
