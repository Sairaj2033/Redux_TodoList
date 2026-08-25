import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
   const todos = useSelector((state) => state.todos.todos);
    console.log(todos);
    
    const dispatch = useDispatch();
 


   const clickHandler = (id) =>  {
    console.log("delete",id);
    dispatch(deleteTodo(id));
    
   };

    const click1Handler = (id) =>  {
    console.log("Marked as Done!",id);
    dispatch(markAsDone(id));
    
   
    
   };


    return ( 
        <>
        <AddForm/>
        <h3>Todos List App</h3>
        <ul style={{ listStylePosition: "inside", padding: 0 }}  > 
            {todos.map((todo) => (
                <li key={todo.id}> <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>{todo.task}</span>
                  <button  onClick={ () => clickHandler(todo.id)} >Delete</button>
                  <button  onClick={  () => click1Handler(todo.id)} >MarkAsDone</button>
                  </li>
            ))}
        </ul>
        </>
    );
}
