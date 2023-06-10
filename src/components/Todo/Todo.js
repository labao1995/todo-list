import './Todo.scss';

function Todo({ todo, onCheck }) {
    return (
        <div className="todo-item">
            <input type='checkbox' onChange={() => onCheck(todo)} checked={todo.isCompleted} />
            <span className={todo.isCompleted ? "todo-completed" : ''}>{todo.name}</span>
        </div>
    )
}

export default Todo