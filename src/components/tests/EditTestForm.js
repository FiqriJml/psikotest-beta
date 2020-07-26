import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {testUpdated} from './testsSlice'
import {useHistory} from 'react-router-dom'

export default function EditTestForm({match}) {
    const {testId} = match.params
    
    const test = useSelector( state => state.tests.find(test => test.id === testId))
    const [name, setName] = useState(test.name)
    
    const dispatch = useDispatch()
    const history = useHistory()

    const onNameChanged = (e) => setName(e.target.value)
    const onUpdateClicked = () => {
        if(name){
            dispatch(
            testUpdated(
                {
                    id: testId,
                    name,
                }
            ))
            history.push(`/tests`)
        }
    }
    return (
        <div>
            <h2>Edit Form</h2>
            <form>
                <div className="form-row my-2">
                    <div className="col-xs-3">
                        <input type="text" value={name}
                        onChange={onNameChanged} className="form-control" placeholder="Add new Test"/>
                    </div>
                    <div className="col">
                        <button type="button" onClick={onUpdateClicked} className="btn btn-primary">Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}