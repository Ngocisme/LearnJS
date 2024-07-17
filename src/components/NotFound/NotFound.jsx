import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <h1>404 not found</h1>
            <Link to="/">Back to home</Link>
        </>
    );
}

export default NotFound;
