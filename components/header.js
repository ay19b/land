import {makeStyles, Typography,Container} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   sectionHome:{
       height:620,
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'end',
       backgroundImage: "url(../images/home.jpg)",
       backgroundRepeat: "no-repeat",
       backgroundPosition: 'right',
       backgroundSize: 'cover',
       [theme.breakpoints.down("xs")]: {
         height: 450,
         backgroundPosition: 'bottom',
       },
   },
   bgc:{
       backgroundColor:'rgba(0,0,0,0.4)',
       height:'100%',
       width:"100%"
   },
   item:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      fontWeight:'bold',
      height:'100%',
      justifyContent:'center',
      paddingTop:"10%",
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
     color:theme.palette.primary.main,
   },
   extDiscTitle:{
    fontWeight:'bold',
    color:"white",
    [theme.breakpoints.down("sm")]: {
      textAlign: 'end',
    },
  },
   
 }));
const Header=()=>{
    const classes = useStyles();
    return(
        <section className={classes.sectionHome}>
          <div className={classes.bgc}>
            <Container className={classes.item}>
               <div className={classes.top}>
                 <Typography variant="h3" component="div" className={classes.title}>THE</Typography>
               </div>
               <Typography variant="h2" component="div" display="block" className={classes.discTitle}>CONQUEROR </Typography>
               <Typography variant="h4" component="div" display="block" className={classes.extDiscTitle}>OF The WORLD</Typography>
            </Container>
          </div>
        </section>
    )
}
export default Header;