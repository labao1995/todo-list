import './TodoList.scss';
import Todo from '../Todo/Todo';

function TodoList({todoList, onCheck}) {

  return (
    <div className='todo-list-item'>
        {todoList.map((todo,index) =>(
            <Todo key={index} todo={todo} onCheck={onCheck}/>
        ))}
    </div>
  )
}
export default TodoList