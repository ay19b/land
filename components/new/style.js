import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    sectionHome:{
        backgroundImage: "url(../images/car.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundColor:'black',
        height:720,
        [theme.breakpoints.down("xs")]: {
         height: 1000,
         backgroundPosition: 'bottom',
       },
    },
    item:{
     fontWeight:'bold',
     height:'100%',
     paddingTop:"3%", 
    },
  top:{
     color: 'white',
     display: 'flex',
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
  
  prg:{
      marginTop: theme.spacing(7),
      color:'white',
      width:'75%'
  },
  prgTwo:{
      color:'white',
      width:'75%'
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
  DivBtn:{
    background:'#facd3d',
    padding:'1%',
    width:'75%'
  },
  }));

export default useStyles
