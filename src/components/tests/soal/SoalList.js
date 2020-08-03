import React from 'react'
import { useSelector } from 'react-redux';
import { selectPaketById } from '../testsSlice';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function SoalList({match}) {
    const {testId, paketId} = match.params

    useFirestoreConnect([
        {collection: 'tests', doc: testId, subcollections: [{collection: 'paket'}],  storeAs: "subpaket", orderBy: "no"},
    ]);
    const paket = useSelector(state => selectPaketById(state, paketId))
    console.log(paket)
    if(!isLoaded(paket)){
        return <p>Loading...</p>
    }
    if(isEmpty(paket)){
        return <h1 className="text-center">Page Not Found</h1>
    }
    return (
        <div>
            <h3>Soal Sub Paket {paket.no}</h3>
            <p>Contoh bla bla bla</p>
        </div>
    )
}

export default SoalList
