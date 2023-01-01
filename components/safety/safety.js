import React from 'react'
import {Divider,Typography,Container,Button} from '@material-ui/core'
import useStyles from './style';


const Safety =()=> {
    const classes = useStyles();
    return (
        <section className={classes.sectionSer}>
          <Container className={classes.container}> 
            <div className={classes.item}>
            <div className={classes.top}>
                 <Typography variant="h3" component="div" className={classes.title}>SAFETY</Typography>
            </div>
            <Typography variant="h2" component="div" display="block" className={classes.discTitle}>10 SRS AIRBAGS</Typography>
            <div className={classes.btn}>
                <Button variant="text" style={{color:'white'}}>Read More</Button>
                <Divider className={classes.DivBtn}/>
            </div>
            </div> 
          </Container>  
        </section>
    )
}

export default Safety
