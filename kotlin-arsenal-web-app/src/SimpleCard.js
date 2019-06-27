import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: 22,
  },
});

export default function SimpleCard(library) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" >
          {library.value.githubUrl}
        </Typography> 
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {library.value.category.name}
        </Typography>
      </CardContent>
      <CardActions>
         <Button size="small" href={library.value.githubUrl} target="_blank" >See on GitHub</Button>
      </CardActions>
    </Card>
  );
}
