import {useState, useEffect} from 'react';
import {useList} from './useList';
import {useInput} from './useInput';

export function useListInput(arr) {
    const [list, add, remove] = useList(arr);
    const [input, onInput, reset] = useInput();

    function addInput() {
        add(input);
        reset();
    }
    function removeInput() {
        remove(input);
        reset();

    }
    return [list, input, onInput, addInput, removeInput]

}