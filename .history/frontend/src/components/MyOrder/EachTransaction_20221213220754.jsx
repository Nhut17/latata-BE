// import ModalCommentProduct from './ModalCommentProduct'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import ModalCommentProduct from './ModalCommentProduct'

const EachTransaction = ({  evaluated, orders }) => {

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
                    <img src={orders?.images[0]?.url} alt="" />
                </div>
            </Link>
                <div className="content">
                    <div className="up">

                        <div className="name-product">
                            <h5 className='item'>{orders.name}</h5>
                        
                            <span className='quantity'>x{orders.quantity}</span>
                        </div>
                        
                        <div className="price-product">
                            <span className='product-price'>Giá: {orders.price.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span>
                        </div>
                    </div>
                    <div className='down'>
     
                        <button
                            onClick={handleComment}
                            // hidden={evaluated && evaluated === true ? false : true}
                            // className={evaluated && evaluated === true ? ' btn-review-product active' : 'btn-review-product'}>Đánh giá sản phẩm</button>
                            className='btn-review-product active'>Đánh giá sản phẩm</button>
                            
                    </div>
                </div>
                <ModalCommentProduct openModalComment={openModalComment} setOpenModalComment={setOpenModalComment} />
>>>>>>> 4695515f81a49773bf7504330323b7bf7094c3a7
            </div >
        </>
    )
}
export default EachTransaction