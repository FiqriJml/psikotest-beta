import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

export const SingleTest = ({match}) =>{
    const {testId} = match.params

    const test = useSelector(state => state.tests.find(test => test.id === testId))
    if(!test){
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
            <div>content disini</div>
        </div>
    )
}

export default SingleTest
