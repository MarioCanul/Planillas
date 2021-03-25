import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

//estilo
import '../../assets/style/SearcBar.css'


export default class ButtonAppBar extends React.Component {
    FoundWord =(e)=>{
        this.props.word(e.target.value.toUpperCase())
    }
  render(){


      return (
        <div className="contenedor">
        
          <AppBar position="static">
            <Toolbar>
            <div className="contenedor-menu">
                <div >
                  <SearchIcon />
                </div>
                <InputBase
                color='secondary'
                  placeholder="Search….............."
                  
                  inputProps={{ 'aria-label': 'search' }}
                 onChange={this.FoundWord}
                />
              </div>
              
            </Toolbar>
          </AppBar>
       
        
        </div>
      );
  }

}