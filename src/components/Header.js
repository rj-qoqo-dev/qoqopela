import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    color: '#fff',
    flexGrow: '1',
  },
  appbarWrapper: {
    width: '85%',
    margin: '0 auto',
  },
  icon: {
    color: '#fff',
  },
  welcomecontainer: {
    textAlign: 'center',
  },
  welcometitle: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  godown: {
    color: '#fff',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
   setChecked(true);
  },[])
  return(
    <div className={classes.root}>
      <AppBar className={classes.appbar} color="transparent" elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>MyQoqopela</h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse in={checked} {...(true ?  { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.welcomecontainer}>
          <h1 className={classes.welcometitle}>
            Welcome to <br />MyQoqopela
          </h1>
          <IconButton>
            <ExpandMoreIcon className={classes.godown} />
          </IconButton>
        </div>
      </Collapse>
    </div>
  )
}