import { configureStore } from '@reduxjs/toolkit'
import testsReducer from '../components/tests/testsSlice'

export default configureStore({
    reducer: {
        tests: testsReducer
    }
})
