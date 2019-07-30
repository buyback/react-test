const initialState = ( {username: '', password: ''})

const usernameInput_Reducer = (state = initialState, action) => {
    if (action.type === 'USERNAME') {
        return Object.assign({}, state, {       // First we return a new state, ie a new JavaScript object with Object.assign. 
            username : action.payload.username,
            password: action.payload.password
        });                                                    // The resulting state is a copy of the initial state.
    }

    return state;
};

export default usernameInput_Reducer;