import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import MenuButtons from './buttons_header'
import ImgHeader from './Img_Header'


//Estilos
import '../header/header.css';

class HolaMundo extends React.Component{

    render(){
      return(
        <AppBar position="static"  >
         <div className="navBar">
             <Toolbar className="navBar-icon">      
                 <ImgHeader/>                     
             </Toolbar> <div className="navBar-text">PLANILLAS</div>
             <Toolbar className="navBar-buttons">  <MenuButtons /> </Toolbar>
           </div>
         </AppBar>
           
          
      )
    }
  }
  export default HolaMundo; 