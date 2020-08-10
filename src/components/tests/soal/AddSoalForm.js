import React from 'react'
import { useDispatch } from 'react-redux'
import { addSoal, addContohSoal } from './soalAction'
import { useState } from 'react'

function AddSoalForm({match}) {
    const {contoh, paketId, testId} = match.params
    
    const [soal, setsoal] = useState('')
    const [pilihanA, setpilihanA] = useState('')
    const [pilihanB, setpilihanB] = useState('')
    const [pilihanC, setpilihanC] = useState('')
    const [pilihanD, setpilihanD] = useState('')
    const [pilihanE, setpilihanE] = useState('')
    const [kunci_jawaban, setkunci_jawaban] = useState('A')

    const myFun = []
    myFun['soal'] = setsoal;
    myFun['pilihanA'] = setpilihanA;
    myFun['pilihanB'] = setpilihanB;
    myFun['pilihanC'] = setpilihanC;
    myFun['pilihanD'] = setpilihanD;
    myFun['pilihanE'] = setpilihanE;
    myFun['kunci_jawaban'] = setkunci_jawaban;

    const dispatch = useDispatch()

    const onEnter = (e) => {
        // console.log('awl: ',e.target.scrollHeight)
        e.target.style.height = "auto"
        // console.log('end: ',e.target.scrollHeight)
        const height = e.target.scrollHeight + 2
        e.target.style.height = height + 'px'
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        const newSoal = {soal, pilihanA, pilihanB, pilihanC, pilihanD, pilihanE}
        if(contoh){
            dispatch(addContohSoal({paketId, testId, newSoal}))
        }else{
            dispatch(addSoal({paketId, testId, newSoal}))
        }
    }
    const onChange = e => {
        onEnter(e)
        const el = e.target
        myFun[el.id](el.value)
    }
    return (
        <div>
            <h1>Add {contoh} Soal</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group row">
                <label htmlFor="soal" className="col-sm-2 col-lg-1 col-form-label">Soal</label>
                    <div className="col-sm-10 col-lg-11">
                        <textarea value={soal} onChange={onChange} id="soal" className="form-control"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="pilihanA" className="col-sm-2 col-lg-1 col-form-label">Pilihan A</label>
                    <div className="col-sm-10 col-lg-5">
                        <textarea value={pilihanA} onChange={onChange} id="pilihanA" className="form-control" rows="1"></textarea>
                    </div> <br/> <br/>
                    <label htmlFor="pilihanB" className="col-sm-2 col-lg-1 col-form-label">Pilihan B</label>
                    <div className="col-sm-10 col-lg-5">
                        <textarea value={pilihanB} onChange={onChange} id="pilihanB" className="form-control" rows="1"></textarea>
                    </div> <br/> <br/>

                    <label htmlFor="pilihanC" className="col-sm-2 col-lg-1 col-form-label">Pilihan C</label>
                    <div className="col-sm-10 col-lg-5">
                        <textarea value={pilihanC} onChange={onChange} id="pilihanC" className="form-control" rows="1"></textarea>
                    </div> <br/> <br/>
                    <label htmlFor="pilihanD" className="col-sm-2 col-lg-1 col-form-label">Pilihan D</label>
                    <div className="col-sm-10 col-lg-5">
                        <textarea value={pilihanD} onChange={onChange} id="pilihanD" className="form-control" rows="1"></textarea>
                    </div> <br/> <br/>

                    <label htmlFor="pilihanE" className="col-sm-2 col-lg-1 col-form-label">Pilihan E</label>
                    <div className="col-sm-10 col-lg-5">
                        <textarea value={pilihanE} onChange={onChange} id="pilihanE" className="form-control" rows="1"></textarea>
                    </div> <br/> <br/>

                    <label htmlFor="kunci_jawaban" className="col-sm-2 col-lg-1 col-form-label">Jawaban</label>
                    <div className="col-sm-10 col-lg-5">
                        <select value={kunci_jawaban} onChange={onChange} className="form-control" id="kunci_jawaban">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                    </div> <br/> <br/>
                </div>
                <button className="btn btn-primary float-right">Submit {contoh} Soal</button>
            </form>
        </div>
    )
}

export default AddSoalForm
