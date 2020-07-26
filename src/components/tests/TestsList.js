import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

export const TestsList = () => {
    const tests = useSelector(state => state.tests)

    const renderTests = 
        tests.map(test => (
            <tr key={test.id}>
                <td>{test.id} </td>
                <td>{test.name}</td>
                <td width="100px">
                    <div className="btn-group" role="group">
                        <Link className="btn btn-danger" to={`tests/${test.id}`}>View</Link>
                        <Link className="btn btn-success" to={`tests/edit/${test.id}`}>Edit</Link>
                    </div>
                </td>
            </tr>
        )
    )

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
                    {renderTests}
                </tbody>   
            </table>
        </div>
    )
}