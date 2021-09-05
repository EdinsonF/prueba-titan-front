
import React, { useContext } from 'react'
import Select from './Select'
import {contextState} from '../context/StateProvider';


function Pantalla1() {

  const {setRecursoSelected, setComponentes} = useContext(contextState);

  const selected = (e) => {
    const rs = e.target.value;
    setRecursoSelected(rs);
    setComponentes({
      pantalla1: false,
      pantalla2: true,
      pantalla3: false
    })
  }
  return (
    <div className="pantalla1_container">
      <div className="pantalla1_form">
        <Select selected={selected}/>
      </div>
    </div>
  )
}

export default Pantalla1
