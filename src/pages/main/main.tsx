import React from 'react'

import { SideBar } from 'components/sidebar/sidebar'
import { Todos } from 'components/todos/todos'
import { TopMenu } from 'components/topMenu/topMenu'

export const Main = () => {
  return (
    <main style={{ display: 'flex', width: '100vw' }}>
      <SideBar />
      <div style={{ display: 'flex', flexDirection: 'column', width: '79vw', marginLeft: '20vw' }}>
        <TopMenu />
        <Todos />
      </div>
    </main>
  )
}
