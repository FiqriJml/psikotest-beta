import React from 'react'
import { TestsList } from '../tests/TestsList'
import AddTestForm from '../tests/AddTestForm'

export default function Home() {
    return (
        <div>
            <h2 className="text-center">Test List</h2>
            <br/>
            <AddTestForm/>
            <TestsList/>
        </div>
    )
}
