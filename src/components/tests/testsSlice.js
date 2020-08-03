import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import app from '../../fbConfig'

const initialState = {
    tests: [],
    status: 'idle',
    error: null
  }

const db = app.firestore()
const dbTests = db.collection('tests')

export const updateTest = createAsyncThunk(
  'tests/updated', async (test) => {
    const response = await dbTests.doc(test.id).update(test)
    .then( () => {
      return test
    }).catch(err =>{
      console.log("Error updating document: ", err)
    })
    return response
  }
)
export const deleteTest = createAsyncThunk(
  'tests/deleted', async (testId) => {
    const query = dbTests.doc(testId).delete().then().catch(err =>{
      console.log("Error deleting document: ", err)
    })
    const response = await query
    return response
  }
)
export const addNewTest = createAsyncThunk(
  'tests/added',
  // The payload creator receives the partial `{members}` object
  async newTest => {
      const response = await dbTests.add(newTest)
          .then(doc => {
              return {
                  ...newTest,
                  id: doc.id
              }
          })
          .catch(error => {
              console.error("Error adding document: ", error);
          });
      // The response includes the complete test object, including unique ID
      return response
  }
)
export const addPaket = createAsyncThunk(
  'tests/paket/added', async (test) => {
    let jmlPaket = 1
    if(test.paket){
      jmlPaket = test.paket + 1
    }
    const mPaket = "paket"+jmlPaket
    const newTest = {
      paket: jmlPaket,
    }
    const response = await dbTests.doc(test.id).update(newTest)
    .then( () => {
      console.log("updating document succsess")
      addPaketCollection(test.id, mPaket)
      return test
    }).catch(err =>{
      console.log("Error updating document: ", err)
    })
    return response
  }
)
export const deletePaket = createAsyncThunk(
  'tests/paket/deleted', async (paket) => {
    const {paketId, testId} = paket
    const response = await dbTests.doc(testId).collection('paket').doc(paketId).delete()
      .then(()=> console.log("success")).catch((err)=> console.log("Error deleting paket doc: ", err))
    return response
  }
)
const addPaketCollection = (docId, paket) => {
  dbTests.doc(docId).collection('paket').doc(paket).set({
    name: paket
  }).then(()=> console.log("updating document paket succsess"))
  .catch(err=> {
    console.log("error updating document paket: ",err)
  });
}

export const testsSlice = createSlice({
    name: "tests",
    initialState,
    reducers: {
        testUpdated(state, action){
            const {id, name} = action.payload
            const existingTest = state.tests.find(test => test.id === id)
            if(existingTest){
                existingTest.name = name
            }
        }
    },
    extraReducers: {
      [addNewTest.fulfilled]: (state, action) => {
        // We can directly add the new post object to our posts array
        state.tests.push(action.payload)
        
      }
    }
})

export const {testAdded, testUpdated} = testsSlice.actions

export default testsSlice.reducer

export const selectAllTests = state => state.firestore.ordered.tests
export const selectAllPaket = state => state.firestore.ordered.subpaket
export const selectTestById = (state, testId) => {
  const tests = state.firestore.ordered.tests
  if(!tests) return
  return tests.find(test => test.id === testId)
}