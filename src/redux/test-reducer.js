
const SET_TOKEN = 'SET_TOKEN'


let initialState = {
    token: "",

    data: [
        {
          name: 'Paul', age: 22, email: 'paul@mail.ru', website: 'vk.com'
        },
        {
          name: 'Jenya', age: 25, email: 'jenya@mail.ru', website: 'vk.com'
        },
        {
          name: 'Oleg', age: 30, email: 'oleg@mail.ru', website: 'vk.com'
        },
    ],
    message: 'Это хуки, чекай'
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            debugger
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export const setToken = (token) => ({type: SET_TOKEN, token})
export const getUserArtifactData = (artifact_id) => {
    return (dispatch, getState) => {

    }
}

export default testReducer
