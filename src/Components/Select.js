import React, {optionsState, useContext} from 'react'

import {contextState} from '../context/StateProvider';
function Select({selected}) {
  const {recursoSelected} = useContext(contextState);
  return (
       <select onChange={selected} defaultValue={recursoSelected} name="select">
         <option>Seleccione</option>
         <option value="l" name="Agua" >Agua</option>
         <option value="g">Polvora</option>
         <option value="tubo">Gas</option>
         <option value="unidad">Hojas(filo)</option>
         <option value="unidad">Equipo maniobra</option>
       </select>
  )
}

export default Select
