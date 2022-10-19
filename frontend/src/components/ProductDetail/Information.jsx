import React from 'react'
import { information_technical } from './data'
const Information = () => {
    
    return (
        <div className='product-information flex j-between bd-bottom'>
        <div className="information-product">
            <h3>Thông tin sản phẩm</h3>
            <p className='infor-product-detail'>
                Điện thoại iPhone 13 Pro Max 128 GB - siêu phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. Máy có thiết kế không mấy đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được nâng cấp lên 120 Hz mượt mà
            </p>
        </div>
        <div className="information-technical">
            <h3>Thông số kĩ thuật</h3>
            <table className='technical-detail'>
                {information_technical.map(val => (
                    <tr>
                        <th>{val.title}</th>
                        <td>{val.content}</td>
                    </tr>
                ))}
            </table>
        </div>
        </div>
    )
}

export default Information
