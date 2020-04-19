const initialState = {
    isOpenMenu: false
}

const common = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_MENU': {
            return {
                ...state,
                isOpenMenu: !state.isOpenMenu
            }
        }
        default: {
            return state
        }
    }
}

export default common