import React from "react";
import styles from "./ProductList.module.scss";
import { Link } from "react-router-dom";

function ProductList({ products }) {
    return (
        <div>
            ProductList
            <table>
                <thead>
                    {" "}
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {" "}
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.content}</td>
                                <td>
                                    <Link to={`products/update/${product.id}`}>
                                        <button>Update</button>
                                    </Link>
                                    ||
                                    <Link to={`products/delete/${product.id}`}>
                                        <button>Delete</button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
