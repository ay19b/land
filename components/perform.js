import React from 'react'
import {Divider,makeStyles,Typography,Card,Container,Grid,Button} from '@material-ui/core'
import {GiTargeting,GiSofa,GiMatchTip} from 'react-icons/gi'
import {GrCertificate} from 'react-icons/gr'
import {FaGraduationCap} from 'react-icons/fa'
import Image from 'next/image'
import one from '../public/images/fifth one.png'
import two from '../public/images/fifth two.png'
import three from '../public/images/fifth three.png'

const useStyles = makeStyles((theme) => ({
    sectionSer:{
       height:'auto',
       backgroundColor:'black',
    },
    container:{
        height:'100%',
        paddingTop:"12%",
        paddingBottom:"7%",
    },
    item:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        fontWeight:'bold', 
        justifyContent:'center',
        paddingTop:"6%",
        paddingBottom:"6%",
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
     divider:{
      backgroundColor: 'white',
      padding: '0.5%',
      width:'30%',
      marginLeft: '2%',
      [theme.breakpoints.down("xs")]: {
         marginRight: '0%',
         width:'30%',
         padding: '0.7%',
       },
    },
     imgs:{
        marginTop: '15%',
    },
  }));

const Perform=()=> {
    const classes = useStyles();
    return (
        <section className={classes.sectionSer}>
          <Container className={classes.container}> 
             
            <div className={classes.top}>
                 <Typography variant="h3" component="div" className={classes.title}>PERFORMANCE</Typography>
                 <Divider className={classes.divider}/>
            </div>
            <Typography variant="h2" component="div" display="block" className={classes.discTitle}>6-SPEED AUTOMATIC</Typography>
            
            <Grid container className={classes.imgs} spacing={1}>
                <Grid item xs={12} sm={4}>
                   <Image src={one} alt='one'/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Image src={two} alt='two' />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Image src={three} alt='three' />
                </Grid>
            </Grid>
            
          </Container>  
        </section>
    )
}

export default Perform
