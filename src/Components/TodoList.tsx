import TodoComponent from './Todo';
import Todo from '../Interfaces/Todo';
import useTodoContext from '../Hooks/useTodoContext';


function TodoList () : JSX.Element {
    const {state} = useTodoContext()
    return (
        <>
            <h1>Todo List</h1>
            {state.todoList.map((todo : Todo) => <TodoComponent
                                                id={todo.id}  
                                                key={todo.id} text={todo.text} 
                                                completed={todo.completed}/>)}
        </>
    )
}
export default TodoList;