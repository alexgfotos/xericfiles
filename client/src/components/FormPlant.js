import React, { useEffect, useState } from "react";
import { Container, Grid, Button, TextField, Paper, Typography, TextareaAutosize } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';

function FormPlant() {

  const [genusOptions, setGenusOptions] = useState([]);
  const [selectedGenus, setSelectedGenus]= useState();
  const [speciesOptions, setSpeciesOptions] = useState([]);
  const [nickname, setNickname] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [note, setNote] = useState();
  const [selectedDate, setSelectedDate] = React.useState(new Date);

  useEffect(() => {

    async function getSpecies() {

      const spec = await axios.get(`/api/species?GenusId=${selectedGenus}`)
      console.log(spec);

      setSpeciesOptions(spec.data);

    }
    getSpecies()
  }, [selectedGenus])

  useEffect(() => {

    async function getGenera() {

      const gen = await axios.get("/api/genus")
      console.log(gen);

      setGenusOptions(gen.data);
    }
    getGenera();
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Genus is: " + genusOptions);
    console.log("Genus is: " + speciesOptions);
    console.log("Nickname is: " + nickname);
    console.log("Price is: " + price);
    console.log("Size is: " + size);
    console.log("Date is: " + selectedDate);
    console.log("Note is: " + note);
  };

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
                  options={speciesOptions}
                  renderInput={(params) => <TextField {...params} label="Select the species" variant="outlined" />}
                  loading={true}
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
                  name="nickname"
                  onChange={e => setNickname(e.target.value)}
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
                  onChange={e => setPrice(e.target.value)}
                  style={{ width: 200 }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  id="standard-required"
                  label="Size"
                  placeholder="Enter the size in inches"
                  name="size"
                  style={{ width: 200 }}
                  type="number"
                  onChange={e => setSize(e.target.value)}
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
                  style={{ width: 400, height: 100, fontFamily: "sans-serif", fontSize: "12px" }}
                  onChange={e => setNote(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} spacing={4}>
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