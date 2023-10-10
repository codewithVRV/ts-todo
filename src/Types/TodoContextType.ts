import TodoState from "../Context/TodoState"
import Action from "./Action"
import React from 'react';


type TodoContextType = {
    state: TodoState,
    dispatch: React.Dispatch<Action>
}

export default TodoContextType;