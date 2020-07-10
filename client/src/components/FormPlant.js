import React, { useEffect, useState } from "react";
import { Container, Grid, Button, TextField, Paper, Typography, TextareaAutosize } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
import DateFnsUtils from '@date-io/date-fns';
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
  const handlePlantSubmit = async (event) => {
    event.preventDefault();
    API.Plant.create({ ...formObject, GenusId: selectedGenus, SpeciesId: selectedSpecies, date: selectedDate }).then(res => {
    }).catch(err => {
    })
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
      <Paper>
        <Container >
          <form>
            <Grid container spacing={2} direction="column" justify="center" alignItems="center" >
              <Grid item xs={12} >
                <Typography variant="h4" gutterBottom>
                  Add a Plant
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  style={{ width: 200 }}
                  id={"genus"}
                  name="GenusId"
                  options={genusOptions}
                  renderInput={(params) => <TextField {...params} label="Select the genus" variant="outlined" />}
                  loading={true}
                  getOptionLabel={(option) => option.genus}
                  onChange={(e, value) => setSelectedGenus(value.id)}
                >
                </Autocomplete>
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  style={{ width: 200 }}
                  id={"species"}
                  name="SpeciesId"
                  options={speciesOptions}
                  renderInput={(params) => <TextField {...params} label="Select the species" variant="outlined" />}
                  loading={true}
                  onChange={(e, value) => setSelectedSpecies(value.id)}
                  getOptionLabel={(option) => option.species}
                >
                </Autocomplete>
              </Grid>

              <Grid item xs={12}>
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

              <Grid item xs={12}>
                <TextField
                  required
                  defaultValue="$ "
                  id="standard-required"
                  label="Price paid in USD"
                  name="price"
                  onChange={handleInputChange}
                  style={{ width: 200 }}
                />
              </Grid>

              <Grid item xs={12}>
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

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={12}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
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

              <Grid item xs={12}>
                <h3>Notes:</h3>
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="type ..."
                  name="notes"
                  style={{ width: 400, height: 100, fontFamily: "sans-serif", fontSize: "12px" }}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit" onClick={handlePlantSubmit} spacing={4}>
                  Submit
                </Button>
              </Grid>

            </Grid>
          </form>
        </Container>
      </Paper>
    </>
  )
}

export default FormPlant;