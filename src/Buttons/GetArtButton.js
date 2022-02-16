import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../features/dataSlice';

export function GetArtButton() {
    const dispatch = useDispatch()

    return <button onClick={() => dispatch(fetchData())}>Thunk Button</button>

}