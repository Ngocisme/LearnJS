import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import queryString from "query-string";

function Products() {
    function createData(id, title, price, desc, category, img, status) {
        return { id, title, price, desc, category, img, status };
    }
    const rows = [
        createData(
            4,
            "Mens Casual Slim Fit",
            15.99,
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "men's clothing",
            "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "all",
        ),
        createData(
            5,
            "Mens Casual Premium Slim Fit T-Shirts",
            15.99,
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "men's clothing",
            "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "all",
        ),
        createData(
            6,
            "Mens Cotton Jacket",
            15.99,
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "men's clothing",
            "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "active",
        ),
        createData(
            7,
            "Mens Casual",
            15.99,
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "men's clothing",
            "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "new",
        ),
        createData(
            8,
            "Mens Casual",
            15.99,
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "men's clothing",
            "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "inactive",
        ),
    ];

    let [searchParams, setSearchParams] = useSearchParams();
    let location = useLocation();
    let [filteredStatus, setfilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || "all";
    });

    const handleShowAll = () => {
        setfilteredStatus("all");
        setSearchParams({ status: "all" });
    };

    const handleShowActive = () => {
        setfilteredStatus("active");
        setSearchParams({ status: "active" });
    };

    const handleShowInActive = () => {
        setfilteredStatus("inactive");
        setSearchParams({ status: "in active" });
    };

    const handleShowNew = () => {
        setfilteredStatus("new");
        setSearchParams({ status: "new" });
    };

    const renderProductList = rows.filter((row) => filteredStatus === "all" || filteredStatus === row.status);
    return (
        <>
            <h1>Product list</h1>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button onClick={handleShowAll} sx={{ my: 2, color: "white", display: "block" }}>
                    <NavLink>Show All</NavLink>
                </Button>
                <Button onClick={handleShowActive} sx={{ my: 2, color: "white", display: "block" }}>
                    <NavLink>Show Active</NavLink>
                </Button>
                <Button onClick={handleShowInActive} sx={{ my: 2, color: "white", display: "block" }}>
                    <NavLink>Show InActive</NavLink>
                </Button>
                <Button onClick={handleShowNew} sx={{ my: 2, color: "white", display: "block" }}>
                    <NavLink>Show New</NavLink>
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Id</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">price</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">category</TableCell>
                            <TableCell align="right">image</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Method</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderProductList.map((row) => (
                            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.desc}</TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right">{row.img}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">
                                    <Link to={`/products/${row.id}`}>View</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Products;
