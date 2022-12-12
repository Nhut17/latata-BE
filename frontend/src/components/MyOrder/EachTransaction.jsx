// import ModalCommentProduct from './ModalCommentProduct'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const EachTransaction = ({ key, orderDetail, evaluated }) => {

    const [openModalComment, setOpenModalComment] = useState(false)
    const handleComment = () => {
        setOpenModalComment(true)
    }
    const totalPrice=orderDetail.tranUnitPrice * orderDetail.tranQuantity
    return (
        <div className='each-transaction' key={key}>
        <Link to={`/product-detail/${orderDetail._id}`} reloadDocument>
            <div className="img" style={{ backgroundImage: `url(${orderDetail.images.url})` }}>
                <span>{orderDetail.stock}</span>
            </div>
        </Link>
            <div className="content">
                <div className="up">
                    <span className='product-name'>{orderDetail.name}</span>
                    <span className='product-price'>Giá: {orderDetail?.price?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span>
                </div>
                <div className='down'>
                    {/* <span className='product-author'>{orderDetail.productAuthor}</span> */}
                    <button
                        onClick={handleComment}
                        hidden={evaluated && evaluated === true ? false : true}
                        className={evaluated && evaluated === true ? ' btn-review-product active' : 'btn-review-product'}>Đánh giá sản phẩm</button>
                </div>
            </div>
            {/* <ModalCommentProduct openModalComment={openModalComment} setOpenModalComment={setOpenModalComment} data={orderDetail}/> */}
        </div >
    )
}
export default EachTransaction