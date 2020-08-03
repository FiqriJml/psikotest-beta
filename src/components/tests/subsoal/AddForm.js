import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPaket, selectTestById } from '../testsSlice'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'

export default function AddForm({match}) {
    const {testId} = match.params
    useFirestoreConnect(
        { collection: 'tests' }
    )
    const initTipe = "Text"
    const initBentuk = "Pilihan Ganda"
    const [no, setNo] = useState('')
    const [tipe_soal, setTipe_soal] = useState(initTipe)
    const [bentuk_soal, setBentuk_soal] = useState(initBentuk)
    const [waktu_pengerjaan, setWaktu_pengerjaan] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const test = useSelector(state => selectTestById(state, testId))

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addPaket({test, no, bentuk_soal, tipe_soal, waktu_pengerjaan}))
        history.push(`/tests/${testId}`)
    }
    const onChange = (e) => {
        const val = e.target.value
        setNo(val)
    }
    const onChangeTipe = (e) => {
        const val = e.target.value
        setTipe_soal(val)
    }
    const onChangeBentuk = (e) => {
        const val = e.target.value
        setBentuk_soal(val)
    }
    const onChangeWaktu = (e) => {
        const val = e.target.value
        setWaktu_pengerjaan(val)
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="no">No Paket</label>
                <input value={no} onChange={onChange} required type="number" className="form-control" id="no" placeholder="Enter No Paket"/>
                <label htmlFor="tipe_soal">Tipe Soal</label>
                <select onChange={onChangeTipe} className="form-control" value={tipe_soal} id="tipe_soal" >
                    <option className="form-control" value="Text">Text</option>
                    <option className="form-control" value="Gambar">Gambar</option>
                </select>                
                <label htmlFor="bentuk_soal">Bentuk Soal</label>
                <select onChange={onChangeBentuk} className="form-control" value={bentuk_soal} id="bentuk_soal">
                    <option className="form-control">Pilihan Ganda</option>
                    <option className="form-control">Isian</option>
                </select>
                <label htmlFor="waktu">Waktu Pengerjaan</label>
                <input value={waktu_pengerjaan} onChange={onChangeWaktu} type="text" className="form-control" id="waktu"
                 placeholder="Enter Waktu (satuan menit)"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}
