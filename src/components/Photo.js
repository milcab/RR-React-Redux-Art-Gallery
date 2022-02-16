import React from 'react'
import { useSelector } from 'react-redux'
import { getImageURL } from '../features/dataSlice';

const Photo = () => {
    const imageURL = useSelector(getImageURL);

    return (
        <div className="Photo">
            <img src={imageURL} style={{ width: "200px", height: "auto" }} alt="author" />
        </div>
    )
}

export default Photo