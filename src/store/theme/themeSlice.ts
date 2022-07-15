import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'dark',
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      return action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
