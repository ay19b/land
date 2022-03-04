import React from 'react'
import {Divider,makeStyles,Typography,Card,Container,Button} from '@material-ui/core'
import {GiTargeting,GiSofa,GiMatchTip} from 'react-icons/gi'
import {GrCertificate} from 'react-icons/gr'
import {FaGraduationCap} from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
    sectionSer:{
       backgroundImage: "url(../images/fourth.png)",
       backgroundRepeat: "no-repeat",
       backgroundPosition: 'center',
       backgroundSize: 'cover',
	   backgroundColor: 'black',
       height:820, 
    },
    container:{
        height:'100%',
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
        flexDirection: 'row-reverse',
        alignItems: 'baseline',
        width:'100%'
     },
     title:{
      fontWeight:'bold',
     },
     discTitle:{
       fontWeight:'bold',
       flexDirection: 'row-reverse',
       color:theme.palette.primary.main,
       [theme.breakpoints.down("sm")]: {
         textAlign: 'end',
       },
     },
    divider:{
        backgroundColor: 'white',
        padding: '0.5%',
        width: '30%',
        marginRight: '10%',
        [theme.breakpoints.down("xs")]: {
           padding: '0.7%',
           marginRight: '3%',
           width: '40%',
         },
     },
     card:{
        backgroundColor:'transparent',
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

const Exterior = ()=> {
    const classes = useStyles();
    return (
        <section className={classes.sectionSer}>
          <Container className={classes.container}> 
           <div className={classes.item}>  
            <div className={classes.top}>
                 <Typography variant="h3" component="div" className={classes.title}>EXTERIOR</Typography>
                 <Divider className={classes.divider}/>
            </div>
            <Typography variant="h2" component="div" display="block" className={classes.discTitle}>NEW GRILLE AND HOOD DESIGN</Typography>
            <div className={classes.btn}>
                <Button variant="text" style={{color:'white'}}>Read More</Button>
                <Divider style={{background:'#facd3d',padding:'1%',width:'75%'}}/>
            </div>
           </div>  
            
          </Container>  
        </section>
    )
}

export default Exterior
