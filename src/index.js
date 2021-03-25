import React from 'react';
import {render} from 'react-dom';


//Material

// Estilos
import '../src/index.css';
//Components
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer'
import Router from './Router';

//The code
const Root =()=>{
  return(
    <div>
      <Header/>
      <div className="Container">
      <Router/>
      </div>
      <Footer/>
    </div>
  )
}

render(<Root/>, document.querySelector('#root'));

