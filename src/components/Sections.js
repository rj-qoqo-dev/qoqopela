import React from "react";
import { makeStyles } from "@mui/styles";
import ImageCard from "./ImageCard";
import sections from "../static/sections";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))
export default function Sections() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
       <ImageCard section={sections[0]} />
       <ImageCard section={sections[1]} />
    </div>
  )
}