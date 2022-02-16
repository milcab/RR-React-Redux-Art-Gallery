import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomObjectId, getObjectId } from '../../features/dataSlice';

export function CustomObjectIdField() {
    const dispatch = useDispatch()
    const objectId = useSelector(getObjectId)
    const field = useRef(null)

    return (
        <input
            ref={field}
            type="number"
            min={1}
            value={objectId}
            onChange={(event) => {
                if (field.current) {
                    dispatch(setCustomObjectId(field.current.value))
                }
            }}
            placeholder="custom object id"
        />
    );

}