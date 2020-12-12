import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const Docs_ArduinoNode = () => {
    return (
      <Container style={{padding: 45}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom={true}>Arduino Hello World Node</Typography>
          </Grid>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/documentation">
                Documentation
              </Link>
              <Typography color="textPrimary">Arduino Hello World Node</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Container>
    )
}

export default Docs_ArduinoNode;
