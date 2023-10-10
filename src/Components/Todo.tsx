import { TOGGLE_TODO } from "../Constants/ActionConstants";
import useTodoContext from "../Hooks/useTodoContext";

function Todo ({text, completed, id} : {text:string, completed:boolean, id: number}) {

    const {dispatch} = useTodoContext()

    function handleTodoToggle () {
        dispatch({type: TOGGLE_TODO, payload: {id: id}})
    }
    return (
        <>
          <li>
            {text} {" "}
            <input type="checkbox" checked={completed}
                onChange={handleTodoToggle}
            />
          </li>
        </>
    )
}

export default Todo;