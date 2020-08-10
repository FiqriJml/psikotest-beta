import React from 'react'
import { useSelector } from 'react-redux';
import { selectPaketById, selectTestById } from '../testsSlice';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import SoalViewer from './SoalViewer';
import Soal from './Soal';
import ContohSoal from './ContohSoal';

function SoalList({match}) {
    const {testId, paketId} = match.params

    useFirestoreConnect([
        {collection: 'tests', doc: testId},
        {collection: 'tests', doc: testId, subcollections: [{collection: 'paket'}],  storeAs: "subpaket", orderBy: "no"},
    ]);
    const paket = useSelector(state => selectPaketById(state, paketId))
    const test = useSelector(state => selectTestById(state, testId))

    if(!isLoaded(paket)){
        return <p>Loading...</p>
    }
    if(isEmpty(paket)){
        return <h1 className="text-center">Page Not Found</h1>
    }
    const soalList = paket.soalList
    const contohSoal = paket.contoh
    console.log(paket)
    return (
        <div className="row">
            <div className="col-2">
            </div>
            <div className="col-8">
                <h3>{test.name} Sub Paket {paket.no}</h3>
                    <p>Bentuk: {paket.bentuk_soal}</p>
                    <p>Tipe: {paket.tipe_soal}</p>
                    <p>Waktu: {paket.waktu}</p>
                
                <div className="btn-group" role="group">
                    <Link to={`${paketId}/add-soal/contoh`} className="btn btn-sm btn-primary">Buat contoh soal</Link>
                    <Link to={`${paketId}/add-soal`} className="btn btn-sm btn-success">Buat soal</Link>
                </div>
                <br/> <br/>
                <p><b>Contoh Soal:</b></p>
                <ContohSoal soal={contohSoal} />
                <br/> 
                <p><b>List Soal:</b></p>
                <SoalViewer soalList={soalList}/>
            </div>
            <div className="col-2">
            </div>
        </div>
    )
}

export default SoalList
