const initialState = {
    wastes: []
}

const finances = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WASTE': {
            return {
                ...state,
                wastes: [...state.wastes, action.value]
            }
        }
        case 'DELETE_WASTE': {
            return {
                ...state,
                wastes: state.wastes.filter(item => item.id !== action.id)
            }
        }
        default: {
            return state
        }
    }
}

export default finances