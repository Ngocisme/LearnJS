import React from "react";
import styles from "./App.module.scss";
import SignUp from "./components/SignUp/SignUp";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Products from "./components/Products/Products";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="*" element={<NotFound />} />
                    {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/products">
                            <Route index element={<Products />} />
                            <Route path=":productId" element={<ProductDetail />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
