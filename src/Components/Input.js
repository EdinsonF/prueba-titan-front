import React, { useContext } from 'react'
import {contextState} from '../context/StateProvider';
function Input() {
  const {recursoSelected} = useContext(contextState);
  return (
    
    <>
        <input type="number" min="1" pattern="^[0-9]+" name="cantidad" autoComplete="off" required/><span>{recursoSelected}</span>
    </>
  )
}

export default Input
