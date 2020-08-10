import React from 'react'

function Soal({soal, no}) {
    console.log(soal)
    if(!soal){
        return <p></p>
    }
    return (
        <div className="row">
            <div className="col-12">
               {no}) {soal.soal} ?
            </div>
            <div className="col-12">
               a. {soal.pilihanA}
            </div>
            <div className="col-12">
               b. {soal.pilihanB}
            </div>
            <div className="col-12">
               c. {soal.pilihanC}
            </div>
            <div className="col-12">
               d. {soal.pilihanD}
            </div>
            <div className="col-12">
               e. {soal.pilihanE}
            </div>
        </div>
    )
}

export default Soal
