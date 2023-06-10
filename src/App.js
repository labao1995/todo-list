import './App.scss';
import { v4 } from 'uuid';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [tabList, setTabList] = useState([
    { isActive: true, tabCheck: 'all', title: 'All', href: '#' },
    { isActive: false, tabCheck: 'active', title: 'Active', href: '#' },
    { isActive: false, tabCheck: 'completed', title: 'Completed', href: '#' }
  ]);
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const displayTodoList = todoList.filter(item => item.isDisplay)

  const handleAddToto = () => {
    setTodoList([...todoList, { id: v4(), name: todo, isCompleted: false, isDisplay: true }])
    setTodo('')
  }

  const handleCheck = (todo) => {
    setTodoList(prev => prev.map((todoItem, index) => {
      return todoItem.id === todo.id ? { ...todoItem, isCompleted: !todoItem.isCompleted } : todoItem
    }))
  }

  const handleToggleState = (tab, index) => {
    const tabCheck = tab.tabCheck;
    setTabList(prev => prev.map((item, indexTab) => ({ ...item, isActive: indexTab === index })));
    setTodoList(prev => prev.map(item => {
      let isDisplay = false;
      if (tabCheck === 'all') {
        isDisplay = true;
      } else {
        isDisplay = tabCheck === 'active' ? !item.isCompleted : item.isCompleted;
      }
      return { ...item, isDisplay }
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="header-top">
          <h1>#todo</h1>
        </div>
        <div className="header-bottom">
          <ul className="header-menu">
            {
              tabList.map((item, index) => (
                <li key={index} onClick={() => handleToggleState(item, index)}><a className={item.isActive ? 'active' : ''} href={item.href}>{item.title}</a></li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className='todo-list'>
        <div className='todo-input-field'>
          <input placeholder="add details" onChange={e => setTodo(e.target.value)} value={todo} />
          <button onClick={handleAddToto}>Add</button>
        </div>
        <div className='todo-task-field'>
          <TodoList todoList={displayTodoList} onCheck={handleCheck} />
        </div>
      </div>
    </div>
  );
}

export default App;
