import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ButtonAppBar from "./ButtonAppBar";
import { Grid as Grd, Typography } from "@material-ui/core";

import "./Grid.css";

const Image = "/images/hero.jpg";
const styles = {
  paperContainer: {
    height: `85vh`,

    backgroundSize: "cover",
    backgroundPosition: "top",

    width: `100vw `,

    backgroundImage: `linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 80, 131, 0.8)), url(${Image})`,

    clipPath: "polygon(0 0, 100% 0, 100% 75vh, 0 100%)"
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Grid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grd container spacing={0} direction="column" justify="flex-end">
        <Grd item xs={12}></Grd>
        <Grd item xs={12}>
          <Paper className="paperOne" style={styles.paperContainer}>
            <span className="HeaderOne">Hi, I'm Bhargavi Narayan Bhat</span>

            <span className="HeaderTwo"> Front-End Web Developer</span>
          </Paper>
        </Grd>
      </Grd>
    </div>
  );
}
