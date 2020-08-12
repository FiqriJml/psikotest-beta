import React from 'react'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { selectTestById } from '../testsSlice'
import { useSelector } from 'react-redux'
import Form from './Form'

function AddPaketForm({match}) {
    const {testId} = match.params
    
    useFirestoreConnect([
        {collection: 'tests', doc: testId},
    ])
    const test = useSelector(state => selectTestById(state, testId))
    console.log('test:',test)

    if(!isLoaded(test)){
        return <p>Loading.....</p>
    }
    const paket = {
        no: "",
        tipe_soal: "Text",
        bentuk_soal: "Pilihan Ganda",
        waktu_pengerjaan: ""
    }
    return (
        <div>
            <h1>Add Paket Form</h1>
            <Form paket={paket} match={match} />
        </div>
    )
}

export default AddPaketForm
