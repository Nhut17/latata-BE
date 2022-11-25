import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { editCurrentPage, paginationProduct } from '../../../../actions/ProductAction';
import Product from './Product';


function ListProduct({listProduct}) {
    

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
            
          

       </div>
    )
}

export default ListProduct;