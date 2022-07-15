import React from 'react'
import './todoColumn.scss'

export const TodoColumn: React.FC = () => {
  return (
    <div className='todoColumn'>
      <div className='todoColumn__title'>
        <div className='todoColumn__title__circle' style={{ backgroundColor: 'red', boxShadow: '0 0 3px 0 red' }}></div>
        <p>TODO ( 4 )</p>
      </div>
      <div className='todoColumn__todo'>
        <p className='todoColumn__todo__title'>Build UI for onboarding flow</p>
        <p className='todoColumn__todo__text'>0 из 1 побочных задач</p>
      </div>
      <div className='todoColumn__todo'>
        <p className='todoColumn__todo__title'>Build UI for onboarding flow</p>
        <p className='todoColumn__todo__text'>0 из 1 побочных задач</p>
      </div>
      <div className='todoColumn__todo'>
        <p className='todoColumn__todo__title'>Build UI for onboarding flow</p>
        <p className='todoColumn__todo__text'>0 из 1 побочных задач</p>
      </div>
    </div>
  )
}
