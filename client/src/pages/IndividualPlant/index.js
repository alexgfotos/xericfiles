import React, { useEffect, useState } from "react";
// import API from "../../utils/API";
// import UserContext from "../../utils/plantContext";
import PlantCard from "../../components/PlantCard"
import { Grid, Button } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



function IndividualPlant() {


    return (
        <>
            <Grid container alignItems="center" justify="center" direction="row" spacing={5}>
                <Grid container item sm={4} justify="flex-end" >
                    <Button variant="contained" color="primary">
                        <ArrowBackIosIcon/>
                    </Button>
                </Grid>
                <Grid container item sm={4} justify="center">
                    <PlantCard />
                </Grid>
                <Grid container item sm={4} justify="flex-start" >
                    <Button variant="contained" color="primary">
                        <ArrowForwardIosIcon/>
                    </Button>
                </Grid>
            </Grid>
        </>
    )

}
export default IndividualPlant;