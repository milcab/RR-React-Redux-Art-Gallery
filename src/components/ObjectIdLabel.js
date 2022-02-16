import React from 'react'
import { useSelector } from 'react-redux'
import { getObjectId } from '../features/dataSlice';

const ObjectIdLabel = () => {
    const objectId = useSelector(getObjectId);

    return (
        <div className="object-id-label">
            Object ID: {objectId}
        </div>
    )
}

export default ObjectIdLabel