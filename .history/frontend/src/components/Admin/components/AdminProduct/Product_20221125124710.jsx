import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";


function Product({data,stt}) {
  // const { product, number } = props;
  // const dispatch = useDispatch();
  // const currentPage = useSelector((state) => state.allProduct.currentPage);

  // const handleDeleteProduct = async (product) => {
  //   await dispatch(DeleteProduct(product._id));
  //   dispatch(paginationProduct(currentPage));
  // };

  // const dispatch = useDispatch()

  return (
    <tr>
      <td>{stt + 1}</td>
      <td>
        <div className="image">
          <img src={data?.images}></img>
        </div>
      </td>
      <td>{data?.name}</td>
      <td>{data?.price}</td>
      <td>{data?.name}</td>
      <td>{data?.price}</td>
      <td>{data?.price}</td>
      <td>{data?.price}</td>
      <td>{data?.price}</td>

      {/* <td
        className="delete-product"
       
      >
        <DeleteOutlined />
      </td>
      <td className="update-product">
        <Link to={`/admin/product/update/${'product._id'}`}>
          <EditOutlined></EditOutlined>
        </Link>
      </td>
      <td className="review-product">
        <Link to={`/admin/product/reviewProduct/${'product._id'}`} >
          <FormOutlined></FormOutlined>
        </Link>
      </td> */}
    </tr>
  );
}

export default Product;
