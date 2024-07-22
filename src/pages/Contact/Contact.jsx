import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

function Contact() {
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    const schema = yup
        .object({
            fname: yup.string().required("first name is required"),
            lname: yup.string().required("last name is required"),
            email: yup.string().email().required("email is required"),
            phone: yup
                .string()
                .typeError("phone must a specify a number")
                .matches(phoneRegex, "you must specify a valid phone number")
                .required("phone is required"),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data) => {
        const apiUrl = "http://localhost:4000/contacts";
        try {
            const res = await axios.post(apiUrl, data);
            if (res?.status === 201) {
                reset();
            } else {
                console.log("Error!!!!! ");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <Typography gutterBottom variant="h3" align="center">
                Contact Form
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="First Name"
                                    placeholder="Enter first name"
                                    variant="outlined"
                                    fullWidth
                                    {...register("fname")}
                                />
                                <Typography sx={{ color: "#ef5350" }}>{errors?.fname?.message}</Typography>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Last Name"
                                    placeholder="Enter last name"
                                    variant="outlined"
                                    fullWidth
                                    {...register("lname")}
                                />
                                <Typography sx={{ color: "#ef5350" }}>{errors?.lname?.message}</Typography>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Email"
                                    placeholder="Enter email"
                                    variant="outlined"
                                    fullWidth
                                    type="email"
                                    {...register("email")}
                                />
                                <Typography sx={{ color: "#ef5350" }}>{errors?.email?.message}</Typography>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Phone number"
                                    placeholder="Enter your phone"
                                    variant="outlined"
                                    fullWidth
                                    {...register("phone")}
                                />
                                <Typography sx={{ color: "#ef5350" }}>{errors?.phone?.message}</Typography>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="Description"
                                    placeholder="Enter Description"
                                    variant="outlined"
                                    fullWidth
                                    {...register("description")}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
}

export default Contact;
