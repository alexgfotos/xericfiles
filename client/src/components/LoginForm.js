import React from "react";
import { Container, Grid, Button, TextField, Paper, Typography } from '@material-ui/core';
import Image from 'material-ui-image'

function LoginForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <>
            <Grid item xs={6}>
                <Paper>
                    <Container item xs={6}>
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={3}>
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
                                    <Button variant="contained" color="primary-light" type="submit" onClick={handleFormSubmit}>
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
                    <Image height="10"  src="assets/cactus4.JPG" />
                    <Image height="10" src="assets/cactus5.JPG" />
                    <Image height="10" src="assets/cactus6.JPG" />
                </Grid>
            </Container>

        </>
    )
}

export default LoginForm;