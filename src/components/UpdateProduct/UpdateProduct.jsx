import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("");
    const params = useParams();
    const productId = params.productId;
    const navigate = useNavigate();

    const handleEditProduct = async () => {
        const apiUrl = `http://localhost:4000/products/${productId}`;

        try {
            const res = await axios.put(apiUrl, {
                name: name,
                price: price,
                content: content,
                status: status,
            });
            toast.success("Thay đổi thông tin thành công");
        } catch (error) {
            alert("Error: ", error.message);
        }
    };
    useEffect(() => {
        const apiUrl = `http://localhost:4000/products/${productId}`;

        const getProducts = async () => {
            try {
                let response = await axios.get(apiUrl);
                setName(response.data ? response.data.name : "");
                setPrice(response.data ? response.data.price : "");
                setContent(response.data ? response.data.content : "");
                setStatus(response.data ? response.data.status : "");
            } catch (error) {
                alert(error.message);
            }
        };
        getProducts();
    }, [productId]);
    return (
        <div>
            UpdateProduct
            <div>
                <form>
                    <h1>Id: {productId}</h1>
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <br />

                    <label htmlFor="price">Price:</label>
                    <br />
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <br />

                    <label htmlFor="content">Content:</label>
                    <br />
                    <input
                        type="text"
                        id="content"
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <br />

                    <label htmlFor="status">Status:</label>
                    <br />
                    <input
                        type="text"
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    />
                    <br />
                    <br />
                    <button type="button" onClick={handleEditProduct}>
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateProduct;
