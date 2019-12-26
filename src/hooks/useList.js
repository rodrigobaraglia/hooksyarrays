import {useState, useEffect} from 'react';

export function useList(arr) {
    const [list, setList] = useState(arr);

    function add(item) {
        setList([...list, item]) 
    }
    function remove(item) {
        const index = list.findIndex(x => x === item );
        const newList = list.filter((x, i) => i != index)
        setList(previousList => newList)
    }
    
    return [list, add, remove]
} 