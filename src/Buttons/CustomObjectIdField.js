import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setCustomObjectId } from '../features/dataSlice';

export function CustomObjectIdField() {
    const dispatch = useDispatch()
    const field = useRef(null)

    return (
        <input
            ref={field}
            type="number"
            min={1}
            onChange={(event) => {
                if (field.current) {
                    dispatch(setCustomObjectId(field.current.value))
                }
            }}
            placeholder="custom object id"
        />
    );

}