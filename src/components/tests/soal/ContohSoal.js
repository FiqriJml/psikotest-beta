import React from 'react'

function ContohSoal({soal}) {
    if(!soal){
        return <p></p>
    }
    return (
        <div style={{
            border: "solid 2px red",
            padding: "12px"
        }}>
            <div className="row">
            <div className="col-12">
                {soal.soal} ?
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
        </div>
    )
}

export default ContohSoal
