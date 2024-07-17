import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { productId } = useParams();
    return (
        <>
            <h1>Product Detail Page</h1>
            <p>Detail of product: {productId}</p>
        </>
    );
}
export default ProductDetail;
