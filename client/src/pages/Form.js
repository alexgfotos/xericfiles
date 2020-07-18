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
                  <Image height="40" src="https://images.unsplash.com/photo-1554631221-f9603e6808be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                </Grid>
            </Grid>
        </>
    )

}

export default Form;