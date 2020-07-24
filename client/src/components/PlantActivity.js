import React, { useEffect, useState } from "react";
import { Container, Grid, Button, TextField, Paper, Typography, TextareaAutosize } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
import MomentUtils from "@date-io/moment"
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import API from '..//utils/API';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";


function Activity(props) {
    //states used to define our plant
    const [genusOptions, setGenusOptions] = useState([]);
    const [selectedGenus, setSelectedGenus] = useState();
    const [selectedSpecies, setSelectedSpecies] = useState();
    const [speciesOptions, setSpeciesOptions] = useState([]);
    const [selectedDate, setSelectedDate] = React.useState(new Date);
    const initialFormState = { name: "", width: "", price: "" };
    const [formObject, setFormObject] = useState(initialFormState)
    const [image, setImage] = useState("");
    const [plantId, setPlantId] = useState("")

    function clearState(){
        setGenusOptions([])
        setSelectedGenus([])
        setSelectedSpecies([])
        setSpeciesOptions([])
        setSelectedDate([])
        setFormObject(initialFormState)
        setImage("")
    }


    useEffect(() => {
        // on site load, get all genera using the api call/route
        async function getGenera() {

            const gen = await axios.get("/api/genus")
            console.log(gen);

            setGenusOptions(gen.data);
        }
        getGenera();
    }, []) //this is staying to load on an empty state, which is on the initial page load

    useEffect(() => {

        async function getSpecies() {
            // once genera are loaded, get species by genera ID using api call
            const spec = await axios.get(`/api/species?GenusId=${selectedGenus}`)
            console.log(spec);

            setSpeciesOptions(spec.data);

        }
        getSpecies()
    }, [selectedGenus]) //this tells useEffect to load once the state "selectedGenus" exists


    //when submit is hit, create plant in db by sending it an object created from the states in the form.
    const handlePlantSubmit = (event) => {
        console.log("plant submitted")
        event.preventDefault();
        API.Plant.update(props.location.state.plant, {
            ...formObject,
            GenusId: selectedGenus,
            SpeciesId: selectedSpecies,
            date: selectedDate
        }).then(res => {
            console.log(res)
        }).catch(err => {
        })

        API.Activity.create({
           water:formObject.watering,
           fertilizer:formObject.fertilized,
            status:formObject.plantStatus,
            nickname:formObject.nickname,
           PlantId: props.location.state.plant
        }).then(res => {
            console.log(res)
        }).catch(err => {
        })
        setTimeout(function (){
            window.location.href = "/home"
          }, 2000)
    }



    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    return (
        <>

            <Container >
                <form >
                    <Paper >
                        <Grid container spacing={2} direction="column" justify="center" alignItems="center" maxWidth="200">
                            <Grid item xs={6} >

                                <Typography variant="h4" gutterBottom>
                                    Update Plant
                                </Typography>

                            </Grid>

                            {/* <Grid item xs={4}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">What's the status of the plant?</FormLabel>
                                    <RadioGroup aria-label="plantStatus"
                                                name="plantStatus"
                                                onChange={handleInputChange}>
                                        <FormControlLabel value="alive" control={<Radio />} label="Alive" />
                                        <FormControlLabel value="dead" control={<Radio />} label="Dead(send to graveyard...)" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid> */}

                            <Grid item xs={6}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Is the plant watered?</FormLabel>
                                    <RadioGroup aria-label="watering"
                                                name="watering"
                                                onChange={handleInputChange}>
                                        <FormControlLabel value="lightly watered" control={<Radio />} label="Lightly Watered" />
                                        <FormControlLabel value="deeply watered" control={<Radio />} label="Deeply Watered" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Is the plant fertilized?</FormLabel>
                                    <RadioGroup aria-label="fertilized"
                                                name="fertilized"
                                                onChange={handleInputChange}>
                                        <FormControlLabel value="Fertilized" control={<Radio />} label="Fertilized" />
                                        <FormControlLabel value="Not Fertilized" control={<Radio />} label="Not Fertilized" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>


                            <Grid item xs={6}>
                                <TextField
                                    
                                    id="standard-"
                                    label="New Nickname"
                                    placeholder="New Nickname"
                                    name="nickname"
                                    onChange={handleInputChange}
                                    style={{ width: 200 }}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    
                                    defaultValue=""
                                    id="standard-"
                                    label="Update Price"
                                    placeholder="Update Price"
                                    name="price"
                                    onChange={handleInputChange}
                                    style={{ width: 200 }}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    
                                    id="standard-"
                                    label=""
                                    placeholder="Enter the plant's new size "
                                    name="size"
                                    style={{ width: 200 }}
                                    type="number"
                                    onChange={handleInputChange}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>


                            <Grid item xs={6}>
                                <h3>Notes:</h3>
                                <TextareaAutosize
                                    aria-label="update notes"
                                    placeholder="type notes here ..."
                                    name="notes"
                                    style={{  width: 300, height: 100, fontFamily: "sans-serif", fontSize: "12px" }}
                                    onChange={handleInputChange}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <Button variant="contained" color="primary" type="submit" onClick={handlePlantSubmit} spacing={4}>
                                    Submit
                                </Button>
                            </Grid>

                        </Grid>
                    </Paper>

                </form>
            </Container>

        </>
    )
}

export default Activity;