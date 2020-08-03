import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {selectAllTests, deleteTest} from './testsSlice'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

export const TestsList = () => {
    // fungsinya untuk otomatis konek dengan firestore, setiap ada peruban akan respon
    useFirestoreConnect({
        collection: 'tests'
    });
    const dispatch = useDispatch()
    const tests = useSelector(state => selectAllTests(state))
    const data = tests;
    
    const onDelete = (e) => {
        const testId = e.target.id
        dispatch(deleteTest(testId))
    }
    if (!isLoaded(data)) return 'Loading...';
    let content
    const renderTests = tests.map(test => (
            <tr key={test.id}>
                <td>{test.id} </td>
                <td>{test.name}</td>
                <td width="100px">
                    <div className="btn-group" role="group">
                        <Link className="btn btn-secondary" to={`tests/${test.id}`}>View</Link>
                        <Link className="btn btn-success" to={`tests/edit/${test.id}`}>Edit</Link>
                        <button className="btn btn-danger" onClick={onDelete} id={test.id}>Del</button>
                    </div>
                </td>
            </tr>
        )
    )
    content = renderTests
    if (isEmpty(data)) content = (<tr><td colSpan="3">No data</td></tr>)
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>   
            </table>
        </div>
    )
}