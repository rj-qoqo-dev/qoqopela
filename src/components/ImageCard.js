import * as React from 'react';
import { makeStyles } from "@mui/styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 265,
    margin: '30px',
  },
  media: {
    height: 140,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.5rem',
    color: '#ddd',
  }
}))
export default function ImageCard({ section, checked }) {
  const classes = useStyles();
  return (
    <Collapse in={checked} {...(true ?  { timeout: 1000 } : {})}>
    <Card className={classes.root} style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
      <CardMedia
        component="img"
        className={classes.media}
        image={section.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={classes.title}>
          {section.title}
        </Typography>
        <Typography variant="body2" className={classes.desc}>
          {section.desc}
        </Typography>
      </CardContent>
    </Card>
    </Collapse>
  );
}
