import {useState} from 'react';

export function useInput() {
    const [input, setInput] = useState();

    function onInput(e) {
        setInput(e.target.value)

    }
    function reset() {
        setInput(previousState => '')
    }
    return [input, onInput, reset]


}

