import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import AddProductForm from "./components/AddProductForm/AddProductForm";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const apiUrl = "http://localhost:4000/products";

        const getProducts = async () => {
            try {
                let response = await axios.get(apiUrl);
                setProducts(response && response.data ? response.data : []);
            } catch (error) {
                alert(error.message);
            }
        };

        getProducts();
    }, []);
    return (
        <div className="App">
            <h1>Chơi với restful api</h1>
            <ProductList products={products} />
            <AddProductForm />
        </div>
    );
}

export default App;
