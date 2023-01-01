import React from 'react'
import {Divider,Typography,Card,Container,Grid,Button} from '@material-ui/core'
import {GiTargeting,GiSofa,GiMatchTip} from 'react-icons/gi'
import {GrCertificate} from 'react-icons/gr'
import {FaGraduationCap} from 'react-icons/fa'
import Image from 'next/image'
import one from '../../public/images/fifth one.png'
import two from '../../public/images/fifth two.png'
import three from '../../public/images/fifth three.png'
import useStyles from './style';


const Perform=()=> {
    const classes = useStyles();
    return (
        <section className={classes.sectionSer}>
          <Container className={classes.container}> 
             
            <div className={classes.top}>
                 <Typography variant="h3" component="div" className={classes.title}>PERFORMANCE</Typography>
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
