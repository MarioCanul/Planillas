import React from 'react';

import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Icono from '../../../assets/imgs/escudo_icono.png'
import '../../../assets/style/Footer.css'

class Footer extends React.Component{

    render(){
        
        return(
        <Grid container className="footer"  
        justify="space-evenly"
        alignItems="center"
        >
        <Grid item
         xs={12} 
         sm={6} 
         md={6}
         className="footer-logo"
         >
       <div >
        <img src={Icono} className="footer-icon" alt="icon"/>
      </div>
        </Grid>
        <Grid item 
        className="footer-contact"
        xs={12} 
        sm={6} 
        md={6}
        >
<ol className="footer-list">
  <li> <FacebookIcon/> <span>Mario Canul</span></li>
  <li><LinkedInIcon/> <span>Mario Canul</span></li> 
</ol>
       
        

        </Grid>
        </Grid>

        )
    }
}
export default Footer;