import React, { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
    const initProducts = [
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description:
                "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            status: "active",
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 22.3,
            description:
                "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            status: "active",
        },
        {
            id: 3,
            title: "Mens Cotton Jacket",
            price: 55.99,
            description:
                "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            status: "new",
        },
        {
            id: 4,
            title: "Mens Casual Slim Fit",
            price: 15.99,
            description:
                "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            status: "inactive",
        },
        {
            id: 5,
            title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            price: 695,
            description:
                "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            status: "new",
        },
        {
            id: 6,
            title: "Solid Gold Petite Micropave ",
            price: 168,
            description:
                "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            status: "new",
        },
    ];
    const location = useLocation();
    const [products, setProducts] = useState(initProducts);
    const [filteredStatus, setFilteredStatus] = useState("all");
    const removeProduct = (id) => {
        console.log("test id: ", id);
        let newProducts = [...products];
        console.log(newProducts);
        newProducts = newProducts.filter((product) => product.id !== id);
        setProducts(newProducts);
    };

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || "all");
    }, [location.search]);

    const renderProducts = products.filter((product) => filteredStatus === "all" || filteredStatus === product.status);
    return (
        <div className="App">
            <Header />
            <Products products={products} removeProduct={removeProduct} />
        </div>
    );
}

export default App;
