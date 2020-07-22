import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 500,
    }
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={8}>

                    <Card className={classes.root}>
                        <CardActionArea>

                            <CardMedia
                                className={classes.media}
                                image="assets/cactus10.JPG"
                                title="Fluffy Cactus"
                            />

                        </CardActionArea>

                    </Card>

                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper>
                        <Typography variant="body2" color="textPrimary" component="p" className="homeText">
                            <h1>Welcome to Xeric Files!</h1>
                            <h2>
                                <ul>Catalogue your plants and document your plant care</ul>
                                <ul>Explore other user’s collections</ul>
                                <ul>Learn about plant care by location</ul>
                                <ul>Identify your plants by genus and species</ul>
                            </h2>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

// export default Home;