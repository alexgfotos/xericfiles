import React from "react";
import { Grid } from "@material-ui/core";
import FormPlant from "../components/FormPlant"


function Form() {

    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <FormPlant />
                </Grid>
            </Grid>
        </>
    )

}

export default Form;