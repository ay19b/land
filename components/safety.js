import React from 'react'
import {Divider,makeStyles,Typography,Card,Container,Grid,Button} from '@material-ui/core'
import {GiTargeting,GiSofa,GiMatchTip} from 'react-icons/gi'
import {GrCertificate} from 'react-icons/gr'
import {FaGraduationCap} from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
    sectionSer:{
       backgroundImage: "url(../images/third.jpg)",
       backgroundRepeat: "no-repeat",
       backgroundPosition: 'center',
       height:720,
       
    },
    container:{
      height:'100%',
      position:'relative',
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
      [theme.breakpoints.down("sm")]: {
         fontSize:'2.3rem'
       },
     },
     discTitle:{
       fontWeight:'bold',
       color:theme.palette.primary.main,
       [theme.breakpoints.down("sm")]: {
         fontSize:'2.5rem'
       },
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
     card:{
        backgroundColor:'transparent',
     },
     iconCard:{
        fontSize: '3rem',
        color: '#facd3d',
     },
     titleCard:{
        fontSize: '1.7rem',
        fontWeight: 'bold',
        color: 'white',
     },
     disCard:{
        color:'white',
     },
     btn:{
        display:'flex',
        flexDirection:'column',
        width:'7rem',
        alignItems: 'center',
        marginTop: '5%',
        color:'white',
        
    },
  }));

const Safety =()=> {
    const classes = useStyles();
    return (
        <section className={classes.sectionSer}>
          <Container className={classes.container}> 
            <div style={{position:"absolute",bottom:'20%'}} >
            <div className={classes.top}>
                 <Typography variant="h3" component="div" className={classes.title}>SAFETY</Typography>
                 <Divider className={classes.divider}/>
            </div>
            <Typography variant="h2" component="div" display="block" className={classes.discTitle}>10 SRS AIRBAGS</Typography>
            <div className={classes.btn}>
                <Button variant="text" style={{color:'white'}}>Read More</Button>
                <Divider style={{background:'#facd3d',padding:'1%',width:'75%'}}/>
            </div>
            </div> 
          </Container>  
        </section>
    )
}

export default Safety
