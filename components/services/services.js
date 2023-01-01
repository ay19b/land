import React from 'react'
import {Divider,Typography,Card,Container,Grid} from '@material-ui/core'
import {GiTargeting,GiSofa,GiMatchTip} from 'react-icons/gi'
import {GrCertificate} from 'react-icons/gr'
import {FaGraduationCap} from 'react-icons/fa'
import useStyles from './style';


const Services=()=> {
    const classes = useStyles();
    return (
        <section className={classes.sectionSer}>
          <Container className={classes.container}> 
           <div className={classes.item}>  
            <div className={classes.top}>
                 <Typography variant="h3" component="div" className={classes.title}>OUR</Typography>
            </div>
            <Typography variant="h2" component="div" display="block" className={classes.discTitle}>SERVICES </Typography>
           </div>  
            <Grid container spacing={2} >
                <Grid item sm={12} md={3}>
                   <Card className={classes.card}>
                       <Typography variant="h3" className={classes.iconCard}><GiTargeting/></Typography>
                       <Typography variant="h4" className={classes.titleCard} gutterBottom>QUICK</Typography>
                       <Typography variant="body1" gutterBottom className={classes.disCard}>
                           Quick Service with highest degree of precision
                           ensures On time delivery, Every time Speedy Road
                           side assistance.
                       </Typography>
                   </Card>
                </Grid>
                <Grid item sm={12} md={3}>
                   <Card className={classes.card}>
                       <Typography variant="h3" className={classes.iconCard}><GiMatchTip/></Typography>
                       <Typography variant="h4" className={classes.titleCard} gutterBottom>QUALIFIED</Typography>
                       <Typography variant="body1" gutterBottom className={classes.disCard}>
                        They are recruited from the best technical
                         institutes supported by Toyota , are constantly
                          groomed through Toyota.
                       </Typography>
                   </Card>
                </Grid>
                <Grid item sm={12} md={3}>
                   <Card className={classes.card}>
                       <Typography variant="h3" className={classes.iconCard}><FaGraduationCap/></Typography>
                       <Typography variant="h4" className={classes.titleCard} gutterBottom>QUALITY</Typography>
                       <Typography variant="body1" gutterBottom className={classes.disCard}>
                         A quality vehicle deserves a quality service.
                         At Toyota, Quality check is inherent part of
                          each process & the staff is committed.
                      </Typography>
                   </Card>
                </Grid>
                <Grid item sm={12} md={3}>
                   <Card className={classes.card}>
                       <Typography variant="h3" className={classes.iconCard}><GiSofa /></Typography>
                       <Typography variant="h4" className={classes.titleCard}>Comfort</Typography>
                       <Typography variant="body1" gutterBottom className={classes.disCard}>
                         A quality vehicle deserves a quality service.
                         At Toyota, Quality check is inherent part of each
                         process & the staff is committed. 
                        </Typography>
                   </Card>
                </Grid>
            </Grid>
          </Container>  
        </section>
    )
}

export default Services
