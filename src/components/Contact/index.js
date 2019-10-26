import React from "react";
//import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import { SocialIcon } from "react-social-icons";
import Paper from "@material-ui/core/Paper";
import { Typography, Fab, Icon, IconButton } from "@material-ui/core";
import { flexbox } from "@material-ui/system";
import { CenterFocusStrong } from "@material-ui/icons";
import PhoneIcon from "@material-ui/icons/Phone";
import { EmojiEmotions } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    display: "flex",
    justifyContent: "center"
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        height: "90vh"
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <IconButton edge="start" color="inherit">
          <EmojiEmotions
            style={{ display: "inline", color: "#fb8c00" }}
            fontSize="large"
          />
        </IconButton>
      </div>
      {/* <Fab
        size="large"
        color="primary"
        aria-label="add"
        className={classes.margin}
      >
        <EmojiEmotions fontSize="large" />
      </Fab> */}
      <Typography align="center" variant="h5" component="h3">
        Hire Me
      </Typography>
      <Paper className={classes.root}>
        {/* <Typography style={{ display: "inline-block" }}> */}
        <div>
          <SocialIcon
            style={{ marginRight: "6px" }}
            url="https://www.linkedin.com/in/bhargavi-bhat/"
          />
          <SocialIcon
            style={{ marginLeft: "2px" }}
            url="https://github.com/bhargavinb12"
          />
        </div>
        {/* </Typography> */}
      </Paper>
    </div>
  );
};
export default Contact;
