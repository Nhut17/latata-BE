import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../../sass/cart/checkoutCart.scss'
import { Link } from 'react-router-dom';
import ModalAddress from './ModalAddress';
import InfoListAddress from './InfoListAddress';
import { useDispatch } from 'react-redux';
import { getSelectedAddress } from '../../redux/address/addressSlice';
const ModalListAddress = ({ showAddress, setShowAddress, listAddress }) => {
    const [showAddressItem, setShowAddressItem] = useState(false)

    const dispatch = useDispatch()

    const handleClickAddress = () => {
        setShowAddress(false)
    }

    const handleClickAddressItem = () => {
        setShowAddressItem(true)
    }

    const addressDefault = listAddress?.filter(val => val?.address_default == 1 )
    const [selectedAddress, setSelectedAddress] = useState(addressDefault[0]?._id)

    const handleSubmit = () => {
        dispatch(getSelectedAddress(selectedAddress))
        console.log()
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
                        <InfoListAddress val={val}
                                         selected={selectedAddress}
                                        setSelectedAddress={setSelectedAddress} />
                    ))
                }
              
            </div>
            <div className="add-address">
               
                    <button type='submit' onClick={handleClickAddressItem}>+ Thêm địa chỉ</button>
                
              
            </div>


            <button style={{
                padding: '8px 15px',
                marginTop: 15,
                backgroundColor: '#e4e4e4',
                borderRadius: 8  
            }}
                onSubmit={handleSubmit}
            >XÁC NHẬN</button>

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
