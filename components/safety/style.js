import { makeStyles} from '@material-ui/core'




const useStyles = makeStyles((theme) => ({
    sectionSer:{
       backgroundImage: "url(../images/third.jpg)",
       backgroundRepeat: "no-repeat",
       backgroundPosition: 'center',
       height:720,
       backgroundSize: 'cover',
    },
    container:{
      height:'100%',
      position:'relative',
    },
    item:{
        position:"absolute",
        bottom:'20%'
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
     btn:{
        display:'flex',
        flexDirection:'column',
        width:'7rem',
        alignItems: 'center',
        marginTop: '5%',
        color:'white',
    },
    DivBtn:{
        background:'#facd3d',
        padding:'1%',
        width:'75%'
    },
  }));
export default useStyles  