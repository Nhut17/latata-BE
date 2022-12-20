import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../../sass/cart/checkoutCart.scss'
import { Link } from 'react-router-dom';
import ModalAddress from './ModalAddress';
const ModalListAddress = ({ showAddress, setShowAddress, listAddress }) => {
    const [showAddressItem, setShowAddressItem] = useState(false)

    const handleClickAddress = () => {
        setShowAddress(false)
    }

    const handleClickAddressItem = () => {
        setShowAddressItem(true)
    }

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
                        <Info
                    ))
                }
              
            </div>
            <div className="add-address">
               
                    <button type='submit' onClick={handleClickAddressItem}>+ Thêm địa chỉ</button>
                
              
            </div>
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
