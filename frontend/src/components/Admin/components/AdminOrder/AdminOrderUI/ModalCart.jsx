import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ModalCart = ({ showOrderDetail, setShowOrderDetail, data }) => {
    const toggle = () => {
        setShowOrderDetail(false)
    }
    const handleClickOrderDetail = () => {
        setShowOrderDetail(false)
    }

    const handleConfirm = () => {
        console.log('data:', data)
        
    }

    const handleCancel = () => {
        
    }
  return (
    <Modal
            open={showOrderDetail}
            onClose={toggle}
            classNames={{
                overlay: 'customOverlay',
                modal: 'custom-modal-detail-order',
            }}
        >

            <h2 className='title'>Thông tin đơn hàng </h2>
            <div className='summary-infor-order'>
                <ul>
                    <h5 className='data-in-modal'>Mã đơn hàng</h5>
                    <h5 className='data-in-modal '>Ngày đặt</h5>
                    <h5 className='data-in-modal'>Trạng Thái</h5>
                    <h5 className='data-in-modal'>Tổng giá</h5>
                    <h5 className='data-in-modal'>Phone</h5>
                </ul>
                <ul>
                    <h5 className='data-in-modal'>{data?.id}</h5>
                    <h5 className='data-in-modal'>{data?.createAt}</h5>
                    {
                        data.ordStatus === 'PENDING' &&
                        <h5 className="data-in-modal status pending">{data?.status}</h5>
                    }
                    {
                        data.ordStatus === 'DONE' &&
                        <h5 className="data-in-modal status done">{data?.status}</h5>
                    }
                    {
                        data.ordStatus === 'CANCELED' &&
                        <h5 className="data-in-modal status cancel">{data?.status}</h5>
                    }
                    <h5 className='data-in-modal'>{data.price?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></h5>
                    <h5 className='data-in-modal'>{data?.phoneNo}</h5>
                </ul>
                <ul>
                    <h5 className='data-in-modal'>Thông tin khách hàng</h5>
                    <h5 className='data-in-modal'>Địa chỉ nhận hàng</h5>
                    <h5 className='data-in-modal'>Phương thức thanh toán</h5>
                    <h5 className='data-in-modal'>Phí vận chuyển</h5>
                    <h5 className='data-in-modal'>Ghi chú</h5>
                </ul>
                <ul>
                    <h5 className='data-in-modal'>{data?.name}</h5>
                    <h5 className='data-in-modal'>{data?.address}</h5>
                    <h5 className='data-in-modal'>{data?.payment}</h5>
                    <h5 className='data-in-modal'>{data.shippingFee?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></h5>
                    <h5 className='data-in-modal'>{data?.note}</h5>
                </ul>
            </div>
            <div className='btn-group'>

                <button className="detail btn" onClick={handleClickOrderDetail}>
                    {/* <i class="fas fa-eye"> </i> */}
                    <span>Đóng</span>
                </button>
                <button className={data?.status === 'PENDING' ? "confirm btn" : " btn disable"} onClick={handleConfirm}>
                    {/* <i class="fas fa-check"></i> */}
                    <span>Xác nhận đơn</span>
                </button>
                <button className={data?.status === 'PENDING' ? "cancel btn" : "disable btn"} onClick={handleCancel}>
                    {/* <i class="fas fa-window-close"></i> */}
                    <span> Hủy đơn</span>
                </button>



            </div>
            <hr />
            {/* <div>
                <h2 className='title'>Chi tiết đơn hàng </h2>
                {data.transactionMapper.map(item => (
                    <div className='order-each-product'>
                        <div className="img"><img src={item.productImage} alt="" /></div>
                        <div className='product-content'>
                            <h5 className='data-in-modal'>Tên sản phẩm: {item.productName}</h5>
                            <h5 className='data-in-modal'>Trạng thái: {item.tranStatus}</h5>
                            <h5 className='data-in-modal'>Số lượng: {item.tranQuantity}</h5>
                            <h5 className='data-in-modal'>Đơn giá: {item.tranUnitPrice?.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></h5>
                        </div>
                    </div>

                ))}
            </div> */}
        </Modal >

  )
}

export default ModalCart
