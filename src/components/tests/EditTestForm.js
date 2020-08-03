import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {selectTestById, updateTest} from './testsSlice'
import {useHistory} from 'react-router-dom'

export default function EditTestForm({match}) {
    const {testId} = match.params
    
    const test = useSelector( state => selectTestById(state, testId))
    const [name, setName] = useState(test.name)
    
    const dispatch = useDispatch()
    const history = useHistory()

    const onNameChanged = (e) => setName(e.target.value)
    const onSubmit = () => {
        if(name){
            dispatch(updateTest(                {
                id: testId,
                name,
            }))
            history.push(`/tests`)
        }
    }
    return (
        <div>
            <h2>Edit Form</h2>
            <form onSubmit={onSubmit}>
                <div className="form-row my-2">
                    <div className="col-xs-3">
                        <input type="text" value={name}
                        onChange={onNameChanged} className="form-control" placeholder="Add new Test"/>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}