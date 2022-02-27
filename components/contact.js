import React from 'react'
import {Divider,makeStyles,Typography,Card,Container,Button,Grid,List,TextField} from '@material-ui/core'
import {GiTargeting,GiSofa,GiMatchTip} from 'react-icons/gi'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineTwitter,AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai'



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


const Contact =()=> {
    const classes = useStyles();
    return (
        <section className={classes.section}>
          <div className={classes.container}>  
           <Container >  
            <Grid container spacing={4}>
                  <Grid item sm={12} md={6}>
                  <Typography variant="h2" component="div" display="block" className={classes.header}>CONTACT US</Typography>
                  <List>
                    <li className={classes.listItem}>
                        
                        <Typography variant="subtitle1" component="div">(541) 323-6101</Typography>
                        <Typography variant="subtitle1" component="div">(541) 323-6101</Typography>
                        <br />
                        <Typography variant="subtitle1" component="div">115 NW Oregon Ave, #7 </Typography>
                        <Typography variant="subtitle1" component="div">Bend, OR 97703</Typography>
                        <br />
                        <div className={classes.list}>
                            <div className={classes.iconList}><Typography variant="h6"><GrFacebookOption /></Typography></div>
							<div className={classes.iconList}><Typography variant="h6"><AiOutlineTwitter /></Typography></div>
							<div className={classes.iconList}><Typography variant="h6"><AiOutlineInstagram /></Typography></div>
							<div className={classes.iconList}><Typography variant="h6"><AiFillYoutube /></Typography></div>
                        </div>    
                    </li>
                </List>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography variant="h3" component="div" style={{fontWeight:'bold',color:'white',marginBottom:'3%'}}>Follow Toyota</Typography>
                  <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Enter your Name"
                        fullWidth
                        multiline
                        className={classes.input}
                  />
                  <TextField
                        id="outlined-textarea"
                        variant="outlined"
                        placeholder="Enter a Valid email address"
                        fullWidth
                        multiline
                        className={classes.input}
                  />
                 <TextField
                     id="outlined-multiline-static"
                     placeholder="Enter your Message"
                     variant="outlined"
                     multiline
                     fullWidth
                     className={classes.input}
                     rows={4}
                />   
                <Button variant="contained" color="primary">submit</Button>      
                </Grid>
                
            </Grid>
          </Container>  
         </div>
        </section>
    )
}

export default Contact
