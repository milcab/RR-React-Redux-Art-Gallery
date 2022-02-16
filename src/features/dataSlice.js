export const fetchData = () => {
    return async (dispatch, getState) => {
        // I will call some api and eventually do a real dispatch
        const { data: { objectId } } = getState()
        const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
        const response = await fetch(url)
        const resData = await response.json()

        dispatch({
            type: "API_DATA",
            payload: resData
        })
    }
}

export const incrementObjectId = () => ({
    type: 'OBJECT_ID_INCREMENT'
})

export const decrementObjectId = () => ({
    type: 'OBJECT_ID_DECREMENT'
})

export const setCustomObjectId = (customId) => ({
    type: 'OBJECT_ID_CUSTOM',
    payload: customId
})

// selectors
export const getObjectId = state => state.data.objectId;
export const getImageURL = state => state.data.apiData?.primaryImage;
export const getApiData = state => state.data.apiData || {};

// reducer
const initialState = {
    objectId: 1,
    apiData: null,
}

export default function dataSlice(state = initialState, action) {
    switch (action.type) {
        case "API_DATA":
            return {
                ...state,
                apiData: action.payload
            }
        case "OBJECT_ID_INCREMENT":
            return {
                ...state,
                objectId: state.objectId + 1
            }
        case "OBJECT_ID_DECREMENT":
            return {
                ...state,
                objectId: state.objectId - 1
            }
        case "OBJECT_ID_CUSTOM":
            return {
                ...state,
                objectId: parseInt(action.payload, 10)
            }
        case "RESET":
            return initialState
        default:
            return state
    }
}

