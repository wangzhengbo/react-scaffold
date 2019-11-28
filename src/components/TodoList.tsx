import React from 'react'
import { observer, useLocalStore } from 'mobx-react-lite'
import { set } from 'mobx'

export const TodoList = observer<{ initialTodos: string[] }>(({ initialTodos }) => {
  const todoRef = React.useRef<HTMLInputElement>()
  const store = useLocalStore(() => ({
    todos: createTodos(initialTodos),
    get pendingTodos() {
      return Object.keys(store.todos).filter(todo => store.todos[todo] === false)
    },
    get doneTodos() {
      return Object.keys(store.todos).filter(todo => store.todos[todo] === true)
    },
    addTodo: evt => {
      evt.preventDefault()
      // store.todos[todoRef.current.value] = false; // for mobx 5
      set(store.todos, todoRef.current.value, false) // for mobx 4
      todoRef.current.value = ''
    },
    toggleTodo: (todo: string) => {
      store.todos[todo] = !store.todos[todo]
    }
  }))

  const renderTodo = (done: boolean) => todo => <Todo key={todo} done={done} text={todo} onToggle={store.toggleTodo} />

  return (
    <form onSubmit={store.addTodo}>
      {store.pendingTodos.map(renderTodo(false))}
      {store.doneTodos.map(renderTodo(true))}
      <br />
      <input ref={todoRef} placeholder="I will..." />
      <button>Add todo</button>
    </form>
  )
})

function Todo({ text, done, onToggle }) {
  const onClick = React.useCallback(() => onToggle(text), [onToggle, text])
  return (
    <div onClick={onClick} key={text} style={{ textDecoration: done ? 'line-through' : 'inherit' }}>
      <span
        style={{
          display: 'inline-block',
          width: '1.5rem',
          textAlign: 'center'
        }}
      >
        {done ? '✔' : '👀'}
      </span>
      {text}
    </div>
  )
}

function createTodos(todos: string[]): Record<string, boolean> {
  return todos.reduce((acc, todo) => ({ ...acc, [todo]: false }), {})
}
