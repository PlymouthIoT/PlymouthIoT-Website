import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const Documentation = () => {
    return (
      <Container style={{padding: 45}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom={true}>Documentation</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper style={{padding: 5}}>
              <Typography variant="h5" gutterBottom={true}>Getting Started</Typography>
              <ul>
                <li>
                  <Link to="/documentation/introduction">
                    <Typography variant="body1">LoRaWAN / TTN Introduction</Typography>
                  </Link>
                </li>
                <li>
                  <Link to="/documentation/host-a-gateway">
                    <Typography variant="body1">Hosting a LoRaWAN Gateway</Typography>
                  </Link>
                </li>
                <li>
                  <Link to="/documentation/arduino-hello-world-node">
                    <Typography variant="body1">Arduino Hello World Node</Typography>
                  </Link>
                </li>
                <li>
                  <Link to="/documentation/ttgo-t-beam-mapper-node">
                    <Typography variant="body1">TTGO T-Beam Mapper Node</Typography>
                  </Link>
                </li>
                <li>
                  <a href="https://www.ttnmapper.org" target="_blank" rel="noreferrer">
                    <Typography variant="body1">Network Coverage</Typography>
                  </a>
                </li>
                <li>
                  <Link to="/network-status">
                    <Typography variant="body1">Network Status</Typography>
                  </Link>
                </li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper style={{padding: 5}}>
              <Typography variant="h5" gutterBottom={true}>Category 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper style={{padding: 5}}>
              <Typography variant="h5" gutterBottom={true}>Category 3</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    )
}

export default Documentation;
