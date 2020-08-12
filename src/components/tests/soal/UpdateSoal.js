import React from 'react'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { selectPaketById } from '../testsSlice'
import { useSelector } from 'react-redux';
import UpdateSoalForm from './UpdateSoalForm';

function UpdateSoal({match}) {
    const {contoh, paketId, testId, index} = match.params
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
    const oldSoal = paket.soalList[index]
    console.log(oldSoal)

    return(
        <UpdateSoalForm oldSoal={oldSoal} doc={{contoh, paketId, testId, index}} />
    )

}

export default UpdateSoal
