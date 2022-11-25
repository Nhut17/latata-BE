import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { editCurrentPage, paginationProduct } from '../../../../actions/ProductAction';
import Product from './Product';


function ListProduct({listProduct}) {
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
                    <th>STT</th>
                    <th>Hình ảnh</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Danh mục</th>
                    <th>Loại</th>
                    <th>Số lượng</th>
                    <th>Giảm giá</th>
                    <th>Hàng tồn</th>

                </tr>
                {
                    listProduct &&
                    listProduct.map((data, index) => (
                        <Product data={data} stt={index} />
                    ))
                }
            </table>
            
            {/* <div className="pagination">
                <Pagination defaultCurrent={2} current={1} total={10}/>
            </div> */}

       </div>
    )
}

export default ListProduct;