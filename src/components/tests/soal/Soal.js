import React from 'react'
import { Link } from 'react-router-dom'

function Soal({soal, no, match}) {
    const {testId, paketId} = match.params
    const index = no -1
    console.log(soal, testId)
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
    return (
        <div className="soal-item">
            <div className="float-right btn-group">
                <Link to={`/tests/${testId}/${paketId}/update-soal/${index}`} className="btn btn-secondary btn-sm">update</Link>
                <Link to="#" className="btn btn-danger btn-sm">delete</Link>
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
