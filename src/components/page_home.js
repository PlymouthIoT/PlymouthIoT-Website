import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import hoephoto from '../images/hoe.jpg';


const Home = () => {
    return (
      <Container style={{padding: 45}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <img src={hoephoto} width='100%' />
          </Grid>
        </Grid>
      </Container>
    )
}

export default Home;
