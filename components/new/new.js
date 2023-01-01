import React from 'react'
import {Divider,Container ,Grid,Typography,Button} from '@material-ui/core'
import useStyles from './style';


const New=()=> {
    const classes = useStyles();
    return (
        <section className={classes.sectionHome}>
          <Container className={classes.item}>  
           <Grid container spacing={3}> 
            <Grid item sm={12} md={6}>
              <div className={classes.top}> 
                 <Typography variant="h3" component="div" className={classes.title}>NEW</Typography>
               </div>
              <Typography variant="h2" component="h2" display="block" className={classes.discTitle}>LAND CRUISER</Typography>
              <Typography variant="h4" component="h2" display="block" className={classes.extDiscTitle}>THE PRIDE OF THE WORLD</Typography>
              <Typography variant="body2" gutterBottom className={classes.prg}>
                Toyota is proud to offer Service Experience,
                an assurance of Quick Service by Qualified Manpower
                & Inbuil Quality of Toyota Genuine Parts for a joyful
                ownership experience. Toyota Service is a completely
                standardized Service process ensured through Evolutionary
                systems & new age tools to ensure a hassle free service 
                experience & quickly respond to all customer needs.
              </Typography>
            </Grid>
            <Grid item sm={12} md={6}>
                  <Typography variant="body2" gutterBottom className={classes.prgTwo}>
                     From the Regular Service Reminders to Instant
                     Service status updates, from appointment booking
                     to vehicle delivery, each process follows a series
                     of steps which ensures quality service with utmost
                     convenience for our customers. 
                   </Typography>
                   <div className={classes.btn}>
                      <Button variant="text" style={{color:'white'}}>Read More</Button>
                      <Divider className={classes.DivBtn}/>
                   </div>
            </Grid>
            </Grid>
          </Container>
        </section>
    )
}

export default New
