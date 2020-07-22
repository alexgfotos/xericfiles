import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { Button, Grid, ListItemText, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import API from "../utils/API"
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PlantCard(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [plant, setPlant] = useState({});
  // const [plantIndex, setPlantIndex] = useState(0);
  const [genus, setGenusOptions] = useState([]);
  const [species, setSpeciesOptions] = useState([]);


  useEffect(() => {
    loadPlants();

  }, []);

  useEffect(() => {

    async function getSpecies() {

      const spec = await axios.get("/api/species/" + plant.SpeciesId)
      console.log(spec);

      setSpeciesOptions(spec.data);

    }
    if (plant.id) {
      getSpecies();
    }
  }, [plant])

  useEffect(() => {

    function getGenus() {
      axios.get(`/api/genus/${species.GenusId}`).then(function (gen) {
        console.log(gen);
        if (gen.data) {
          setGenusOptions(gen.data);
        }
      })
    }
    if (species) {
      getGenus();
    }

  }, [species])


  // function nextPlant(plantIndex) {

  //   if (plantIndex >= plant.length) {
  //     plantIndex = 0;
  //   }
  //   setPlant(plant[plantIndex]);
  //   setPlantIndex(plantIndex);
  // }

  // function previousPlant(plantIndex) {

  //   if (plantIndex < 0) {
  //     plantIndex = plant.length - 1;
  //   }
  //   setPlant(plant[plantIndex]);
  //   setPlantIndex(plantIndex);
  // }

  // function handleBtnClick(event) {

  //   const btnName = event.target.getAttribute("data-value");
  //   if (btnName === "next") {
  //     const newPlantIndex = plantIndex + 1;
  //     nextPlant(newPlantIndex);
  //   } else {
  //     const newPlantIndex = plantIndex - 1;
  //     previousPlant(newPlantIndex);
  //   }
  // }

  function loadPlants() {
    API.Plant.getById(props.plantId.plant)
      .then(plant => {
        console.log(plant, "this is the plant!")
        setPlant(plant.data);

      })
      .catch(err => console.log(err));
  }




  return (
    <>
      <Grid container item sm={12} justify="flex-start" spacing={6} direction="column">
        <Button component={Link} to="/home"  variant="contained" color="primary">Back</Button>
      </Grid>

      <Card className={classes.root} >

        <CardHeader
          avatar={
            <Avatar alt="plant" src={plant.Images?.[0].image} className={classes.small} />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={genus.genus + " " + species.species}
          subheader={plant.name}
        />
        <CardMedia
          className={classes.media}
          image={plant.Images?.[0].image}
          title="plant image"
        />
        <CardContent>
          <Grid container spacing={2} >
            <Grid item xs={6} md={6} container direction="column" justify="center" alignItems="flex-start" >
              <ListItemText
                primary={"Genus: " + genus.genus}
              />
              <ListItemText
                primary={"Species: " + species.species}
              />
              <ListItemText
                primary={"Nickname: " + plant.name}
              />
              <ListItemText
                primary={"Country: " + genus.country}
              />

            </Grid>
            <Grid item xs={6} md={6} container direction="column" justify="flex-start" alignItems="flex-start"  >

              <ListItemText
                primary={"Width: " + plant.width + " inches"}
              />
              <ListItemText
                primary={"Price: $" + plant.price}
              />
              <ListItemText
                primary={"Date: " + plant.date}
              />
              <ListItemText
                primary="Single-line item"
              />

            </Grid>
          </Grid>

          <Typography variant="body2" color="textSecondary">
            This cactus consists of many small tubercles growing from a large tap root. They are usually solitary, rarely giving rise to side shoots from old areoles.
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
          </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
          </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
          </CardContent>
        </Collapse>

      </Card>

    </>
  );
}