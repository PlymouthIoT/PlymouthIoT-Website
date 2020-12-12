import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import undraw_connectedworld from '../images/undraw_connectedworld.png';
import undraw_secure from '../images/undraw_secure.png';
import undraw_city from '../images/undraw_city.png';
import undraw_park from '../images/undraw_park.png';
import undraw_stats from '../images/undraw_stats.png';


const Network = () => {
    return (
      <Container style={{padding: 45}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom={true}>
              Network
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" gutterBottom={true}>
              Open &amp; Free
            </Typography>
            <Typography variant="body1" align='justify'>
              We are building an open, free to use Internet of Things network in Plymouth to make a smarter and more connected city.
              Using a variety of sensors and other devices we can learn more about our environment, monitor infrastructure and make
              data driven decisions about our future. With a low cost to entry anyone can begin contributing with citizen science
              projects using simple development kits such as Arduino or BBC MicroBit.
            </Typography>
          </Grid>
          <Grid item xs={4}>
           <img src={ undraw_city } width="100%"/>
          </Grid>
          <Grid item xs={4}>
            <img src={ undraw_park } width="100%"/>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" gutterBottom={true}>
              Established Technology
            </Typography>
            <Typography variant="body1" align='justify'>
              By utilising Long Range Wide Area Network (LoRaWAN) and <a href="https://www.thethingsnetwork.org" target="_blank">
              The Things Network</a> (TTN) we are using well established technology which is used by individual hobbyists to large
              industrial enterprises worldwide. LoRaWAN technology enables data to flow between your devices and your app via a
              mesh of gateways which bridge to the internet. Devices can be deployed in the wild with a range of up to several kilometres
              to the nearest gateway in urban environments. Furthermore LoRaWAN devices are typically very low power lasting years at
              a time on a single battery reducing maintenance efforts once deployed.
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" gutterBottom={true}>
              Secure
            </Typography>
            <Typography variant="body1" align='justify'>
              Data is fully encrypted from the Internet of Things device deployed in the field until it reaches The Things Network using
              AES key based encryption. Once at The Things Network the encrypted packet of data is decrypted and decoded into a machine
              readable object such as a JSON payload, this easy to use data structure is then made available to your application via the
              internet using MQTT + TLS a popular secure messaging protocol often used in Internet of Things platforms.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <img src={ undraw_secure } width="100%"/>
          </Grid>
          <Grid item xs={4}>
            <img src={ undraw_connectedworld } width="100%"/>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" gutterBottom={true}>
              A Global Network
            </Typography>
            <Typography variant="body1" align='justify'>
              Adoption of <a href="https://www.thethingsnetwork.org" target="_blank">The Things Network</a> (TTN) means that
              your devices won't just work in Plymouth but anywhere with LoRaWAN gateways linked to TTN. To find out where
              you can join devices to the network check the coverage maps available from <a href="https://www.ttnmapper.org" target="_blank">TTN Mapper</a>. 
              We actively contribute to TTN Mapper to keep Plymouth's coverage up to date.
            </Typography>
          </Grid>
          <Grid item xs={8}>
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
          <Grid item xs={4}>
            <img src={ undraw_stats } width="100%"/>
          </Grid>
        </Grid>
      </Container>
    )
}

export default Network;
