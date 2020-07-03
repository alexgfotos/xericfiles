import React, { useEffect, useState } from "react";
import { Container, Grid, Button, TextField, Paper, Typography, MenuItem } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";

function FormPlant() {

  const [genusOptions, setGenusOptions] = useState([]);

  useEffect(async () => {
    const res = await axios.get("/api/genus")
    console.log(res);

    setGenusOptions(res.data);
 


  }, [])

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
                  id={"genus"}
                  options={genusOptions}
                  renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                  loading={true}
                  getOptionLabel={(option) => option.genus}
                >


                </Autocomplete>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id=""
                  select
                  label="Select"
                  value=""
                  onChange=""
                  helperText="Please select the species"
                  variant="filled"
                >
                  {/* {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))} */}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange=""
                  value=""
                  type="text"
                  label="Nickname"
                  name="nickname"
                  as="input"
                  placeholder="Enter the nickname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange=""
                  value=""
                  type="text"
                  label="Date Acquired"
                  name="date"
                  as="input"
                  placeholder="Enter the date of acquired"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange=""
                  value=""
                  type="text"
                  label="Price paid"
                  name="price"
                  as="input"
                  placeholder="Enter the price paid"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange=""
                  value=""
                  type="text"
                  label="Size"
                  name="size"
                  as="input"
                  placeholder="Enter the size of the plant"
                />
              </Grid>


              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit" onClick="" spacing={4}>
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