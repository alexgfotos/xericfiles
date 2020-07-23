import React from "react";
import { Container, Grid, GridListTile, Button, TextField, Paper, Typography } from '@material-ui/core';
import Image from 'material-ui-image'

function LoginForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <>
            <Grid item xs={12}>
                <Paper>
                    <Container item xs={12}>
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" gutterBottom>
                                        Login
                                </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Email"
                                        value={formObject.email}
                                        name="email"
                                        onChange={handleInputChange}
                                        as="input"
                                        type="email"
                                        placeholder="Enter your Email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Password"
                                        value={formObject.password}
                                        name="password"
                                        onChange={handleInputChange}
                                        as="input"
                                        type="password"
                                        placeholder="Enter your password"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
                                        Login
                                </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Container>
                </Paper>
            </Grid>
            <Container item xs={6} className="loginImages">

                <Grid item xs={6}>
                   
                    <Image style={{ width: "100%" }} src="assets/cactus4.JPG" />
                    <Image width={20} src="assets/cactus5.JPG" />
                    <Image width={20} src="assets/cactus6.JPG" />
                </Grid>
            </Container>

        </>
    )
}

export default LoginForm;