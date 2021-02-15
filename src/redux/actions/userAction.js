export const CREATE_USER = 'CREATE_USER';
export const GET_USER_LIST ='GET_USER_LIST';


export const createUser = (params) => {
    return {type: CREATE_USER, payload: params}
}

export const getUserList =(params) => {
    return {type: GET_USER_LIST, payload: params}
}

