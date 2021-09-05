import React, { useContext, useState } from 'react'
import Boton from './Boton'
import Input from './Input'
import Select from './Select'
import { v4 as uuid_v4 } from 'uuid';

import {contextState} from '../context/StateProvider'

function Pantalla2() {
  const { setForm, form,setRecursoSelected,setComponentes} = useContext(contextState);



  const selected = (e) => {
    const rs = e.target.value;
    setRecursoSelected(rs);
    
  }

  const enviar = (e) => {
    e.preventDefault();
    let index=e.target.select.selectedIndex;
    let t = new Date();
     
    setForm([...form, {
        id: uuid_v4(),
        cantidad: e.target.cantidad.value, 
        recurso: e.target.select[index].text,
        medida: e.target.select.value,
        fecha : t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate()
      }])

      setComponentes({
        pantalla1: false,
        pantalla2: false,
        pantalla3: true
      })
   

  }
  return (
    <div className="pantalla2_container">
      <div className="pantalla2_form">
      <form onSubmit={enviar}>
        <div className="pantalla2_input">
        <Input setForm={setForm}/>
        </div>
          
        <div>
          <Select selected={selected}/>
        </div>
        <div className="pantalla2_btn">
          <Boton />
        </div>
        </form>
      </div>
    </div>
  )
}

export default Pantalla2
