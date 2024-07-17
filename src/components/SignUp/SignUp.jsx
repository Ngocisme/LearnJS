import { Avatar, Box, Button, Grid, TextField, Typography, Link } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "../SignUp/SignUp.module.scss";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
    const isSignUp = true;
    const navigate = useNavigate();
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

    const handleSignUp = () => {
        if (isSignUp) {
            navigate("/", { replace: true });
        }
        return null;
    };
    return (
        <>
            <Box sx={stylesBox}>
                <Avatar sx={styleAvatar}>
                    <AccountCircleIcon />
                </Avatar>
                <div className={styles.titleForm}>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                </div>
                <Box component="form">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="firstName" label="first name" name="firstName" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="lastName" label="last name" name="lastName" />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField required fullWidth id="email" label="email" name="email" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="password"
                                label="password"
                                name="password"
                                type="password"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="rePassword"
                                label="rePassword"
                                name="rePassword"
                                type="password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ marginTop: "15px" }}
                        onClick={handleSignUp}
                    >
                        {" "}
                        Sign UP
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Link to="/signin">
                            <Typography>Already have account ? Sign In</Typography>
                        </Link>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
