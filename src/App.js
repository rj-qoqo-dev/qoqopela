import React from "react";
import { makeStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Sections from "./components/Sections";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/together.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline />
    <Header />
    <Sections />
  </div>
}

