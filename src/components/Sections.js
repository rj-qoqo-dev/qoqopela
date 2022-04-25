import React from "react";
import { makeStyles } from "@mui/styles";
import ImageCard from "./ImageCard";
import sections from "../static/sections";
import useWindowPos from "../hook/useWindowPos";
import { ButtonBase } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
export default function Sections() {
  const classes = useStyles();
  const checked = useWindowPos('header');
  return(
    <div className={classes.root} id="sections">
      <ButtonBase onClick={() => {console.log("clicked")}}>
        <ImageCard section={sections[0]} checked={checked}/>
      </ButtonBase>
      <ButtonBase onClick={() => {console.log("clicked")}}>
      <ImageCard section={sections[1]} checked={checked}/>
      </ButtonBase>
      <ButtonBase onClick={() => {console.log("clicked")}}>
      <ImageCard section={sections[2]} checked={checked}/>
      </ButtonBase>
      <ButtonBase onClick={() => {console.log("clicked")}}>
      <ImageCard section={sections[3]} checked={checked}/>
      </ButtonBase>
      <ButtonBase onClick={() => {console.log("clicked")}}>
      <ImageCard section={sections[4]} checked={checked}/>
      </ButtonBase>
    </div>
  )
}