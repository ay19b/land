import {Typography,Container} from '@material-ui/core'
import useStyles from './style';

const Header=()=>{
    const classes = useStyles();
    return(
        <section className={classes.sectionHome}>
          <div className={classes.bgc}>
            <Container className={classes.item}>
               <Typography variant="h3" component="div" className={classes.title}>THE</Typography>
               <Typography variant="h2" component="div" display="block" className={classes.discTitle}>CONQUEROR </Typography>
               <Typography variant="h4" component="div" display="block" className={classes.extDiscTitle}>OF The WORLD</Typography>
            </Container>
          </div>
        </section>
    )
}
export default Header;