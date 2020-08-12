import { createAsyncThunk } from '@reduxjs/toolkit'
import app from '../../../fbConfig'

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

export const updateSoal = createAsyncThunk(
  'tests/soal/updated', async (soal) => {
    const {testId, paketId, newSoal, index} = soal
    const dbPaket = dbTests.doc(testId).collection('paket').doc(paketId)

    const soalList = (await dbPaket.get()).data().soalList
    // default values in JavaScript
    const nextSoal = soalList

    nextSoal[index] = newSoal

    const response = await dbPaket.update({
          soalList: nextSoal
      })
    return response

  }
)

export const addContohSoal = createAsyncThunk(
  'tests/soal/added', async (soal) => {
      const {testId, paketId, newSoal} = soal
      const dbPaket = dbTests.doc(testId).collection('paket').doc(paketId)
      
      const response = await dbPaket.update({
          contoh: newSoal
      })
      return response
  }
)
export const addSoal = createAsyncThunk(
    'tests/soal/added', async (soal) => {
        const {testId, paketId, newSoal} = soal
        const dbPaket = dbTests.doc(testId).collection('paket').doc(paketId)

        const soalList = (await dbPaket.get()).data().soalList
        // default values in JavaScript
        const nextSoal = soalList || []

        nextSoal.push(newSoal)

        const response = await dbPaket.update({
              soalList: nextSoal
          })
        return response
        
    }
)