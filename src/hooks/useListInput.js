import {useState, useEffect} from 'react';
import {useList} from './useList';
import {useInput} from './useInput';

export function useListInput(arr) {
    const [list, add, removeByIndex, removeByContent] = useList(arr);
    const [input, onInput, reset] = useInput();

    function addInput() {
        add(input);
        reset();
    }
    function removeInput() {
        removeByContent(input);
        reset();

    }
    return [list, input, onInput, addInput, removeInput, removeByIndex];

}