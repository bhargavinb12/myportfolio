import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link as Lnk } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toys from "@material-ui/icons/Toys";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import { green, red, blue, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7986cb"
    },
    secondary: {
      main: "#fff"
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              {/* <MenuIcon /> */}
              <Toys />
            </IconButton>
            <Typography align="left" variant="h6" className={classes.title}>
              Bhargavi Narayan Bhat
            </Typography>
            <Button color="secondary">
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                {" "}
                <Typography color="initial" variant="subtitle1">
                  Home
                </Typography>
              </Link>
            </Button>
            <Button color="secondary">
              <Link to="/about" style={{ textDecoration: "none" }}>
                {" "}
                <Typography variant="subtitle1" style={{ color: "white" }}>
                  About
                </Typography>
              </Link>
            </Button>
            <Button color="secondary">
              <Link to="/resume" style={{ textDecoration: "none" }}>
                {" "}
                <Typography
                  style={{ color: "white" }}
                  variant="subtitle1"
                  color="initial"
                >
                  Resume{" "}
                </Typography>
              </Link>
            </Button>

            <Button color="secondary">
              <Link to="/contact" style={{ textDecoration: "none" }}>
                {" "}
                <Typography
                  style={{ color: "white" }}
                  variant="subtitle1"
                  color="initial"
                >
                  Contact{" "}
                </Typography>
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

//home work about blog contact
