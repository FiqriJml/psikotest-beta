import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {selectTestById, selectAllPaket, deletePaket} from '../testsSlice'
import { isLoaded, useFirestoreConnect, isEmpty } from 'react-redux-firebase'

export const SingleTest = ({match}) =>{
    const {testId} = match.params
    // fungsinya untuk otomatis konek dengan firestore, setiap ada peruban akan respon
    useFirestoreConnect([
        {collection: 'tests', doc: testId, subcollections: [{collection: 'paket'}],  storeAs: "subpaket", orderBy: "no"},
        {collection: 'tests', }
    ]);
    
    const dispatch = useDispatch()
    
    const test = useSelector(state => selectTestById(state, testId))
    const pakets = useSelector(state => selectAllPaket(state))
    if (!isLoaded(test)) return 'Loading...';
    if(isEmpty(test)){
        return (
            <div className="text-center">
                <h2>Test tidak ditemukan</h2>
            </div>
        )
    }
    const onDelete = (e) => {
        const paketId = e.target.id
        dispatch(deletePaket({test, paketId}))
    }
    const hitungJumlah = (jml) => {
        // jml = 30
        if(!jml) jml = "(empty)"
        else{
            jml = `${jml} butir`
        }
        return jml
    }
    const hitungWaktu = (waktu) => {
        // waktu = 35
        if(!waktu) waktu = "(empty)"
        else waktu = `${waktu} menit`
        return waktu
    }
    let content = <tr></tr>
    if(isEmpty(pakets)){
        content = <tr>
            <td colSpan="3">No Data</td>
        </tr>
    }else{
        let no = 0
        // console.log(pakets)
        content = pakets.map(paket => (
            <tr key={paket.id}>
                <td>{++no}</td>
                <td>{paket.no}</td>
                <td>{paket.tipe_soal}</td>
                <td>{paket.bentuk_soal}</td>
                <td>{hitungJumlah(paket.jml_soal)}</td>
                <td>{hitungWaktu(paket.waktu_pengerjaan)}</td>
                <td width="100px">
                    <div className="btn-group" role="group">
                        <Link to={`${testId}/${paket.id}`} className="btn btn-sm btn-primary">view</Link>
                        <Link to={`${testId}/paket/update/${paket.id}`} className="btn btn-sm btn-secondary">edit</Link>
                        <button className="btn btn-danger btn-sm" onClick={onDelete} id={paket.id}>del</button>
                    </div>
                </td>
            </tr>
        ))
    }
    return (
        <div>
            <h2>{test.name}</h2>
            {/* <button onClick={addingPaket} className="btn btn-secondary btn-sm">Add Paket Soal</button> <br/> <br/> */}
            <Link to={`/${testId}/paket/add`} className="btn btn-secondary btn-sm">Add Paket</Link> <br/> <br/>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>paket</th>
                        <th>Tipe Soal</th>
                        <th>Bentuk Soal</th>
                        <th>Jumlah Soal</th>
                        <th>Waktu Pengerjaan</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    )
}

export default SingleTest
