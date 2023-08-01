import shortid from "shortid"
import { ADD_TODO, ActionType, DELETE_TODO, Todo, UPDATE_TODO } from "../../types"

const initialState: Todo[] = [{
  id: shortid.generate(),
  title: "리액트1",
  content: "리액트1 공부하기",
  isDone: false
}]


export const addTodo = (payload: Todo) => {
  return {
    type: ADD_TODO,
    payload,
  }
}

export const deleteTodo = (payload: string) => {
  return {
    type: DELETE_TODO,
    payload,
  }
}

export const updateTodo = (payload: string) => {
  return {
    type: UPDATE_TODO,
    payload,
  }
}
// 여기서 payload의 타입이 Todo | string인 이유는 addTodo의 경우 payload의 타입이 Todo객체이지만, id만 받아온 경우 타입이 string이기 때문이다.
const todos = (state = initialState, action: { type: ActionType, payload: Todo | string}) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload)
    case UPDATE_TODO:
      return state.map((todo) => {
        if(todo.id === action.payload) {
          return {...todo, isDone: !todo.isDone}
        } else {
          return todo
        }
      })
      default:
        return state
  }
}

export default todos