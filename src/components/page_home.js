import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const Home = () => {
    return (
      <Container style={{paddingRight: 45, paddingLeft: 45}}>
        <Box>
          <Typography variant="h3" color="secondary">
            This is the page title!
          </Typography>
        </Box>
      </Container>
    )
}

export default Home;
