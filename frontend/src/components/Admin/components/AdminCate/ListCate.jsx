import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { editCurrentPage, paginationProduct } from '../../../../actions/ProductAction';
// import Product from './Product';
import { Pagination } from 'antd';
import Cate from './Cate'
function ListCate({ listCate }) {

    return (
        <div className="admin-cate-list">
            <table>
                <tr>
                    <th style={{ width: '5%' }}>ID</th>
                    <th style={{ width: '40%' }}>Cate cha</th>
                    <th style={{ width: '50%' }}>Tên</th>
                </tr>
                {
                    listCate.map((data, index) => (
                        <Cate data={data} stt={index} />
                    ))
                }
            </table>


        </div>
    );
}

export default ListCate;