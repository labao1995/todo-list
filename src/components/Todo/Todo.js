import './Todo.scss'
import { useState } from 'react';

function Todo() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState(() => {
        const saveLocalTodos = JSON.parse(localStorage.getItem("todos"));
        return saveLocalTodos ?? [];
    });
    const [completed, setCompleted] = useState();

    const handleAddTodo = () => {
        setTodos(prev => {
            const listTodo = [...prev, todo]
            const jsonTodo = JSON.stringify(listTodo);
            localStorage.setItem('todos', jsonTodo)
            return listTodo;
        })
        setTodo('')
    }

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        const jsonNewTodos = JSON.stringify(newTodos)
        localStorage.setItem("todos", jsonNewTodos);
        setTodos(newTodos)
    }

    const handleDeleteAll = () => {
        const deleteAll = []
        const jsonDelete = JSON.stringify(deleteAll)
        localStorage.setItem("todos", jsonDelete);
        setTodos(deleteAll)
    }

    return (
        <div className='main-todo'>
            <div className="todo-input">
                <input value={todo} onChange={e => setTodo(e.target.value)} placeholder='add details' />
                <button disabled={!todo} onClick={handleAddTodo}>Add</button>
                <button disable={!todos} onClick={handleDeleteAll} className='delete-all'>Deleted All</button>
            </div>
            <div className="todo-task">
                <ul className='todo-list'>
                    {todos.map((job, index) => (
                        <li key={index} >
                            <input type="checkbox"
                                onChange={e => setCompleted(e.target.checked)}
                            />
                            <p className={completed ? 'completed-todo' : ''}>
                                {job}
                            </p>
                            <p className='delete-todo' onClick={() => handleDeleteTodo(index)}> Delete </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo