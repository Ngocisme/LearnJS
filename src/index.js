import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct/DeleteProduct";

const user = {
    username: "eva",
};

export const UserContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserContext.Provider value={user}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/products/update/:productId" element={<UpdateProduct />} />
                <Route path="/products/delete/:productId" element={<DeleteProduct />} />
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>,
);
