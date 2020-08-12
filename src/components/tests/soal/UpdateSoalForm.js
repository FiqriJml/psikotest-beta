import React from 'react'
import { useDispatch } from 'react-redux'
import { updateSoal, addContohSoal } from './soalAction'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function UpdateSoalForm({oldSoal, doc}) {
    const {contoh, paketId, testId, index} = doc

    const [soal, setsoal] = useState(oldSoal.soal)
    const [pilihanA, setpilihanA] = useState(oldSoal.pilihanA)
    const [pilihanB, setpilihanB] = useState(oldSoal.pilihanB)
    const [pilihanC, setpilihanC] = useState(oldSoal.pilihanC)
    const [pilihanD, setpilihanD] = useState(oldSoal.pilihanD)
    const [pilihanE, setpilihanE] = useState(oldSoal.pilihanE)
    const [kunci_jawaban, setkunci_jawaban] = useState(oldSoal.kunci_jawaban)

    const myFun = []
    myFun['soal'] = setsoal;
    myFun['pilihanA'] = setpilihanA;
    myFun['pilihanB'] = setpilihanB;
    myFun['pilihanC'] = setpilihanC;
    myFun['pilihanD'] = setpilihanD;
    myFun['pilihanE'] = setpilihanE;
    myFun['kunci_jawaban'] = setkunci_jawaban;

    const dispatch = useDispatch()
    
    const history = useHistory()

    const onEnter = (e) => {
        // enter textarea auto resize
        e.target.style.height = "auto"
        const height = e.target.scrollHeight + 2
        e.target.style.height = height + 'px'
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        let newSoal = {}
        if(contoh){
            newSoal = {soal, pilihanA, pilihanB, pilihanC, pilihanD, pilihanE}
            dispatch(addContohSoal({paketId, testId, newSoal}))
        }else{
            newSoal = {soal, pilihanA, pilihanB, pilihanC, pilihanD, pilihanE, kunci_jawaban}
            dispatch(updateSoal({paketId, testId, newSoal, index}))
        }
        history.push(`/tests/${testId}/${paketId}`)
    }
    const onChange = e => {
        onEnter(e)
        const el = e.target
        myFun[el.id](el.value)
    }
    let opsiKunciJawaban = <>
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
    </>
        
    if(contoh){
        opsiKunciJawaban = <></>
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

                    {opsiKunciJawaban}
                </div>
                <button className="btn btn-primary float-right">Submit {contoh} Soal</button>
            </form>
        </div>
    )
}

export default UpdateSoalForm
