import React from "react";
//import Download from "@axetroy/react-download";
//import fileDownload from "react-file-download";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Container, Header, Grid, Form } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  ArrowDownward
} from "@material-ui/icons";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles(theme => ({
  button: {
    //margin: theme.spacing(1)
    color: accent
  },
  input: {
    display: "none"
  }
}));

const accent = green["A700"];

export default class Resume extends React.Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () => this.setState(state => ({ pageNumber: 1 }));
  goToNextPage = () => this.setState(state => ({ pageNumber: 2 }));

  exportPDF = () => {
    this.resume.save();
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "6px",
            padding: "6px"
          }}
        >
          {/* <Download file="/resume.pdf"> */}
          <a href={"/resume.pdf"} style={{ textDecoration: "none" }}>
            <Fab
              variant="extended"
              //onClick={this.exportPDF}
              size="small"
              style={{ backgroundColor: "#2e7d32", color: "#fff" }}
              aria-label="add"
            >
              <ArrowDownward />
              Download
            </Fab>
          </a>
          {/* </Download> */}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Fab
            style={{
              marginLeft: "34px",
              padding: "6px"
            }}
            size="small"
            color="secondary"
            aria-label="prev"
            onClick={this.goToPrevPage}
            //className={classes.button}
          >
            <KeyboardArrowLeft />
          </Fab>
          <div
            // style={{ width: 600 }}
            style={{
              height: 772,
              width: 612,
              padding: "none",
              backgroundColor: "white",
              boxShadow: "5px 5px 5px 5px black",
              margin: "auto",
              overflowX: "hidden",
              overflowY: "hidden"
            }}
          >
            {/* <PDFExport
              paperSize={"Letter"}
              fileName="/resume.pdf"
              ref={r => (this.resume = r)}
            > */}
            <Document
              file="/resume.pdf"
              onLoadSuccess={this.onDocumentLoadSuccess}
              //ref={r => (this.resume = r)}
            >
              <Page pageNumber={pageNumber} width={600} />
            </Document>
            {/* </PDFExport> */}
          </div>
          <Fab
            style={{
              marginRight: "34px",
              padding: "6px"
            }}
            size="small"
            color="secondary"
            aria-label="next"
            onClick={this.goToNextPage}
          >
            <KeyboardArrowRight />
          </Fab>
        </div>

        <div
          style={{
            marginTop: "16px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Typography>
            Page {pageNumber} of {numPages}
          </Typography>
        </div>
      </div>
    );
  }
}
