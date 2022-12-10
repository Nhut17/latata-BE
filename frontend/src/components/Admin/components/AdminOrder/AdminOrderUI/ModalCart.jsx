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

            <div className="bg-modal-cart">
                <h2 className='title'>Thông tin đơn hàng </h2>
                <div className='summary-infor-order'>
                    <ul>
                        <li className='data-in-modal'>Mã đơn hàng</li>
                        <li className='data-in-modal '>Ngày đặt</li>
                        <li className='data-in-modal'>Trạng Thái</li>
                        <li className='data-in-modal'>Tổng giá</li>
                        <li className='data-in-modal'>Phone</li>
                    </ul>
                    <ul>
                        <li className='data-in-modal'>{data?._id.slice(0,5)}</li>
                        <li className='data-in-modal'>{data?.createAt}</li>
                        {
                            data?.status === 'PENDING' &&
                            <li className="data-in-modal status pending">{data?.status}</li>
                        }
                        {
                            data?.status === 'DONE' &&
                            <li className="data-in-modal status done">{data?.status}</li>
                        }
                        {
                            data?.status === 'CANCELED' &&
                            <li className="data-in-modal status cancel">{data?.status}</li>
                        }
                        <li className='data-in-modal'>{data.totalPrice?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></li>
                        <li className='data-in-modal'>{data?.phoneNo}</li>
                    </ul>
                    <ul>
                        <li className='data-in-modal'>Thông tin khách hàng</li>
                        <li className='data-in-modal'>Địa chỉ nhận hàng</li>
                        <li className='data-in-modal'>Phương thức thanh toán</li>
                        <li className='data-in-modal'>Phí vận chuyển</li>
                        <li className='data-in-modal'>Ghi chú</li>
                    </ul>
                    <ul>
                        <li className='data-in-modal'>{data?.name}</li>
                        <li className='data-in-modal'>{data?.address}</li>
                        <li className='data-in-modal'>{data?.payment}</li>
                        <li className='data-in-modal'>{data.shippingFee?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></li>
                        <li className='data-in-modal'>{data?.note}</li>
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
                <div>
                    <h2 className='title'>Chi tiết đơn hàng </h2>
                    
                        <div className='order-each-product'>
                            <table>
                                <tr>
                                    <th style={{paddingLeft: '10px'}}>Sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Price</th>
                                </tr>
                                <tr>
                                    <td style={{width : '30%'}}>
                                        <div className="img">
                                            <img src="https://cdn.mediamart.vn/images/product/din-thoi-samsung-galaxy-a23-4g128g-a235f-xanh_2eb86b98.jpg" alt="" />
                                        </div>

                                    </td>
                                    <td>
                                        <p><b>Solid Color T-Shirt</b></p>
                                        <span>46.000đ x 1</span>
                                    </td>
                                    <td>46.000đ</td>
                                </tr>
                            </table>
                        </div>

                   
                </div>
            </div>
        </Modal >

  )
}

export default ModalCart
