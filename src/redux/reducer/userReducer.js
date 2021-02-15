import { CREATE_USER, GET_USER_LIST } from "../actions/userAction";

const initialState = {
    id: '',
    name: '',
    email: '',
    userid: '',
    password: '',
    userList: []
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
        default:
            return state;
    }
}