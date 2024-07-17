import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const user = {
    username: "eva",
};

export const UserContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserContext.Provider value={user}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        ,
    </UserContext.Provider>,
);
