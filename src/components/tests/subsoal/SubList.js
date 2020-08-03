import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {selectTestById, addPaket, selectAllPaket, deletePaket} from '../testsSlice'
import { isLoaded, useFirestoreConnect, isEmpty } from 'react-redux-firebase'

export const SingleTest = ({match}) =>{
    const {testId} = match.params
    // fungsinya untuk otomatis konek dengan firestore, setiap ada peruban akan respon
    useFirestoreConnect([
        {collection: 'tests', doc: testId, subcollections: [{collection: 'paket'}],  storeAs: "subpaket"},
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
    const addingPaket = () => {
        dispatch(addPaket(test))
    }
    const onDelete = (e) => {
        const paketId = e.target.id
        console.log(paketId)
        console.log(testId)
        dispatch(deletePaket({testId, paketId}))
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
                <td>{`paket ${no}`}</td>
                <td width="100px">
                    <div className="btn-group" role="group">
                        <Link to={`${testId}/paket${no}`} className="btn btn-sm btn-primary">view</Link>
                        <button className="btn btn-danger btn-sm" onClick={onDelete} id={`paket${no}`}>del</button>
                    </div>
                </td>
            </tr>
        ))
    }
    return (
        <div>
            <h2>{test.name}</h2>
            <button onClick={addingPaket} className="btn btn-secondary btn-sm">Add Paket Soal</button> <br/> <br/>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>sub paket</th>
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
