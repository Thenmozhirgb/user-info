export const CREATE_USER = 'CREATE_USER';
export const GET_USER_LIST ='GET_USER_LIST';
export const SIGN_IN_SUCESS ='SIGN_IN_SUCESS';
export const SIGN_OUT_SUCESS = 'SIGN_OUT_SUCESS';

export const createUser = (params) => {
    return {type: CREATE_USER, payload: params}
}

export const getUserList =(params) => {
    return {type: GET_USER_LIST, payload: params}
}

export const signInSuccess =() => {
    return {type: SIGN_IN_SUCESS}
}

export const signOutSuccess =() => {
    return {type: SIGN_OUT_SUCESS}
}
