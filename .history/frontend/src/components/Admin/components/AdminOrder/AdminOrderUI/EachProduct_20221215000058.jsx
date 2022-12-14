import React from 'react'

const EachProduct = ({data}) => {
  return (
    <div className='order-each-product'>
    <table>
        <tr>
            <th style={{paddingLeft: '10px'}}>Sản phẩm</th>
            <th>{data.name}</th>
            <th>{data.price}</th>
        </tr>
        <tr>
            <td style={{width : '30%'}}>
                <div className="img">
                    <img src={} alt="" />
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
