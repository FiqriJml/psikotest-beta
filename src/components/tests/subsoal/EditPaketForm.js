import React from 'react'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { selectTestById, selectPaketById } from '../testsSlice'
import { useSelector } from 'react-redux'
import Form from './Form'

function EditPaketForm({match}) {
    const {testId, paketId} = match.params
    
    useFirestoreConnect([
        {collection: 'tests', doc: testId},
        {collection: 'tests', doc: testId, subcollections: [{collection: 'paket', doc: paketId}],  storeAs: "subpaket"},
    ])
    const test = useSelector(state => selectTestById(state, testId))
    const paket = useSelector(state => selectPaketById(state, paketId))
    console.log('test:',test)
    console.log('paket:', paket)

    if(!isLoaded(paket)){
        return <p>Loading.....</p>
    }
    // const initTipe = "Text"
    // const initBentuk = "Pilihan Ganda"
    // const [no, setNo] = useState('')
    // const [tipe_soal, setTipe_soal] = useState(initTipe)
    // const [bentuk_soal, setBentuk_soal] = useState(initBentuk)
    // const [waktu_pengerjaan, setWaktu_pengerjaan] = useState('')

    // const dispatch = useDispatch()
    // const history = useHistory()
    return (
        <div>
            <h1>Update Form</h1>
            <Form paket={paket} match={match} />
        </div>
    )
}

export default EditPaketForm
