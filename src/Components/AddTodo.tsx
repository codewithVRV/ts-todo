import { useState } from "react";
import useTodoContext from "../Hooks/useTodoContext";
import { ADD_TODO } from "../Constants/ActionConstants";
function AddTodo () {

    const [todoText, setTodoText] = useState<string>("")
    const {dispatch} = useTodoContext()

    function handleAddTodo() {
        dispatch({type: ADD_TODO, payload: {text: todoText}})
        setTodoText("")
    }
    return (
        <>
            <input type="text" placeholder="write your next task here.."
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </>
    )
}

export default AddTodo;