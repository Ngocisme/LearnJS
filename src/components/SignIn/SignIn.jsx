import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "../SignIn/SignIn.module.scss";
import { Avatar, Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

function SignIn() {
    const [user, setUser] = useState("");
    const [error, setError] = useState("");
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

    const handleLogin = (e) => {
        e.preventDefault();
        try {
            setUser("user 1");
        } catch (error) {
            setError("error");
        }
    };
    return (
        <Box sx={stylesBox}>
            <Avatar sx={styleAvatar}>
                <AccountCircleIcon />
            </Avatar>
            <div className={styles.titleForm}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </div>
            <Box component="form">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField required fullWidth id="email" label="email" name="email" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField required fullWidth id="password" label="password" name="password" type="password" />
                    </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ marginTop: "15px" }} onClick={handleLogin}>
                    {" "}
                    Sign in
                </Button>
                {user && <Navigate to="/" replace={true} />}
                <Grid container justifyContent="flex-end">
                    <Link to="/signup">
                        <Typography>Don't have an account ? Sign In</Typography>
                    </Link>
                </Grid>
            </Box>
        </Box>
    );
}

export default SignIn;
