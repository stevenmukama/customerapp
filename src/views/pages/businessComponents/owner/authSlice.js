/* eslint-disable prettier/prettier */
// disable
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

//  send user value
export const values = createAsyncThunk('auth/values', async (user, thunkAPI) => {
    try {
      console.log('values')
      return await authService.values()
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })
