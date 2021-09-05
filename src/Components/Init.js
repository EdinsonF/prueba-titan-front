import React, { useContext } from 'react'
import {contextState} from '../context/StateProvider';
import Pantalla1 from './Pantalla1';
import Pantalla2 from './Pantalla2';
import Pantalla3 from './Pantalla3';


function Init() {
  const {componentes} = useContext(contextState);
 
  return (
    <>

    { componentes.pantalla1 && <Pantalla1/>}
    { componentes.pantalla2 && <Pantalla2/>}
    { componentes.pantalla3 && <Pantalla3/>}


    </>
  )
}

export default Init
