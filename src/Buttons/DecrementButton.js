import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementObjectId } from '../features/dataSlice';

export function DecrementButton() {
    const dispatch = useDispatch()

    return <button onClick={() => dispatch(decrementObjectId())}>Decrement Button</button>

}