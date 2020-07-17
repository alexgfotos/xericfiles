import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InteractiveList from "./InteractiveList";
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

export default function PlantCard() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [plant, setPlant] = useState({});
  const [plants, setPlants] = useState([]);
  const [plantIndex, setPlantIndex] = useState(0);
  const [image, setImage] = useState({});
  const [images, setImages] = useState([]);
  const [genus, setGenusOptions] = useState([]);
  const [species, setSpeciesOptions] = useState([]);


  useEffect(() => {
    loadPlants();
    loadImage();
  }, []);

  useEffect(() => {
    // on site load, get all genera using the api call/route
    console.log(plants)
    async function getSpecies() {

      const gen = await axios.get("/api/species/" + plants[0].SpeciesId)
      console.log(gen);

      setSpeciesOptions(gen.data);

    }
    if (plants.length) {
      getSpecies();
    }
  }, [plants]) //this is staying to load on an empty state, which is on the initial page load

  useEffect(() => {

    async function getGenus() {
      // once genera are loaded, get species by genera ID using api call
      const spec = await axios.get(`/api/species?GenusId=${species.GenusId}`)
      console.log(spec);

      setGenusOptions(spec.data);

    }
    if (species){
      getGenus();
    }
    
  }, [species]) //this tells useEffect to load once the state "selectedGenus" exists


  function nextPlant(plantIndex) {
    // Ensure that the user index stays within our range of users
    if (plantIndex >= plants.length) {
      plantIndex = 0;
    }
    setPlant(plants[plantIndex]);
    setPlantIndex(plantIndex);
  }

  function previousPlant(plantIndex) {
    // Ensure that the user index stays within our range of users
    if (plantIndex < 0) {
      plantIndex = plants.length - 1;
    }
    setPlant(plants[plantIndex]);
    setPlantIndex(plantIndex);
  }


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function loadPlants() {
    API.Plant.getAll()
      .then(plants => {
        console.log(plants.data);

        setPlants(plants.data);
        setPlant(plants.data[0]);
      })
      .catch(err => console.log(err));
  }

  function loadImage() {
    API.Image.getAll()
      .then(images => {
        console.log(images);

        setImages(images);
        setImage(images.data[0].image);
      })
      .catch(err => console.log(err));
  }


  return (

    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar alt="plant" src="https://e7.pngegg.com/pngimages/750/251/png-clipart-cactus-cactus-cartoon.png" className={classes.small} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        //Name
        title="Genus and Species"
        //Nickname
        subheader={plant.name}
      />
      <CardMedia

        className={classes.media}
        image={image}
        title="plant image"
      />
      <CardContent>
        <InteractiveList />
        <Typography variant="body2" color="textSecondary" component="p">
          This cactus consists of many small tubercles growing from a large tap root. They are usually solitary, rarely giving rise to side shoots from old areoles.
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
  );
}