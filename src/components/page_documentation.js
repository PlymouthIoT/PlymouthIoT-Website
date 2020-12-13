import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const Documentation = () => {
    return (
      <Container style={{padding: 45}}>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Typography variant="h3" gutterBottom={true}>Documentation</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={4}>
              <Typography variant="h5" gutterBottom={true}>Getting Started</Typography>
              <ul>
                <li>
                  <Link to="/documentation/introduction">
                    <Typography variant="body1">LoRaWAN &amp; TTN Introduction</Typography>
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
          </Grid>
          <Grid item sm={4}>
              <Typography variant="h5" gutterBottom={true}>Integration</Typography>
              <ul>
                <li>
                  <Link to="/documentation/nodered-installation">
                    <Typography variant="body1">NodeRED Setup</Typography>
                  </Link>
                </li>
                 <li>
                  <Link to="/documentation/influxdb-grafana-installation">
                    <Typography variant="body1">InfluxDB &amp; Grafana Setup</Typography>
                  </Link>
                </li>
                <li>
                  <Link to="/documentation/record-device-data">
                    <Typography variant="body1">Record Device Data</Typography>
                  </Link>
                </li>
                <li>
                  <Link to="/documentation/visualise-device-data">
                    <Typography variant="body1">Visualise Device Data</Typography>
                  </Link>
                </li>
              </ul>
          </Grid>
          <Grid item sm={4}>
              <Typography variant="h5" gutterBottom={true}>Advanced Topics</Typography>
              <ul>
                <li>
                  <Link to="/documentation/noop">
                    <Typography variant="body1">Noop</Typography>
                  </Link>
                </li>
              </ul>
          </Grid>
        </Grid>
      </Container>
    )
}

export default Documentation;
