import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import hoephoto from '../images/hoe.jpg';


const Home = () => {
    return (
      <Container style={{padding: 45}}>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{backgroundImage: `url(${hoephoto})`}}>
             <Typography color="secondary" variant="h1" align="center">
                Hello World!
             </Typography>
          </Grid>
        </Grid>
      </Container>
    )
}

export default Home;
