import React from 'react'

import { TodoColumn } from './todoColumn/todoColumn'
import './todos.scss'

export const Todos: React.FC = () => {
  return (
    <div className='todos'>
      <TodoColumn />
      <TodoColumn />
      <TodoColumn />
    </div>
  )
}
