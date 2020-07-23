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
    const [loading, setLoading] = useState(false);
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
           PlantId: props.location.state.plant
        }).then(res => {
            console.log(res)
        }).catch(err => {
        })
        // setTimeout(function (){
        //     window.location.reload(false)
        // }, 3000)
        // console.log(image)}

        // window.location.reload(false)
    }
    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()

        data.append("file", files[0])
        data.append("upload_preset", "xericfiles")

        setLoading(true)

        const res = await fetch(
            'https://api.cloudinary.com/v1_1/university-of-arizona-bootcamp/image/upload',

            {
                method: "POST",
                body: data
            }
        )

        const file = await res.json()


        setImage(file.secure_url)
        setLoading(false)

    }



    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }
    const handleDateChange = (date) => {
        setSelectedDate(date);

    };

    return (
        <>

            <Container >
                <form >
                    <Paper >
                        <Grid container spacing={2} direction="column" justify="center" alignItems="center" maxWidth="200">
                            <Grid item xs={6} >

                                <Typography variant="h4" gutterBottom>
                                    Update  Plant
                                </Typography>

                            </Grid>

                            <Grid item xs={6}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">How is the plant watered?</FormLabel>
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
                                        <FormControlLabel value="Fertlized" control={<Radio />} label="Fertlized" />
                                        <FormControlLabel value="Not Fertlized" control={<Radio />} label="Not Fertlized" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>


                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Ni"
                                    placeholder="Update the nickname"
                                    name="name"
                                    onChange={handleInputChange}
                                    style={{ width: 200 }}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    defaultValue=""
                                    id="standard-required"
                                    label="Update Price"
                                    name="price"
                                    onChange={handleInputChange}
                                    style={{ width: 200 }}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="standard-required"
                                    label="Size"
                                    placeholder="Enter the plant's new size in inches"
                                    name="width"
                                    style={{ width: 200 }}
                                    type="number"
                                    onChange={handleInputChange}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>

                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <Grid item xs={6}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/DD/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        name="date"
                                        label="Date of acquired"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        style={{ width: 200 }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>

                            <Grid item xs={6}>
                                <input
                                    type="file"
                                    name="file"
                                    placeholder="Upload an image"
                                    onChange={uploadImage}
                                    style={{ width: 200 }}
                                />
                                {loading ? (
                                    <h3>Loading..</h3>
                                ) : (
                                    <Grid item xs={6} >
                                        <img src={image} style={{ width: "200px" }} />
                                    </Grid>
                                )}
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
                            ``
                        </Grid>
                    </Paper>

                </form>
            </Container>

        </>
    )
}

export default Activity;