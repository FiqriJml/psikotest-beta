import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { addNewTest } from './testsSlice'

export default function AddTestForm() {
    const [name, setName] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    
    const dispatch = useDispatch()
    const onNameChanged = (e) => setName(e.target.value)
    const canSave = [name].every(Boolean) && addRequestStatus === 'idle'

    const onSubmit = async (e) => {
        e.preventDefault()
        setName('')
        if (canSave) {
            // untuk memberikan status
            // try {
            //     setAddRequestStatus('pending')
            //     const resultAction = await dispatch(addNewTest({ name }))
            //     unwrapResult(resultAction)
            // } catch (err) {
            //     console.error('Failed to save the test: ', err)
            // } finally {
            //     setAddRequestStatus('idle')
            // }

            // menggunakan firestoreReducer
            dispatch(addNewTest({name}))
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-row my-2">
                    <div className="col-xs-3">
                        <input type="text" value={name}
                        onChange={onNameChanged} className="form-control" placeholder="Add new Test"/>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
