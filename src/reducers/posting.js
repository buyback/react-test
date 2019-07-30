const initialState = {
    postings : []
}

//The state is immutable and cannot change in place. 

function postingReducer(state = initialState, action) {
    if (action.type === 'ADD_POSTING') {
        return Object.assign({}, state, {       // First we return a new state, ie a new JavaScript object with Object.assign. 
            postings : state.postings.concat(action.payload)    //Then we can use Array.prototype.concat in place of Array.prototype.push for keeping the initial array immutable
        });                                                    // The resulting state is a copy of the initial state.
    }
    else if (action.type === 'MOD_POSTING') {
        console.log("payload : " + action.payload.id);
        console.log("payload : " + action.payload.title);
        console.log("payload : " + action.payload.content);
        for(var i = 0; i < state.postings.length; i++) {
            if (state.postings[i]._id === action.payload.id){
                state.postings[i].posting_status = !state.postings[i].posting_status;
                if (state.postings[i].posting_status)
                    state.postings[i].posting_status = 1;
                else
                    state.postings[i].posting_status = 0;
            }
        }
        return state;
    }
    return state;
}

export default postingReducer;