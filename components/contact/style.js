import { makeStyles} from '@material-ui/core'




const useStyles = makeStyles((theme) => ({
    section:{
       backgroundImage: "url(../images/footer.jpg)",
       backgroundRepeat: "no-repeat",
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       height:'auto', 
    },
    container:{
        height:'100%',
        width:'100%',
        paddingTop:"8%",
        paddingBottom:"8%",
        backgroundColor:'rgba(0,0,0,0.4)'
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
     header:{
        fontWeight:'bold',
        color:theme.palette.primary.main,
     },
     top:{
        color: 'white',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'baseline',
     },
    divider:{
        backgroundColor: 'white',
        padding: '1%',
        width: '20rem',
        marginRight: '10%',
        [theme.breakpoints.down("xs")]: {
           padding: '0.7%',
           marginRight: '0%',
         },
     },
     listItem:{
        color:'white',
        marginLeft: '3%',
     },
	 list:{
		 listStyle: 'none',
         display: 'flex',
	 },
     iconList:{
         marginRight:'2%',
     },
     card:{
        backgroundColor:'transparent',
     },
     titleCard:{
        fontSize: '1.7rem',
        fontWeight: 'bold',
        color: 'white',
     },
     disCard:{
        color:'white',
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
    input:{
        marginBottom:'3%',
        color:'white',
    },
  }));

export default useStyles
