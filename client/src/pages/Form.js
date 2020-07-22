import React from "react";
import { Grid } from "@material-ui/core";
import FormPlant from "../components/FormPlant"
import Image from 'material-ui-image'

function Form(props) {

    return (
        <>
            <Grid container spacing={12}>
                <Grid item xs={8}>
                    <FormPlant/>
                </Grid>
                <Grid item xs={4}>
                  <Image height="30" src="assets/cactus7.JPG"/>
                  <Image height="30" src="assets/cactus8.JPG"/>
                  <Image height="30" src="assets/cactus9.JPG"/>
                </Grid>
            </Grid>
        </>
    )

}

export default Form;