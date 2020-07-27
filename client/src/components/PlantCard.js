import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { Button, Grid, ListItemText, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Box } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckIcon from '@material-ui/icons/Check';
import EventIcon from '@material-ui/icons/Event';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import API from "../utils/API"
import axios from "axios"
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
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
  const [activity, setActivity] = useState([])
  // const [plantIndex, setPlantIndex] = useState(0);
  const [genus, setGenusOptions] = useState([]);
  const [species, setSpeciesOptions] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    loadPlants();
    loadActivity();
    console.log(activity)
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

  function loadActivity() {
    axios.get(`/api/activity?PlantId=${props.plantId.plant}`)
      .then(activity => {
        console.log(activity, "this is the activity!")
        setActivity(activity.data);

      })
      .catch(err => console.log(err));
  }

  let activities = []
  activity.forEach(activity => {
    let currentActivity = {};
    currentActivity.createdAt = activity.createdAt;
    currentActivity.water = activity.water
    currentActivity.fertilizer = activity.fertilizer;
    currentActivity.care = activity.care;
    activities.push(currentActivity);
  })


  return (
    <>
      <Grid sm={12} direction="row" spacing={2}>

        <Grid item sm={12} justify="flex-start" direction="row">
          <Button component={Link} to="/home" variant="contained" color="primary">Back</Button>
        </Grid>
        <Grid item sm={12} justify="center" direction="row">
          <Card className={classes.root} >

            <CardHeader
              avatar={
                <Avatar alt="plant" src={plant.Images?.[0].image} className={classes.small} />
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


                </Grid>

              </Grid>

              <Typography variant="body2" color="textSecondary">
                {plant.notes}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              ><Typography variant="caption">Care Log</Typography>
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>


                {activities.map((activity) => (
                  <>
                    <Typography variant="button">

                      <Moment parse="YYYY-MM-DD HH:mm" format="MM-DD-YYYY">
                        {activity.createdAt}
                      </Moment>

                    </Typography>

                    {activity.water ?
                            (
                              <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                  <CheckIcon fontSize='small' />{activity.water}
                                </ListItemIcon>

                              </ListItem>) : (null)}


                          {activity.fertilizer ?
                            (
                              <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                  <CheckIcon fontSize='small' />{activity.fertilizer}
                                </ListItemIcon>

                              </ListItem>) : (null)}

                          {activity.care ?
                            (
                              <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                  <CheckIcon fontSize='small' />{activity.care}
                                </ListItemIcon>

                              </ListItem>) : (null)}
                        

                    
                    </>
                ))}

              </CardContent>


            </Collapse>
          </Card>
        </Grid>
        <Grid item sm={12} justify="flex-end" direction="row">
          <Button component={Link} to={{ pathname: "/activity", state: { plant: plant.id } }} variant="contained" color="primary" >Update</Button>
        </Grid>
      </Grid>
    </>
  );
}