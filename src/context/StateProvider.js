
import React, { createContext, useState } from 'react'

export const contextState = createContext();

function StateProvider({children}) {

  const [componentes, setComponentes] = useState({
    pantalla1: true,
    pantalla2: false,
    pantalla3: false
  })

  const [recursoSelected, setRecursoSelected] = useState("");

  const [form, setForm] = useState([])

  return (
    <contextState.Provider
    value={{
        componentes,
        setRecursoSelected,
        recursoSelected,
        setComponentes,
        setForm,
        form
        }}
    >

      {children}
    </contextState.Provider>
  )
}

export default StateProvider
