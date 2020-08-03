import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import testsReducer from '../components/tests/testsSlice'

const store = configureStore({
    reducer: {
        tests: testsReducer
    }
})

export default store