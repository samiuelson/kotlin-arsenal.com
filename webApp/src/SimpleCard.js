import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: '70vh',
    margin: 'auto',
    padding: 12,
    textAlign: 'left',
  },
});

function getLibraryTitle(library) {
  return library.githubUrl.replace('https://github.com/', '');
}

export default function SimpleCard(library) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom noWrap>
          {getLibraryTitle(library.value)}
        </Typography>
        <Typography variant="subtitle2" gutterBottom noWrap>
          {library.value.githubUrl}
        </Typography> 
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {library.value.category.name}
        </Typography>
      </CardContent>
      <CardActions>
         <Button size="small" variant="contained" color="primary" href={library.value.githubUrl} target="_blank" >Open on GitHub</Button>
      </CardActions>
    </Card>
  );
}
