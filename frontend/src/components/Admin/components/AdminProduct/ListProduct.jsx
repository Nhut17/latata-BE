import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { editCurrentPage, paginationProduct } from '../../../../actions/ProductAction';
import Product from './Product';
import { Pagination } from 'antd';

function ListProduct(props) {
    // const dispatch = useDispatch()
    // const {listProducts} = props;
    // const currentPage = useSelector(state => state.allProduct.currentPage)
    // const {pages} = useSelector(state => state.allProduct.product)

    // const HandleChangePage = async (number) => {
    //     await dispatch(paginationProduct(number))
    //     dispatch(editCurrentPage(number))
    // }

    return (
       <div className="admin-product-list">
           <table>
                <tr>
                    <th style={{width : '5%'}}>STT</th>
                    <th style={{width : '15%'}}>Hình ảnh</th>
                    <th style={{width : '10%'}}>Tên</th>
                    <th style={{width : '10%'}}>Giá</th>
                    <th>Danh mục</th>
                    <th>Loại</th>
                    <th>Số lượng</th>
                    <th>Giảm giá</th>
                    <th>Hàng tồn</th>

                </tr>
                {
                    // listProducts ? listProducts.map((item, index) => (<Product product={item} key={item._id} update={item._id} number={index}></Product>)) : ''
                    <Product/>
                }
            </table>
            
            {/* <div className="pagination">
                <Pagination defaultCurrent={2} current={1} total={10}/>
            </div> */}

       </div>
    );
}

export default ListProduct;