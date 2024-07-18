import axios from "axios";
import React, { useState } from "react";

function AddProductForm() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("");

    const apiProduct = "http://localhost:4000/products";

    const handleAddProduct = async () => {
        try {
            const res = await axios.post(apiProduct, {
                name: name,
                price: price,
                content: content,
                status: status,
            });
            console.log("Test create: ", res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <form>
                <label htmlFor="name">Name:</label>
                <br />
                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                <br />

                <label htmlFor="price">Price:</label>
                <br />
                <input type="text" id="price" name="price" onChange={(e) => setPrice(e.target.value)} />
                <br />

                <label htmlFor="content">Content:</label>
                <br />
                <input type="text" id="content" name="content" onChange={(e) => setContent(e.target.value)} />
                <br />

                <label htmlFor="status">Status:</label>
                <br />
                <input type="text" id="status" name="status" onChange={(e) => setStatus(e.target.value)} />
                <br />
                <br />
                <button type="submit" onClick={handleAddProduct}>
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddProductForm;
