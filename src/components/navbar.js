import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  appbar_button: {
    border: 0,
    color: 'white',
    height: 64,
    padding: '0 15px',
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{paddingRight: 20}}>
            Plymouth IoT
          </Typography>
          <Button component={Link} to={'/'} className={classes.appbar_button}>Home</Button>
          <Button component={Link} to={'/otherpage'} className={classes.appbar_button}>Other Page</Button>
          <Button component={Link} to={'/anotherpage'} className={classes.appbar_button}>Another Page</Button>
          <a href='https://github.com/PlymouthIoT'><Button className={classes.appbar_button}>Github</Button></a>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;
