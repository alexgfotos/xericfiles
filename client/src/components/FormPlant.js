import React, { useEffect, useState } from "react";
import { Container, Grid, Button, TextField, Paper, Typography, TextareaAutosize } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
import MomentUtils from "@date-io/moment"
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import API from '..//utils/API';


function FormPlant() {
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
    event.preventDefault();
    API.Plant.create({ ...formObject, GenusId: selectedGenus, SpeciesId: selectedSpecies, date: selectedDate }).then(res => {
      console.log(res)
      API.Image.create({ image: image, GenusId: selectedGenus, SpeciesId: selectedSpecies, PlantId: res.data.id }).then(res => {
      })
    }).catch(err => {
    })
    console.log(image)
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


  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log("Genus is: " + genusOptions);
  //   console.log("Genus is: " + speciesOptions);
  //   console.log("Nickname is: " + nickname);
  //   console.log("Price is: " + price);
  //   console.log("Size is: " + size);
  //   console.log("Date is: " + selectedDate);
  //   console.log("Note is: " + note);
  // };

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
                  Add a Plant
                </Typography>

              </Grid>

              <Grid item xs={6}>
                <Autocomplete
                  style={{ width: 200 }}
                  id={"genus"}
                  name="GenusId"
                  options={genusOptions}
                  renderInput={(params) => <TextField {...params} label="Select the genus" variant="outlined" />}
                  loading={true}
                  getOptionLabel={(option) => option.genus}
                  onChange={(e, value) => setSelectedGenus(value?.id)}
                >
                </Autocomplete>
              </Grid>

              <Grid item xs={6}>
                <Autocomplete
                  style={{ width: 200 }}
                  id={"species"}
                  name="SpeciesId"
                  options={speciesOptions}
                  renderInput={(params) => <TextField {...params} label="Select the species" variant="outlined" />}
                  loading={true}
                  onChange={(e, value) => setSelectedSpecies(value?.id)}
                  getOptionLabel={(option) => option.species}
                >
                </Autocomplete>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  id="standard-required"
                  label="Nickname"
                  placeholder="Enter the nickname"
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
                  label="Price paid in USD"
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
                  placeholder="Enter the size in inches"
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
                  aria-label="empty textarea"
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

export default FormPlant;