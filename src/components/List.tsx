import { RootState, Todo } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import { ButtonCtn } from "./common/Buttons";
import { GoToPage, ListCtn } from "./TodoStyle";

interface ListProps {
  listIsDone: boolean;
}

const List = ({ listIsDone }: ListProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo: Todo[] = useSelector((state: RootState) => {
    return state.todos;
  });

  const handleTodoDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const handleTodoUpdate = (id: string) => {
    dispatch(updateTodo(id));
  };

  return (
    <ListCtn>
      <h1>{listIsDone ? "한 일" : "할 일"}</h1>
      {todo
        .filter((item) => item.isDone === listIsDone)
        .map((item) => {
          return (
            <section key={item.id}>
              <GoToPage onClick={() => navigate(`/${item.id}`)}>상세보기</GoToPage>
              <p>할 일 : {item.title}</p>
              <p>내용 : {item.content}</p>
              <p>완료 여부 : {item.isDone.toString()}</p>
              <ButtonCtn backgroundColor="lightblue" color="white" size="small" onClick={() => handleTodoDelete(item.id)}>
                삭제하기
              </ButtonCtn>
              <ButtonCtn backgroundColor="orange" color="white" size="small" onClick={() => handleTodoUpdate(item.id)}>
                {listIsDone ? "완료하기" : "취소하기"}
              </ButtonCtn>
            </section>
          );
        })}
    </ListCtn>
  );
};

export default List;
