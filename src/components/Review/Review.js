import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class Review extends Component {

  handleClick = () => {
    let obj = {
      feeling: this.props.review.feeling,
      understanding: this.props.review.understanding,
      support: this.props.review.support,
      comments: this.props.review.comments
    }

    axios.post('/feedback', obj)
    .then((response) => {
      console.log('Feedback saved', response);
      this.props.dispatch({type:'CLEAR'});
    }).catch((error) => {
      console.log('Error in POST.', error);
      alert('Error. Check console');
    })
  }

  render() {
    const classes = this.props.classes;
    return (
      <>
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/hdKmYNb.jpg"
          title="Review"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Review your feedback
          </Typography>
          <Typography component="ul">
            <Typography component="li">Feelings: {this.props.review.feeling}</Typography>
            <Typography component="li">Understanding: {this.props.review.understanding}</Typography>
            <Typography component="li">Support: {this.props.review.support}</Typography>
            <Typography component="li">Comments: {this.props.review.comments}</Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      <Link to='/success'>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>Submit</Button>
      </Link>
      <Link to='/comments'>
        <Button variant="contained" color="secondary" className={classes.button}>Back</Button>
      </Link>
      </>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  review: reduxStore.review
})

export default withStyles(styles)(connect(putReduxStateOnProps)(Review));
