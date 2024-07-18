import React, { useState } from "react";
import { Avatar, Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function AddProduct({ addNewProduct }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const stylesBox = {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    const styleAvatar = {
        m: 1,
        bgcolor: "secondary.main",
    };
    const handleAddProduct = () => {
        addNewProduct({
            id: Math.floor(Math.random() * 100),
            name: name,
            price: price,
            description: description,
            status: status,
        });
        setName("");
        setPrice("");
        setDescription("");
        setStatus("");
    };
    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangePrice = (e) => {
        setPrice(e.target.value);
    };
    const handleChangeDesc = (e) => {
        setDescription(e.target.value);
    };
    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
    };
    console.log("render addproduct componente");
    return (
        <div>
            AddProduc
            <Box sx={stylesBox}>
                <Avatar sx={styleAvatar}>
                    <AccountCircleIcon />
                </Avatar>
                <div>
                    <Typography component="h1" variant="h5">
                        add product
                    </Typography>
                </div>
                <Box component="form">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="name"
                                label="name"
                                name="name"
                                onChange={(e) => handleChangeName(e)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="price"
                                label="price"
                                name="price"
                                onChange={(e) => handleChangePrice(e)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="description"
                                label="description"
                                name="description"
                                onChange={(e) => handleChangeDesc(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="status"
                                label="status"
                                name="status"
                                onChange={(e) => handleChangeStatus(e)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="button"
                        onClick={() => handleAddProduct()}
                        fullWidth
                        variant="contained"
                        sx={{ marginTop: "15px" }}
                    >
                        {" "}
                        Add
                    </Button>

                    <Grid container justifyContent="flex-end">
                        <Link to="/signup">
                            <Typography>Don't have an account ? Sign In</Typography>
                        </Link>
                    </Grid>
                </Box>
            </Box>
        </div>
    );
}

export default React.memo(AddProduct);
