export const increment = num => {
    return {
        type: 'INCREMENT',
        payload: num
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}

export const login = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const username_login = payload => {
    return {
        type: 'USERNAME',
        payload
    }
}

export const addPosting = payload => {
    return {
        type: 'ADD_POSTING',
        payload
    }
}

export const handlePostingStatus = payload => {
    return {
        type: 'MOD_POSTING',
        payload
    }
}