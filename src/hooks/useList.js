import {useState, useEffect} from 'react';

export function useList(arr) {
    const [list, setList] = useState(arr||[]); /*el estado inicial toma como argumento 
    un parámetro o un array vacío para evitar problemas con el spread operator en 'add'*/

    /*'add' copia la lista actual y le agrega un item nuevo*/
    function add(item) {
        item &&
        setList([...list, item]);
    }

/*'remove' busca el índice del item elegido, crea un nuevo array que filtra 
el item segun su índice y luego reemplaza el estado actual de list con el 
nuevo array*/
  
    function removeByIndex(index) {
        const newList = list.filter((x, i) => i != index);
        setList(newList);
    }

    function removeByContent(item) {
        const target = list.findIndex(x => x == item );
        removeByIndex(target)
    }
    
    return [list, add, removeByIndex, removeByContent];
} 