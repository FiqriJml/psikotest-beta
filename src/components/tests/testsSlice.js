import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    {id: "2de34", name: "Test Kecakapan", subSoal: []},
    {id: "2we34", name: "Test Ketelitian", subSoal: []}
]

export const testsSlice = createSlice({
    name: "tests",
    initialState,
    reducers: {
        testAdded : {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(name){
                return{
                    payload: {
                        id: nanoid(),
                        name,
                        subSoal: []
                    }
                }
            }
        },
        testUpdated(state, action){
            const {id, name} = action.payload
            const existingTest = state.find(test => test.id === id)
            if(existingTest){
                existingTest.name = name
            }
        }
    }
})

export const {testAdded, testUpdated} = testsSlice.actions

export default testsSlice.reducer