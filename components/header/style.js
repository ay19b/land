import { makeStyles} from '@material-ui/core'



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
       float: 'inline-end',
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
     color:'white',
     flexDirection: 'row-reverse',
     display: 'flex',
    },
    discTitle:{
      fontWeight:'bold',
      flexDirection: 'row-reverse',
      display: 'flex',
      color:theme.palette.primary.main,
    },
    extDiscTitle:{
     fontWeight:'bold',
     color:"white",
     flexDirection: 'row-reverse',
     display: 'flex',
     [theme.breakpoints.down("sm")]: {
       textAlign: 'end',
     },
   },
    
  }));

export default useStyles