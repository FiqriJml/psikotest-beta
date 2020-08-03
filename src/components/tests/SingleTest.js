import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {selectTestById} from './testsSlice'
import { isLoaded, useFirestoreConnect, isEmpty } from 'react-redux-firebase'

export const SingleTest = ({match}) =>{
    // fungsinya untuk otomatis konek dengan firestore, setiap ada peruban akan respon
    useFirestoreConnect({
        collection: 'tests'
    });
    const {testId} = match.params

    const test = useSelector(state => selectTestById(state, testId))
    if (!isLoaded(test)) return 'Loading...';
    if(isEmpty(test)){
        return (
            <div className="text-center">
                <h2>Test tidak ditemukan</h2>
            </div>
        )
    }
    return (
        <div>
            <div className="navLinks">
                <Link to="/tests" className="btn btn-info btn-sm">Back</Link>
            </div>
            <h2>{test.name}</h2>
            <div>Soal persub</div>
            <table className="table">
                <thead>
                    <tr><th>No</th></tr>
                </thead>
            </table>
        </div>
    )
}

export default SingleTest
