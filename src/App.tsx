import React from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoList } from './components/TodoList'
import { Counter, MultiplierInput } from './components/Counter'
import { SmartTodo } from './components/SmartTodo'
import PotentialError from './components/PotentialError'
import LifeCycleComponent from './components/LifeCycleComponent'
import LifeCyclePureComponent from './components/LifeCyclePureComponent'
import ForceUpdate from './components/ForceUpdate'
import RefComponent from './components/RefComponent'
import SetState from './components/SetState'
import DefaultProps from './components/DefaultProps'
import GetSnapshotBeforeUpdate from './components/GetSnapshotBeforeUpdate'
import ContextComponent from './components/ContextComponent'

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
      <PotentialError>
        <LifeCycleComponent name="LifeCycleComponentName" />
      </PotentialError>
      <LifeCyclePureComponent name="LifeCyclePureComponentName" />
      <ForceUpdate />
      <RefComponent />
      <SetState />
      <DefaultProps />
      <GetSnapshotBeforeUpdate message="hello" />
      <ContextComponent messages={[{text: 'message 1'}, {text: 'message 2'}]} />
    </div>
  )
}

export default App
