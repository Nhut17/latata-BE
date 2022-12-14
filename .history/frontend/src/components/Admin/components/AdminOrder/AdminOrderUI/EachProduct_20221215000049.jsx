import React from 'react'

const EachProduct = ({data}) => {
  return (
    <div className='order-each-product'>
    <table>
        <tr>
            <th style={{paddingLeft: '10px'}}>Sản phẩm</th>
            <th>{data.name}</th>
            <th>{}</th>
        </tr>
        <tr>
            <td style={{width : '30%'}}>
                <div className="img">
                    <img src="https://cdn.mediamart.vn/images/product/din-thoi-samsung-galaxy-a23-4g128g-a235f-xanh_2eb86b98.jpg" alt="" />
                </div>

            </td>
            <td>
                <p><b>Iphone 13</b></p>
                <span>46.000đ x 1</span>
            </td>
            <td>46.000đ</td>
        </tr>
    </table>
</div>
  )
}

export default EachProduct
