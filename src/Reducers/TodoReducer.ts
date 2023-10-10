import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../Constants/ActionConstants";
import TodoState from "../Context/TodoState";
import Action from "../Types/Action";

function TodoReducer (state: TodoState, action: Action) {

    if(action.type == ADD_TODO) {
        const {text} = action.payload as {text: string}
        if(!text) return state;
        return {
            todoList: [
                ...state.todoList, {
                    id: state.todoList[state.todoList.length - 1]?.id + 1 || 1,
                    text: text,
                    completed: false,
                }
            ]
        }
    }
    else if (action.type == TOGGLE_TODO) {
        const {id} = action.payload as {id: number}
        if(!id) return state;
        return {
            todoList: state.todoList.map(todo => (todo.id == id) ? {...todo, completed: !todo.completed} : todo)
        }
    }
    else if (action.type == DELETE_TODO) {
        const {id} = action.payload as {id: number}
        if(!id) return state;
        return {
            todoList: state.todoList.filter(todo => todo.id != id)
        }
    }
    return state;
}

export default TodoReducer;