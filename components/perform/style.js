import { makeStyles} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    sectionSer:{
       height:'auto',
       backgroundColor:'black',
    },
    container:{
        height:'100%',
        paddingTop:"12%",
        paddingBottom:"7%",
    },
    item:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        fontWeight:'bold', 
        justifyContent:'center',
        paddingTop:"6%",
        paddingBottom:"6%",
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
      padding: '0.5%',
      width:'30%',
      marginLeft: '2%',
      [theme.breakpoints.down("xs")]: {
         marginRight: '0%',
         width:'30%',
         padding: '0.7%',
       },
    },
     imgs:{
        marginTop: '15%',
    },
  }));

export default useStyles 