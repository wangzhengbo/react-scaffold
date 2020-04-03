import React from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoList } from './components/TodoList'
import { Counter, MultiplierInput } from './components/Counter'
import { SmartTodo } from './components/SmartTodo'
import LifeCycleComponent from './components/LifeCycleComponent'
import LifeCyclePureComponent from './components/LifeCyclePureComponent'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <SmartTodo />
      <MultiplierInput>
        {multiplier => <Counter multiplier={multiplier} initialCount={1} />}
      </MultiplierInput>
      <TodoList initialTodos={['Introduce MobX in React', 'Make a great app with MobX']} />
      <LifeCycleComponent name="LifeCycleComponentName" />
      <LifeCyclePureComponent name="LifeCyclePureComponentName" />
    </div>
  )
}

export default App
