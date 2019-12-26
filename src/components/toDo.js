import React from 'react';
import {useListInput} from '../hooks/useListInput';

function ToDo() {
 const [list, input, onInput, addInput, removeInput, remove] = useListInput(['1','2','3','4'])

  return (
    <>
    <h1>Lista de tareas:</h1>
    {list && list.map(item => <li>{item}</li>)} 
    <form>
      <label>Qué hacer?</label>
      <input  onChange={event => onInput(event)
        }
        value={input}
        type="text"
        width="10em"></input>
    </form>
    <button type='submit' onClick={()=> {addInput()}}>Agregar</button>
    <button type='submit' onClick={() => {removeInput()}}>Quitar</button>
   

    </>
  );
}

export default ToDo;
