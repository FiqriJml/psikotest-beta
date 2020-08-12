import React from 'react'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { selectPaketById } from '../testsSlice'
import { useSelector } from 'react-redux';
import UpdateSoalForm from './UpdateSoalForm';

function UpdateSoal({match}) {
    const {index, paketId, testId} = match.params
    useFirestoreConnect([
        {collection: 'tests', doc: testId, subcollections: [{collection: 'paket', doc: paketId}],  storeAs: "subpaket"},
    ]);
    const paket = useSelector(state => selectPaketById(state, paketId))
    
    if(!isLoaded(paket)){
        return <p>Loading...</p>
    }
    if(isEmpty(paket)){
        return <h1 className="text-center">Page Not Found</h1>
    }
    let oldSoal = paket.contoh
    let contoh = "contoh"
    if(index !== contoh){
        contoh = undefined
        oldSoal = paket.soalList[index]
    }
    return(
        <UpdateSoalForm oldSoal={oldSoal} doc={{contoh, paketId, testId, index}} />
    )

}

export default UpdateSoal
