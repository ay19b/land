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
       fontWeight:'bold',
       height:'100%',
       justifyContent:'center',
       paddingTop:"10%",
       textAlign: 'end',
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

export default useStyles