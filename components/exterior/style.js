import { makeStyles} from '@material-ui/core'




const useStyles = makeStyles((theme) => ({
    sectionSer:{
       backgroundImage: "url(../images/fourth.png)",
       backgroundRepeat: "no-repeat",
       backgroundPosition: 'center',
       backgroundSize: 'cover',
	     backgroundColor: 'black',
       height:820, 
    },
    container:{
        height:'100%',
    },
    item:{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'end',
        fontWeight:'bold', 
        justifyContent:'center',
        paddingTop:"6%",
        paddingBottom:"6%",
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
       textAlign: 'end',
       color:theme.palette.primary.main,
       [theme.breakpoints.down("sm")]: {
         textAlign: 'end',
       },
     },
    divider:{
        backgroundColor: 'white',
        padding: '0.5%',
        width: '40%',
        marginRight: '4%',
        [theme.breakpoints.down("xs")]: {
           padding: '0.7%',
           marginRight: '3%',
           width: '40%',
         },
     },
     card:{
        backgroundColor:'transparent',
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