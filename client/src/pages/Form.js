import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import FormPlant from "../components/FormPlant"


function Form() {
    return (

        <>
            <Grid container alignItems="center" justify="center" direction="row" spacing={5}>
                <FormPlant />
            </Grid>
        </>
    )

}

export default Form