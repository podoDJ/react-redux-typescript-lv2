export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean
}

export const ADD_TODO = "todo/ADD_TODO"
export const DELETE_TODO = "todo/DELETE_TODO"
export const UPDATE_TODO = "todo/UPDATE_TODO"

export type ActionType = typeof ADD_TODO | typeof DELETE_TODO | typeof UPDATE_TODO;

// useSelector를 사용할 때 필요하다고 함. 
// 이  타입은 컨테이너 컴포넌트를 만들게 될 때 스토어에서 관리하고 있는 상태를 조회하기 위해 useSelector를 사용할 때 필요하다고 함. https://velog.io/@velopert/use-typescript-and-redux-like-a-pro
export interface RootState {
  todos: Todo[]
}