import React from 'react';

import Calendar from '../calendario/Calendar'
import SerachBar from '../calendario/search'
 
//data
import {Data}  from '../../assets/Data/data'
// import Data from '../../assets/Data/data.txt';
//Estilo
import '../../assets/style/Calendario.css'
class HolaMundo extends React.Component{
  constructor(){
    super()
    this.state={
      DataPlanillas:Data,
      Planillas :Data
    }

  }
  filterWord=(palabra)=>{
const Planillas = this.state.DataPlanillas
let Coincidencias = Planillas.filter(word => word.NOMBRES.includes(palabra));
console.log(Coincidencias.length)
if(Coincidencias.length > 0 && Coincidencias!==Planillas){
  this.setState({Planillas:Coincidencias})
  Coincidencias =[]
}else{
  this.setState({Planillas:this.state.DataPlanillas})
}
  }
    render(){
      
      
      return(
          <div className="table">
              <SerachBar word={this.filterWord}/>
            <Calendar data={this.state.Planillas} />
        </div>
      )
    }
  }
  export default HolaMundo; 