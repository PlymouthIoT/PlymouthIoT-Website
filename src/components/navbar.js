import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{paddingRight: 20}}>
            Plymouth IoT
          </Typography>
          <Button component={Link} to={'/'} color='inherit'>Home</Button>
          <Button component={Link} to={'/otherpage'} color='inherit'>Other Page</Button>
          <Button component={Link} to={'/'} color='inherit'>Home</Button>
          <Button component={Link} to={'/'} color='inherit'>Home</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;
