
const reducer = (state = {}, action) => {
    switch(action.type) {
        case "DISH_BOOL": {
            return {...state, dishBool: action.data}
        }
        case "REST_SIGN_TOG": {
            return {...state, restSignTog: action.data}
        }
        case "SIGN_LOG_TOG": {
            return {...state, signLogTog: action.data}
        }
        case "REST_HOME_TOG": {
            return {...state, restHomeTog: action.data}
        }
        case "USER_LOGIN_BOOL": {
            return {...state, userLogInBool: action.data}
        }

        case "SET_USER": {
            return {...state, user: action.data}
        }
        case "REMOVE_USER": {
            return {...state, user:{}}
        }

        case 'CHECK':{

            return {...state,check:action.data}

        }
        default: {
            return state;
        }
    }
}

export default reducer;