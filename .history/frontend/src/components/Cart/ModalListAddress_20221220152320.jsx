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
                    list
                }
                <div className="address-item flex">
                 
                        <div className="input-radio">
                            <input type="radio" name="" id="" />

                        </div>
                        

                        <div className="detail">
                            <p><span>Nguyễn Ngọc Bích Trâm</span> <span className='space'>|</span> <span className='gray'>0786421768</span> </p>
                            
                            <span className='gray'>Số 10 đường số 3 hẻm 613 Lê Văn Việt
                                    Phường Tân Phú, Quận 9, TP. Hồ Chí Minh</span>

                            <div className="default">
                                <span>Mặc định</span>
                            </div>

                            
                       
                        </div>
                        <div className="update-address">
                            <span>Cập nhật</span>
                        </div>

                    
                </div>
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
