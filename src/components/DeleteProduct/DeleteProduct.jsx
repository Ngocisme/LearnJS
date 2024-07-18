import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteProduct() {
    const params = useParams();
    const productId = params.productId;

    const apiUrl = `http://localhost:4000/products/${productId}`;
    try {
        const res = axios.delete(apiUrl);
    } catch (error) {
        alert("Error: ", error.message);
    }
    return (
        <div>
            <h1>Đã xoá thành công sản phẩm {productId}</h1>
        </div>
    );
}

export default DeleteProduct;
