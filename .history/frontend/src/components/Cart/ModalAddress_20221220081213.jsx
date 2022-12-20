import React from 'react'
import useLocationForm from "./useLocationForm";
import Select from "react-select";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../../sass/cart/checkoutCart.scss'
import { useForm } from 'react-hook-form';
const ModalAddress = ({ showAddressItem, setShowAddressItem }) => {
    const handleClickAddressItem = () => {
        setShowAddressItem(false)
    }

    const { handleSubmit, register } = useForm()

    const {
        state,
        onCitySelect,
        onDistrictSelect,
        onWardSelect,
        onSubmit
      } = useLocationForm(false);
    
      const {
        cityOptions,
        districtOptions,
        wardOptions,
        selectedCity,
        selectedDistrict,
        selectedWard
      } = state;

    // console.log(selectedCity)
    
      const handleOnSubmit = (e) =>{
            e.preventDefault()
            console.log(selectedCity.label)
            console.log(selectedDistrict.label)
            console.log(selectedWard.label)
            console.log(e.target.address.value)
      }

      return (
        <Modal
            open={showAddressItem}
            onClose={handleClickAddressItem}
            classNames={{
                overlay: 'customOverlay',
                modal: 'custom-modal-detail-order',
            }}
        >

            <div className="form-address">
                <form
                    onSubmit={handleOnSubmit}
                    
                    >
                    <div className="select-group">

                    <input name='name' type="text" placeholder='Nhập họ tên' />
                    <input 
                            name='address' type="text" placeholder='Nhập số điện thoại' />

                        <Select
                        name="cityId"
                        key={`cityId_${selectedCity?.value}`}
                        isDisabled={cityOptions.length === 0}
                        options={cityOptions}
                        onChange={(option) => onCitySelect(option)}
                        placeholder="Tỉnh/Thành"
                        defaultValue={selectedCity}
                        
                        />

                        <br />

                        <Select
                        name="districtId"
                        key={`districtId_${selectedDistrict?.value}`}
                        isDisabled={districtOptions.length === 0}
                        options={districtOptions}
                        onChange={(option) => onDistrictSelect(option)}
                        placeholder="Quận/Huyện"
                        defaultValue={selectedDistrict}
                        />
                        <br />
                        <Select
                        name="wardId"
                        key={`wardId_${selectedWard?.value}`}
                        isDisabled={wardOptions.length === 0}
                        options={wardOptions}
                        placeholder="Phường/Xã"
                        onChange={(option) => onWardSelect(option)}
                        defaultValue={selectedWard}
                        />

                        <input name='address' type="text" placeholder='Nhập địa chỉ cụ thể' />
                    </div>

                    <button
                        type="submit"
                        
                    >
                        Xác nhận
                    </button>
                    </form>
            </div>
        </Modal >
      )
}

export default ModalAddress
