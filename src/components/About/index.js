import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography, Fab } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 650
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function About() {
  const classes = useStyles();
  const Image = "/images/bharg-uncc.jpg";
  return (
    <div
      className="container"
      style={{
        display: "flex",

        height: "85vh"
      }}
    >
      <div className={classes.root}>
        <Paper elevation={20} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={Image} />
              </ButtonBase>
              <div>
                {/* <Fab
                  style={{
                    marginLeft: "34px",
                    padding: "6px"
                  }}
                  size="small"
                  color="secondary"
                  aria-label="prev"
                  // onClick={this.goToPrevPage}
                  //className={classes.button}
                >
                  <PhoneIcon />
                </Fab>
                <Typography color="secondary" variant="h6">
                  980-430-0345
                </Typography> */}
              </div>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    fontWeight="600"
                    color="primary"
                    gutterBottom
                    variant="subtitle1"
                  >
                    About Me
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Experienced Frontend Developer with a demonstrated history
                    of working in the information technology and services
                    industry.
                  </Typography>
                  {/* <Typography variant="body2"> */}
                  <Typography color="secondary" variant="subtitle1">
                    {" "}
                    Technical Skills:{" "}
                  </Typography>
                  <Typography color="primary" variant="subtitle1">
                    {" "}
                    Front-end JavaScript frameworks
                  </Typography>
                  Angular 8, React JS, jQuery, Vue JS
                  <Typography color="primary" variant="subtitle1">
                    Front-end tech stack:
                  </Typography>
                  Vanilla JavaScript, HTML, HTML5, CSS3, NodeJS, LESS/SASS,
                  Redux, CSS3, Modules, ES6, DOM manipulation, design patterns
                  <Typography color="primary" variant="subtitle1">
                    UI component frameworks:
                  </Typography>
                  Semantic UI React, Element React, Material UI React
                  <Typography color="primary" variant="subtitle1">
                    Front-end development tools:
                  </Typography>
                  Webpack, Grunt, NPM, Yarn, Browserify, Babel
                  <Typography color="primary" variant="subtitle1">
                    Unit Testing Platforms:
                  </Typography>
                  JUnit (Unit Testing framework), Jest, Selenium, Mocha
                  <Typography color="primary" variant="subtitle1">
                    Databases:
                  </Typography>
                  MongoDB, SQL, PL/SQL, NoSQL, Oracle 11g
                  <Typography color="primary" variant="subtitle1">
                    Tools:
                  </Typography>
                  JIRA, Confluence, Git-hub (modern version control flows),
                  Bitbucket, AWS (S3, EC2), Source Tree, Docker
                  {/* </Typography> */}
                </Grid>
                <Grid item>
                  <div
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-around"
                    }}
                  >
                    <div>
                      <Fab
                        style={{
                          marginLeft: "34px",
                          padding: "6px"
                        }}
                        size="small"
                        color="secondary"
                        aria-label="prev"
                        // onClick={this.goToPrevPage}
                        //className={classes.button}
                      >
                        <PhoneIcon />
                      </Fab>
                      <Typography color="secondary" variant="subtitle1">
                        980-430-0345
                      </Typography>
                    </div>
                    <div>
                      <Fab
                        style={{
                          marginLeft: "34px",
                          padding: "6px"
                        }}
                        size="small"
                        color="secondary"
                        aria-label="prev"
                        // onClick={this.goToPrevPage}
                        //className={classes.button}
                      >
                        <EmailIcon />
                      </Fab>
                      <Typography color="secondary" variant="subtitle1">
                        bhargavinb@gmail.com
                      </Typography>
                    </div>
                  </div>
                  {/* </Typography> */}
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1"></Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

//import "./Home.css";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";

// const About = () => {
//   return (
//     <Paper className="paper">
//       <Typography variant="h5" component="h3">
//         This is a sheet of paper.
//       </Typography>
//       <Typography component="p">
//         Paper can be used to build surface or other elements for your
//         application.
//       </Typography>
//     </Paper>
//   );
// };
// export default About;
