import { useEffect, useState } from 'react'

import { HideSideBar } from './hideSidebar'

import { ThemeSwitcher } from 'components/themeSwitcher/themeSwitcher'
import './sidebar.scss'
import { setActiveBoard } from 'store/boards/boardsSlice'
import { useTypedDispatch, useTypedSelector } from 'types'

export const SideBar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false)
  const dispatch = useTypedDispatch()
  const { id } = useTypedSelector((state) => state.boards)
  //handle change active board
  const handleActiveBoard = (event: any) => {
    const id = event?.target.id
    const innerText = event?.target.innerText
    dispatch(setActiveBoard({ id: id, title: innerText }))
  }
  useEffect(() => {
    const currentBoard = document.getElementById(id)
    currentBoard?.classList.add('active')
    return () => {
      currentBoard?.classList.remove('active')
    }
  }, [id])

  return (
    <aside className={`sidebar ${isHidden && 'hidden'}`}>
      <HideSideBar isHidden={isHidden} setIsHidden={setIsHidden} />
      <div className='sidebar__container'>
        <div className='sidebar__logo'></div>

        <div className='sidebar__boards'>
          <span className='sidebar__boards__title'>Все доски ( 1 )</span>

          <div className='board' id='0' onClick={handleActiveBoard}>
            <div className='board__png'></div>
            <p className='board__title'>Запуск проекта</p>
          </div>
          <div className='board' id='1' onClick={handleActiveBoard}>
            <div className='board__png'></div>
            <span className='board__title'>Маркетинговый план</span>
          </div>
          <div className='board' id='2' onClick={handleActiveBoard}>
            <div className='board__png'></div>
            <span className='board__title aboba'>Roadmap</span>
          </div>
          <div className='board '>
            <div className='board__png new'></div>
            <span className='board__title new'>+ Создать новую доску</span>
          </div>
        </div>

        <ThemeSwitcher />
      </div>
    </aside>
  )
}
