import {Dispatch} from "redux";
import axios from "axios";
import {ITodoAction, TodoActionTypes} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<ITodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке todo'
            })
        }
    }
}

export function setTodoPage(page: number): ITodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}