import React, { useEffect, useState } from "react";
import { Container, Grid, Button, TextField, Paper, Typography, TextareaAutosize } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
import MomentUtils from "@date-io/moment"
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import API from '..//utils/API';
import UserHomeNav from "../components/UserHomeNav";
import GridList from '@material-ui/core/GridList';
import Link from '@material-ui/core/Link';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';


function UserHome(props) {
  const [plants, setPlants] = useState([]);
  const [images, setImages] = useState([]);

  async function getPlants() {
    const plantReq = await axios.get(`/api/plants?UserId=${props.user.id}`)
    console.log(plantReq);

    setPlants(plantReq.data);
  }

  async function getImages() {
    const imageReq = await axios.get(`/api/images`)
    console.log(imageReq.data);

    setImages(imageReq.data)
    console.log(images);
  }

  useEffect(() => {
    // on site load, get all genera using the api call/route
    getPlants()
    getImages()
    console.log(plants)
  }, [])

  let cards = [];

  plants.map(plant => {
    let currentPlant = {};
    currentPlant.name = plant.name;
    currentPlant.speciesId = plant.SpeciesId
    images.forEach(image => {
      plant.id === image.PlantId ? currentPlant.picture = image.image : currentPlant.picture = null

    })
    cards.push(currentPlant);
  })

  console.log(cards)

  return (
    <>
      <Paper>
        <UserHomeNav></UserHomeNav>
        <Container >
          <GridList cols={3} cellHeight={250}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
              <Typography variant="h3" align="center" component="div">My Collection</Typography>
            </GridListTile >
            {cards.map((plant, index) => (
              <GridListTile style={{ marginBottom: "18px" }} key={index}>
                <img src={plant.picture} alt={plant.name} />
                <GridListTileBar
                  title={plant.name}
                  subtitle={<span>{plant.speciesId}</span>}
                />
              </GridListTile>
            ))}
          </GridList>
        </Container>
      </Paper>
    </>
  )
}

export default UserHome;