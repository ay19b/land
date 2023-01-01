import { makeStyles} from '@material-ui/core'




const useStyles = makeStyles((theme) => ({
    sectionSer:{
        height:'auto',  
        backgroundColor: 'black'
    },
    container:{
        height:'100%',
        paddingTop:"6%",
        paddingBottom:"10%",
    },
    item:{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'end',
        fontWeight:'bold', 
        justifyContent:'center',
        paddingTop:"2%",
        paddingBottom:"10%",
     },
     top:{
        color: 'white',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'baseline',
        width:'100%',
     },
     title:{
        fontWeight:'bold',
       },
       discTitle:{
         fontWeight:'bold',
         textAlign: 'end',
         color:theme.palette.primary.main,
       },
       divider:{
         backgroundColor: 'white',
         padding: '0.5%',
         width:'40%',
         marginRight: '3%',
         [theme.breakpoints.down("xs")]: {
            marginRight: '0%',
            width:'70%',
            padding: '0.7%',
          },
      },
     card:{
        boxShodow:'none',
        border:'none',
        backgroundColor: 'black',
        [theme.breakpoints.down("xs")]: {
           textAlign:'center'
          },
     },
     iconCard:{
        color: theme.palette.primary.main,
     },
     titleCard:{
        fontWeight: 'bold',
        color: 'white',
     },
     disCard:{
        color:'white',
     },
  }));

export default useStyles  