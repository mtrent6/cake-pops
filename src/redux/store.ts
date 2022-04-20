import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './orderReducer'

export default configureStore({
  reducer: orderReducer,
})
