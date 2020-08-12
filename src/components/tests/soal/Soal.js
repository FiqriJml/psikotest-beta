import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteSoal } from './soalAction'

function Soal({soal, no, match}) {
    const {testId, paketId} = match.params
    const dispatch = useDispatch()
    const index = no -1
    if(!soal){
        return <p></p>
    }
    let opsiClass = ""
    
    const cekOpsi = (kunci,opsi) => {
        opsiClass = ""
        if(kunci === opsi){
            opsiClass = "opsi-benar"
        }
    }
    const onClikcedDelete = () => {
        dispatch(deleteSoal({testId, paketId, index}))
    }
    return (
        <div className="soal-item">
            <div className="float-right btn-group">
                <Link to={`/tests/${testId}/${paketId}/update-soal/${index}`} className="btn btn-secondary btn-sm">update</Link>
                <button onClick={onClikcedDelete} className="btn btn-danger btn-sm">delete</button>
            </div>
            <div>
               {no}) {soal.soal} ?
            </div>
            <div className="opsi-box">
                <div>
                    {cekOpsi(soal.kunci_jawaban, "A")}
                <span className={opsiClass}>a. {soal.pilihanA}</span>
                </div>
                <div>
                    {cekOpsi(soal.kunci_jawaban, "B")}
                <span className={opsiClass}>b. {soal.pilihanB}</span>
                </div>
                <div>
                    {cekOpsi(soal.kunci_jawaban, "C")}
                <span className={opsiClass}>c. {soal.pilihanC}</span>
                </div>
                <div>
                    {cekOpsi(soal.kunci_jawaban, "D")}
                <span className={opsiClass}>d. {soal.pilihanD}</span>
                </div>
                <div>
                    {cekOpsi(soal.kunci_jawaban, "E")}
                <span className={opsiClass}>e. {soal.pilihanE}</span>
                </div>
            </div>
        </div>
    )
}

export default Soal
