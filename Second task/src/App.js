import React from 'react';

import { ListItem } from './components/ListItem';
import { TaskField } from './components/TaskField';
import { Contact } from './components/Contact';
function App() {
  const [tasks, setTasks] = React.useState([
    {
      text: 'Изучить ReactJS',
      completed: true,
    },
    {
      text: 'Разработать ToDo на ReactJS',
      completed: false,
    },
    {
      text: 'Деплой React-приложения',
      completed: true,
    },
    {
      text: 'Проверка автоматической сборки',
      completed: false,
    },
    {
      text: 'Загрузили проект на Vercel и Netlify',
      completed: true,
    },
  ]);

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const onRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, curIdx) => index !== curIdx));
  };

  const onAddTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);
  };

  return (
    <div className="main">
      <div className="todo">
        <div className="todo__header">
          <h4>Мои задачи</h4>
        </div>
        <TaskField onAddTask={onAddTask} />
        <div className="todo__list">
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              index={index}
              text={task.text}
              completed={task.completed}
              onToggleCompleted={onToggleCompleted}
              onRemoveTask={onRemoveTask}
            />
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;
