import { useTypedSelector } from 'types'
import './topMenu.scss'
export const TopMenu = () => {
  const title = useTypedSelector((state) => state.boards.title)
  return (
    <div className='top__menu'>
      <p className='top__menu__title'>{title}</p>
      <button className='top__menu__button'>+ Добавить задачу</button>
    </div>
  )
}
