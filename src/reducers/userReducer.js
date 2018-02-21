export const initialState = {
    username: '',
    full_name: '',
    email: '',
    account_balance: 0
};

export const userActions = {
    RESET_USER_DATA: 'RESET_USER_DATA',
    SET_USER_DATA: 'SET_USER_DATA',
    INCREASE_BALANCE: 'INCREASE_BALANCE',
    DECREASE_BALANCE: 'DECREASE_BALANCE'
};

export const resetUserData = () => {
    return {
        type: userActions.RESET_USER_DATA
    };
};

export const setUserData = user => {
    return {
        type: userActions.SET_USER_DATA,
        user
    };
};

export const increaseBalance = balance => {
    return {
        type: userActions.INCREASE_BALANCE,
        balance
    };
};

export const decreaseBalance = balance => {
    return {
        type: userActions.DECREASE_BALANCE,
        balance
    };
};

/**
 * User reducer.
 * @param {object} state
 * @param {object} action
 */
const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case userActions.SET_USER_DATA:
        return Object.assign({}, state, {
            ...action.user
        });
    case userActions.RESET_USER_DATA:
        return Object.assign({}, state, initialState);
    case userActions.INCREASE_BALANCE:
        return Object.assign({}, state, {
            account_balance: state.account_balance + action.balance
        });
    case userActions.DECREASE_BALANCE:
        return Object.assign({}, state, {
            account_balance: state.account_balance - action.balance
        });
    default:
        return state;
    }
};

export default userReducer;
