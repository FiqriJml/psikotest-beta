import React from 'react'

function Soal({soal, no}) {
    console.log(soal)
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
        <div className="row mb-3">
            <div className="col-12">
               {no}) {soal.soal} ?
            </div>
            <div className="col-12">
                {cekOpsi(soal.kunci_jawaban, "A")}
               <span className={opsiClass}>a. {soal.pilihanA}</span>
            </div>
            <div className="col-12">
                {cekOpsi(soal.kunci_jawaban, "B")}
               <span className={opsiClass}>b. {soal.pilihanB}</span>
            </div>
            <div className="col-12">
                {cekOpsi(soal.kunci_jawaban, "C")}
               <span className={opsiClass}>c. {soal.pilihanC}</span>
            </div>
            <div className="col-12">
                {cekOpsi(soal.kunci_jawaban, "D")}
               <span className={opsiClass}>d. {soal.pilihanD}</span>
            </div>
            <div className="col-12">
                {cekOpsi(soal.kunci_jawaban, "E")}
               <span className={opsiClass}>e. {soal.pilihanE}</span>
            </div>
        </div>
    )
}

export default Soal
