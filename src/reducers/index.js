import * as types from '@/actions';

//Store에 저장되는 Stae 객체
const initialState = {
    todos: [
        {
            id: 0,
            text: '',
            checked: false,
        }
    ]
};

//Reducer 함수
export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_TODO:
        case types.FETCH_TODOS:
            return Object.assign({}, state, { todos: action.payload });
        default:
            return state;
    }
}