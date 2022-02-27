import React from 'react'
import {Divider,makeStyles,Typography,Card,Container,Grid} from '@material-ui/core'
import {GiTargeting,GiSofa,GiMatchTip} from 'react-icons/gi'
import {GrCertificate} from 'react-icons/gr'
import {FaGraduationCap} from 'react-icons/fa'
//560
const useStyles = makeStyles((theme) => ({
    sectionSer:{
        height:'auto',  
        backgroundColor: 'black'
    },
    container:{
        height:'100%',
        paddingTop:"6%",
        paddingBottom:"10%",
    },
    item:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        fontWeight:'bold', 
        justifyContent:'center',
        paddingTop:"2%",
        paddingBottom:"10%",
     },
     top:{
        color: 'white',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'baseline',
        width:'100%',
     },
     title:{
        fontWeight:'bold',
       },
       discTitle:{
         fontWeight:'bold',
         color:theme.palette.primary.main,
       },
       divider:{
         backgroundColor: 'white',
         padding: '0.5%',
         width:'40%',
         marginRight: '3%',
         [theme.breakpoints.down("xs")]: {
            marginRight: '0%',
            width:'70%',
            padding: '0.7%',
          },
      },
     card:{
        boxShodow:'none',
        border:'none',
        backgroundColor: 'black',
        [theme.breakpoints.down("xs")]: {
           textAlign:'center'
          },
     },
     iconCard:{
        color: theme.palette.primary.main,
     },
     titleCard:{
        fontWeight: 'bold',
        color: 'white',
     },
     disCard:{
        color:'white',
     },
  }));

const Services=()=> {
    const classes = useStyles();
    return (
        <section className={classes.sectionSer}>
          <Container className={classes.container}> 
           <div className={classes.item}>  
            <div className={classes.top}>
                 <Typography variant="h3" component="div" className={classes.title}>OUR</Typography>
                 <Divider className={classes.divider}/>
            </div>
            <Typography variant="h2" component="div" display="block" className={classes.discTitle}>SERVICES</Typography>
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
