import React from 'react'
import { useSelector } from 'react-redux'
import Photo from './Photo'
import { getApiData } from '../features/dataSlice';

const ContentWrapper = () => {
    const apiData = useSelector(getApiData);

    return (
        <div className="ContentWrapper" style={{ 'backgroundColor': 'white' }}>
            <h1>{apiData.title}</h1>
            <h2>{apiData.objectName}</h2>
            <h3>{apiData.department}</h3>
            <h4>{apiData.culture}</h4>
            <Photo />

            <div className="buffer"></div>
        </div>
    )
}

export default ContentWrapper