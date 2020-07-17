import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2, 3, 4].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function InteractiveList() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} >
        <Grid item xs={6} md={6}>
          <div className={classes.demo}>
            <List>
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>

        <Grid item xs={6} md={6}>
          <div className={classes.demo}>
            <List>
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
      </Grid>
      
    </div>
  );
}