import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RootState, Todo } from "../types";
import { GoToPage, ListCtn } from "./TodoStyle";
import { ButtonCtn } from "./common/Buttons";
import { deleteTodo, updateTodo } from "../redux/modules/todos";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams().id;
  const todoData: Todo[] = useSelector((state: RootState) => {
    return state.todos;
  });
  const [todo] = todoData.filter((item) => item.id === params);

  const handleTodoDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const handleTodoUpdate = (id: string) => {
    dispatch(updateTodo(id));
  };
  return (
    <ListCtn>
      <section key={todo.id}>
        <GoToPage onClick={() => navigate("/")}>홈으로 이동</GoToPage>
        <p>할 일 : {todo.title}</p>
        <p>내용 : {todo.content}</p>
        <p>완료 여부 : {todo.isDone.toString()}</p>
        <ButtonCtn backgroundColor="lightblue" color="white" size="small" onClick={() => handleTodoDelete(todo.id)}>
          삭제하기
        </ButtonCtn>
        <ButtonCtn backgroundColor="orange" color="white" size="small" onClick={() => handleTodoUpdate(todo.id)}>
          {todo.isDone ? "완료하기" : "취소하기"}
        </ButtonCtn>
      </section>
    </ListCtn>
  );
};

export default Detail;
