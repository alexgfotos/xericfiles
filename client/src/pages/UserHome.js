import React, { useEffect, useState } from "react";
import { Container, Paper, Typography, TextareaAutosize } from '@material-ui/core';

import axios from "axios";
import UserHomeNav from "../components/UserHomeNav";
import GridList from '@material-ui/core/GridList';
import { Link } from "react-router-dom"
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import PlantModal from "../components/PlantModal";




function UserHome(props) {
  const [plants, setPlants] = useState([]);
  const [images, setImages] = useState([]);
  const [species, setSpecies] = useState({});
  const [specId, setSpecId] = useState([])

  async function getPlants() {
    const plantReq = await axios.get(`/api/plants?UserId=${props.user.id}`)
    // console.log(plantReq);

    setPlants(plantReq.data);
  }


  async function getSpecies() {
    const res = await axios.get('/api/species');
    let species = { 'none': 'none' }
    res.data.forEach(specie => {
      species[specie.id] = specie;
    })
    setSpecies(species)
    // console.log(species)
 }

  async function getImages() {
    const imageReq = await axios.get(`/api/images`)


    setImages(imageReq.data)
  }

  useEffect(() => {
    // on site load, get all genera using the api call/route
    getSpecies()
    getPlants()
    getImages()

  }, [])



  let cards = []
  plants.forEach(plant => {
    let currentPlant = {};
    currentPlant.name = plant.name;
    currentPlant.speciesId = plant.SpeciesId
    currentPlant.id = plant.id;
    if (plant.Images.length) {
      currentPlant.picture = plant.Images[0].image
    }
    cards.push(currentPlant);
  })

  console.log(cards)

  return (
    <>
      <Paper>
        <UserHomeNav></UserHomeNav>
        <Container >
          <GridList cols={3} cellHeight={350}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
              <Typography variant="h3" align="center" component="div">My Collection</Typography>
            </GridListTile >
            {cards.map((plant, index) => (
              <GridListTile style={{ marginBottom: "18px" }} key={index}>
                <Link to={{

                  pathname: "/individual",
                  state: {
                    plant: plant.id
                  }
                }}>
                  <img style={{ width: "100%" }} src={plant.picture} alt={plant.name} />
                </Link>
                <GridListTileBar
                  title={<Typography variant="button">{plant.name}</Typography>}
                  subtitle={species[plant.speciesId].species}
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