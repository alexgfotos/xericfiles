import React from "react";
import { Container, Grid, Button, TextField, Paper, Typography, MenuItem } from '@material-ui/core';

function FormPlant() {


  return (
    <>
      <Paper alignItems="center" justify="center" direction="row">
        <Container maxWidth="sm">
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  Add a Plant
                                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id=""
                  select
                  label="Select"
                  value=""
                  onChange=""
                  helperText="Please select the genus"
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
                <Button variant="contained" color="primary" type="submit" onClick="">
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