import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementObjectId } from '../features/dataSlice';

export function IncrementButton() {
    const dispatch = useDispatch()

    return <button onClick={() => dispatch(incrementObjectId())}>Increment Button</button>

}