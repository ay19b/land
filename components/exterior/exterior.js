import React from 'react'
import {Divider,Typography,Card,Container,Button} from '@material-ui/core'
import {GiTargeting,GiSofa,GiMatchTip} from 'react-icons/gi'
import {GrCertificate} from 'react-icons/gr'
import {FaGraduationCap} from 'react-icons/fa'
import useStyles from './style';


const Exterior = ()=> {
    const classes = useStyles();
    return (
        <section className={classes.sectionSer}>
          <Container className={classes.container}> 
           <div className={classes.item}>  
            <div className={classes.top}>
                 <Typography variant="h3" component="div" className={classes.title}>EXTERIOR</Typography>
            </div>
            <Typography variant="h2" component="div" display="block" className={classes.discTitle}>NEW GRILLE AND HOOD DESIGN</Typography>
           </div>  
            
          </Container>  
        </section>
    )
}

export default Exterior
