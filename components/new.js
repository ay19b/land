import React from 'react'
import {Divider, makeStyles,Container ,Grid,Typography,Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   sectionHome:{
       backgroundImage: "url(../images/car.png)",
       backgroundRepeat: "no-repeat",
       backgroundPosition: 'center',
       backgroundColor:'black',
       height:720,
       [theme.breakpoints.down("xs")]: {
        height: 1000,
        backgroundPosition: 'bottom',
      },
   },
   item:{
    fontWeight:'bold',
    height:'100%',
    paddingTop:"3%", 
   },
 top:{
    color: 'white',
    display: 'flex',
    alignItems: 'baseline',
    width:'100%'
 },
 title:{
   fontWeight:'bold',
  },
  discTitle:{
    fontWeight:'bold',
    color:theme.palette.primary.main,
  },
  extDiscTitle:{
   fontWeight:'bold',
   color:"white",
 },

  divider:{
    backgroundColor: 'white',
    padding: '0.9%',
    width:'50%',
    marginRight: '30%',
    [theme.breakpoints.down("xs")]: {
       marginRight: '0%',
       width:'70%',
     },
 },
 
 prg:{
     marginTop: theme.spacing(7),
     color:'white',
     width:'75%'
 },
 btn:{
     display:'flex',
     flexDirection:'column',
     width:'7rem',
     alignItems: 'center',
     marginTop: '5%',
     color:'white',
     marginLeft: '-3%',
 },
 }));

const New=()=> {
    const classes = useStyles();
    return (
        <section className={classes.sectionHome}>
          <Container className={classes.item}>  
           <Grid container spacing={3}> 
            <Grid item sm={12} md={6}>
              <div className={classes.top}> 
                 <Typography variant="h3" component="div" className={classes.title}>NEW</Typography>
                 <Divider className={classes.divider}/>
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
                  <Typography variant="body2" gutterBottom style={{color:'white',width:'80%'}}>
                     From the Regular Service Reminders to Instant
                     Service status updates, from appointment booking
                     to vehicle delivery, each process follows a series
                     of steps which ensures quality service with utmost
                     convenience for our customers. 
                   </Typography>
                   <div className={classes.btn}>
                      <Button variant="text" style={{color:'white'}}>Read More</Button>
                      <Divider style={{background:'#facd3d',padding:'1%',width:'75%'}}/>
                   </div>
            </Grid>
            </Grid>
          </Container>
        </section>
    )
}

export default New
