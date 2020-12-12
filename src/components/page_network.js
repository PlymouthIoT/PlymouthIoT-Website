import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import undraw_connectedworld from '../images/undraw_connectedworld.png';
import undraw_secure from '../images/undraw_secure.png';
import undraw_city from '../images/undraw_city.png';
import undraw_device from '../images/undraw_device.png';
import undraw_stats from '../images/undraw_stats.png';


const Network = () => {
    return (
      <Container style={{padding: 45}}>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Typography variant="h3" gutterBottom={true}>
              Network
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={8}>
            <Typography variant="h4" gutterBottom={true}>
              Open &amp; Free
            </Typography>
            <Typography variant="body1" align='justify'>
              We are building an open, free to use Internet of Things network in Plymouth to make a smarter and more connected city.
              Using a variety of sensors and other devices we can learn more about our environment, monitor infrastructure and make
              data driven decisions about our future. With a low cost to entry anyone can begin contributing with citizen science
              projects using simple development kits such as <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer">Arduino</a>.
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <center>
              <img src={ undraw_city } height="250px"/>
            </center>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <center>
              <img src={ undraw_device } height="250px"/>
            </center>
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h4" gutterBottom={true}>
              Established Technology
            </Typography>
            <Typography variant="body1" align='justify'>
              By utilising Long Range Wide Area Network (LoRaWAN) and <a href="https://www.thethingsnetwork.org" target="_blank" rel="noreferrer">
              The Things Network</a> (TTN) we are consuming well established technology which is used by individual hobbyists to large
              industrial enterprises worldwide. LoRaWAN technology enables data to flow between your devices and your app via a
              mesh of gateways which bridge to the internet. Devices can be deployed in the wild with a range of up to several kilometres
              to the nearest gateway in urban environments. Furthermore LoRaWAN devices are typically very low power lasting years at
              a time on a single battery reducing maintenance efforts once deployed.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={8}>
            <Typography variant="h4" gutterBottom={true}>
              Secure
            </Typography>
            <Typography variant="body1" align='justify'>
              Data is fully encrypted from IoT devices deployed in the field until it reaches The Things Network using
              AES key based encryption. Once at The Things Network the encrypted packet of data is decrypted and decoded into a machine
              readable object such as a JSON payload, this easy to use data structure is then made available to your application via the
              internet using MQTT + TLS a popular secure messaging protocol often used in Internet of Things platforms.
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <center>
              <img src={ undraw_secure } height="250px"/>
            </center>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <center>
              <img src={ undraw_connectedworld } height="250px"/>
            </center>
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h4" gutterBottom={true}>
              A Global Network
            </Typography>
            <Typography variant="body1" align='justify'>
              Adoption of <a href="https://www.thethingsnetwork.org" target="_blank" rel="noreferrer">The Things Network</a> (TTN) means that
              your devices won't just work in Plymouth but anywhere with LoRaWAN gateways linked to TTN. We actively contribute
              to TTN Mapper, an open source TTN coverage database, to help keep Plymouth's coverage up to date. To find out
              where you can join devices to the network check the coverage maps available from
              <a href="https://www.ttnmapper.org" target="_blank" rel="noreferrer">TTN Mapper</a>. 
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={8}>
            <Typography variant="h4" gutterBottom={true}>
              Status
            </Typography>
            <Typography variant="body1" align='justify'>
              LoRaWAN gateways connected to The Things Network are operated by individuals, businesses and other institutions
              such as  local authorities, colleges  and Universities and hence may not come with any Service Level Agreement
              or gaurantees, having  said that most contributors take their responsibilities seriously to help grow adoption
              of the network and to support their own use cases. We monitor the status of gateways within the Plymouth area
              so we can better understand the networks availability and coverage within the city. You may check the status of
              the gateways we monitor at our status page.
            </Typography>
            <br />
            <center><Button variant="contained" color="primary" component={Link} to="/network-status">Network Status</Button></center>
          </Grid>
          <Grid item sm={4}>
            <center>
              <img src={ undraw_stats } height="250px"/>
            </center>
          </Grid>
        </Grid>
      </Container>
    )
}

export default Network;
