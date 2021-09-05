import React, { useContext } from 'react'
import Boton from './Boton'
import Input from './Input'
import Select from './Select'
import Table from 'react-bootstrap/Table'
import { v4 as uuid_v4 } from 'uuid';
import {contextState} from '../context/StateProvider';

function Pantalla3() {

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

  }

  function eliminar (id){
    console.log(id);

    setForm( form.filter( dat => dat.id != id))
  }
  

  return (
    <div className="pantalla3_container">
       <div className="pantalla3_section">
          
         <div className="pantalla3_form">
          <form onSubmit={enviar}>
             <div><Select selected={selected}/></div> 
             <div><Input/></div> 
             <Boton/>
          </form>
         </div>

         <div className="pantalla3_lista">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th width="170">Recurso</th>
                  <th width="170">Cantidad</th>
                  <th width="170">Fecha ingreso</th>
                  <th width="170">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {form.map((dat, index) => {
                  return (<tr key={index}>
                            <td>{dat.recurso}</td>
                            <td>{dat.cantidad} {dat.medida}</td>
                            <td>{dat.fecha}</td>
                            <td className="btnDelete" onClick={() => eliminar(dat.id)}><i className="fas fa-trash-alt"></i></td>
                          </tr>)
                })}
              
              </tbody>
            </Table>
         </div>
       </div>
    </div>
  )
}

export default Pantalla3
