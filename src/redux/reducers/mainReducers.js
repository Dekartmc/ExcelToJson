const initialState = {
    valor: "empty"
};

export default function mainReducers(state = initialState, action) {
    switch(action.type) {
        case 'ALGO': {
            return {
                ...state,
                valor: action.payload
            }
        }
        default: return state
    }
}