import TodoComponent from './Todo';
import Todo from '../Interfaces/Todo';
import useTodoContext from '../Hooks/useTodoContext';
import AddTodo from './AddTodo';


function TodoList () : JSX.Element {
    const {state} = useTodoContext()
    return (
        <>
            <h1>Todo List</h1>
            <AddTodo />
            {state.todoList.map((todo : Todo) => <TodoComponent
                                                id={todo.id}  
                                                key={todo.id} text={todo.text} 
                                                completed={todo.completed}/>)}
        </>
    )
}
export default TodoList;