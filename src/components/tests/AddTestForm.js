import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import {testAdded} from './testsSlice'

export default function AddTestForm() {
    const [name, setName] = useState('')
    
    const dispatch = useDispatch()

    const onNameChanged = (e) => setName(e.target.value)
    const onAddClicked = () => {
        if(name){
            dispatch(testAdded(name))
            setName('')
        }
    }
    return (
        <div>
            <form>
                <div className="form-row my-2">
                    <div className="col-xs-3">
                        <input type="text" value={name}
                        onChange={onNameChanged} className="form-control" placeholder="Add new Test"/>
                    </div>
                    <div className="col">
                        <button type="button" onClick={onAddClicked} className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
