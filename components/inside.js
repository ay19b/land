import {Divider,makeStyles,Typography,Card,Container,Grid,Button} from '@material-ui/core'
import Image from 'next/image'
import one from '../public/images/six one.jpg'
import two from '../public/images/six two.jpg'
import three from '../public/images/six three.jpg'
import four from '../public/images/six four.jpg'


const useStyles = makeStyles((theme) => ({
    section:{
        height:'auto',
    },
  }));
const Inside=()=> {
    const classes = useStyles();
    return (
        <section className={classes.section}>
            <Grid container>
                <Grid item sm={12} md={6}>
                   <Image src={one} />
                </Grid>
                <Grid item sm={12} md={6}>
                  <Image src={two}/>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Image src={three}/>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Image src={four}/>
                </Grid>
            </Grid>
        </section>
    )
}

export default Inside
