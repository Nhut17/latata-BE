// import ModalCommentProduct from './ModalCommentProduct'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import ModalCommentProduct from './ModalCommentProduct'

const EachTransaction = ({  evaluated }) => {

    const [openModalComment, setOpenModalComment] = useState(false)
    const handleComment = () => {
        setOpenModalComment(true)
    }
    // const totalPrice=orderDetail.tranUnitPrice * orderDetail.tranQuantity
    return (
        <>
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
                        {/* <span className='product-author'>{orderDetail.productAuthor}</span> */}
                        <button
                            onClick={handleComment}
                            // hidden={evaluated && evaluated === true ? false : true}
                            // className={evaluated && evaluated === true ? ' btn-review-product active' : 'btn-review-product'}>Đánh giá sản phẩm</button>
                            className='btn-review-product active'>Đánh giá sản phẩm</button>
                            
                    </div>
                </div>
                <ModalCommentProduct openModalComment={openModalComment} setOpenModalComment={setOpenModalComment} />
            </div >
        </>
    )
}
export default EachTransaction