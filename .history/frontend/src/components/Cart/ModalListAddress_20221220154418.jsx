import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../../sass/cart/checkoutCart.scss'
import { Link } from 'react-router-dom';
import ModalAddress from './ModalAddress';
import InfoListAddress from './InfoListAddress';
const ModalListAddress = ({ showAddress, setShowAddress, listAddress }) => {
    const [showAddressItem, setShowAddressItem] = useState(false)

    const handleClickAddress = () => {
        setShowAddress(false)
    }

    const handleClickAddressItem = () => {
        setShowAddressItem(true)
    }

    const addressDefault = listAddress?.filter(val => val?.address_default == 1 )
    const [selectedAddress, setSelectedAddress] = useState(addressDefault[0]?._id)

    console.log(selectedAddress)

  return (
    
    <>
    <Modal
            open={showAddress}
            onClose={handleClickAddress}
            classNames={{
                overlay: 'customOverlay',
                modal: 'custom-modal-detail-order',
            }}
        >

            <div className='list-address'>
                <h4>Địa chỉ của tôi </h4>
                {
                    listAddress && 
                    listAddress.map(val => (
                        <InfoListAddress val={val}
                                         selected={selectedAddress}
                                        setSelectedAddress={setSelectedAddress} />
                    ))
                }
              
            </div>
            <div className="add-address">
               
                    <button type='submit' onClick={handleClickAddressItem}>+ Thêm địa chỉ</button>
                
              
            </div>


            <button>XÁC NHẬN</button>

    </Modal >

        {

        showAddressItem && 
        <ModalAddress  showAddressItem={showAddressItem} 
        setShowAddressItem={setShowAddressItem} 
        />

        }
    </>
  )
}

export default ModalListAddress
