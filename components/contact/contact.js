import React from 'react'
import {Divider,Typography,Card,Container,Button,Grid,List,TextField} from '@material-ui/core'
import {GiTargeting,GiSofa,GiMatchTip} from 'react-icons/gi'
import {GrFacebookOption} from 'react-icons/gr'
import useStyles from './style';
import {AiOutlineTwitter,AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai'





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
