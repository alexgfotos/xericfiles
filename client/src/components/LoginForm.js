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
            <Container item xs={6} >
                <Grid item xs={3} spacing={1}>
                    <Image height="10"  src="https://cvws.icloud-content.com/S/Aesau53bU6Gukb53Dvc46pvWjDYz/IMG_1772.JPG?o=Aq5po2ZHU8K2EB3dgG-7xP4vBOXOQ9gxWwKcS-UUMQ0D&v=1&z=https%3A%2F%2Fp34-content.icloud.com%3A443&x=1&a=CAogKfo00pav9txS3PHD26daZ5AOVflZlRVZ3A7efFLtDCYSYxCClr-Zti4Ygq3SnrYuIgEAUgTWjDYzaiRsY77V1XwFDcgV6qHVU_DS1yiiydEFFT1l2TFOBUdrgY88tx9yJEi0E77GfrfZ0rDYVB4SC6sjsSA9KLZFDfo2QwAyl1fhcC-F1w&e=1595107743&r=872b1861-607b-47f7-9e9f-b67c36ab9e2c-2&s=hcnoKVEmgTjjQvAq140hOe67X3U" />
                    <Image height="10" src="https://cvws.icloud-content.com/S/ATxBoAeqdva9dI5MNGj1pTcT-sRr/IMG_1742.JPG?o=ApbzHbtU6_XB4FNRHszryg0Gsuwu68UEgx0LI1nhhRZ_&v=1&z=https%3A%2F%2Fp34-content.icloud.com%3A443&x=1&a=CAoga9z6U2EHM1Ht6FgoGvVubVU07i6tA-hJ1WjSJgdnSFgSYxDN_7qZti4YzZbOnrYuIgEAUgQT-sRraiQte2EnpXoj6GZsw0-Yvd7Gh-5EmOlKGCVnWkr_syFlCSs2U19yJDRhtvy6T5m-X8g0agnD5iLPAVVWu2CjX3WT2wlHDEFre81fqg&e=1595107674&r=999cc41d-d82c-44cd-8959-33b5aa8815dc-2&s=VENAsIpLjfoOzAacQXLpGYbPyoQ" />
                    <Image height="10" src="https://cvws.icloud-content.com/S/ASPh_dEmj3H4fr2XI-boL3SdyyfE/IMG_1796.JPG?o=AhWzX8fJqH7ybEHCGxqQ06EcK0tjFbDuK_74D32g-Z1L&v=1&z=https%3A%2F%2Fp34-content.icloud.com%3A443&x=1&a=CAogQ2t_7muwMDy3-SuG5Lbwf-ichwBT6w4EfoxjrkL5TjISYxCOt8SZti4Yjs7XnrYuIgEAUgSdyyfEaiQOIlC0ny34fADpsSjz69v-lCPhBZ-yN3aQPdqjpQVro4iMYl9yJDiWJLhtTIsTRaqRA4wNYpu53WXgZhfrwT0gOf_4-SMtLFRuEA&e=1595107829&r=af3edbbe-80a3-4bf2-b828-7c6f7c6e3279-1&s=J6U1BI9Sn9UW86nSyQL4RVM77Oo" />
                </Grid>
            </Container>

        </>
    )
}

export default LoginForm;