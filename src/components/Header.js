import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarTitle: {
    color: 'rgb(85,120,45)',
    flexGrow: '1',
  },
  appbarWrapper: {
    width: '85%',
    margin: '0 auto',
  },
  icon: {
    color: 'rgb(85,120,45)',
  },
  welcomecontainer: {
    textAlign: 'center',
  },
  welcometitle: {
    color: 'rgb(85,120,45)',
    fontSize: '4.5rem',
  },
  godown: {
    color: 'rgb(85,120,45)',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
   setChecked(true);
  },[])
  return(
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} color="transparent" elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>MyQoqopela</h1>
          <IconButton>
            <SortIcon className={classes.icon} style={{ fontSize: 40 }}/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse in={checked} {...(true ?  { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.welcomecontainer}>
          <h1 className={classes.welcometitle}>
            Welcome to <br />MyQoqopela
          </h1>
          <Scroll to="sections" smooth={true}>
            <IconButton>
              <ExpandMoreRoundedIcon className={classes.godown} style={{ fontSize: 90 }}/>
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  )
}