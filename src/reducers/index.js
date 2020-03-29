const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_FAVORITE':
            const newFavorite = state.mylist.filter(item => item.id === action.payload.id);
            let newItem;
            
            if(newFavorite.length !== 1) {
                newItem = {
                    ...state,
                    mylist: [...state.mylist, action.payload]
                }
            } else {
                newItem = {
                    ...state
                }
            }

            return newItem;

        case 'DELETE_FAVORITE':
            return {
                ...state,
                mylist: state.mylist.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload 
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload 
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload)) 
                || state.originals.find(item => item.id === Number(action.payload))
                || []
            }
        default:
            return state;
    }
}

export default reducer;