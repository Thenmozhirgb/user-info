import { CREATE_USER, GET_USER_LIST, SIGN_IN_SUCESS, SIGN_OUT_SUCESS } from "../actions/userAction";

const initialState = {
    id: '',
    name: '',
    email: '',
    userid: '',
    password: '',
    userList: [],
    isSignedIn : false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                id: action.payload._id,
                name: action.payload.name,
                email: action.payload.email,
                userid: action.payload.userid,
                password: action.payload.password
            }
        case GET_USER_LIST:
            return {
                ...state,
                userList: action.payload
            }
        case SIGN_IN_SUCESS:
            return {
                ...state,
                isSignedIn: true
            }
        case SIGN_OUT_SUCESS:
            return {
                ...state,
                isSignedIn: false
            }
        default:
            return state;
    }
}
