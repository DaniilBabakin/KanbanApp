import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BoardsInitial {
  id: string
  title: string
  data: []
}
const initialState: BoardsInitial = {
  id: '0',
  title: '',
  data: [],
}
export const boardsSlice = createSlice({
  name: '@@boards',
  initialState,
  reducers: {
    setActiveBoard(state, action: PayloadAction<{ id: string; title: string }>) {
      state.id = action.payload.id
      state.title = action.payload.title
    },
  },
})

export const { setActiveBoard } = boardsSlice.actions
export default boardsSlice.reducer
