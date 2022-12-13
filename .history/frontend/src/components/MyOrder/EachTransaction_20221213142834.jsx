// import ModalCommentProduct from './ModalCommentProduct'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const EachTransaction = ({  evaluated }) => {

    const [openModalComment, setOpenModalComment] = useState(false)
    const handleComment = () => {
        setOpenModalComment(true)
    }
    // const totalPrice=orderDetail.tranUnitPrice * orderDetail.tranQuantity
    return (
        <>
            <p className='summary-status-pending'><i class="fa-solid fa-circle icon"></i> PENDING</p>
            <div className='each-transaction'>
            <Link reloadDocument>
                <div className="img">
                    <img src="https://shopdunk.com/wp-content/uploads/2022/08/iphone-13-red-650x650-1.png" alt="" />
                </div>
            </Link>
                <div className="content">
                    <div className="up">

                        <div className="name-product">
                            <h5 className='item'>Iphone 13</h5>
                        
                            <span className='quantity'>x1</span>
                        </div>
                        
                        <div className="price-product">
                            <span className='product-price'>Giá: {'1000000'.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span>
                        </div>
                    </div>
                    <div className='down'>
     
                        <button
                            onClick={handleComment}
                            hidden={evaluated && evaluated === true ? false : true}
                            className={evaluated && evaluated === true ? ' btn-review-product active' : 'btn-review-product'}>Đánh giá sản phẩm</button>
                    </div>
                </div>
 
            </div >
        </>
    )
}
export default EachTransaction