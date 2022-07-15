import { combineReducers } from '@reduxjs/toolkit'

import { boardsSlice } from './boards/boardsSlice'
import { themeSlice } from './theme/themeSlice'

export const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  boards: boardsSlice.reducer,
})
