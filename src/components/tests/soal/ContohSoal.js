import React from 'react'
import { Link } from 'react-router-dom'

function ContohSoal({soal}) {
    if(!soal){
        return <p></p>
    }
    return (
        <div className="soal-box">
            <div className="float-right">
                <Link to="#" className="btn btn-secondary btn-sm">update</Link>
            </div>
            <div>
                {soal.soal} ?
            </div>
            <div className="opsi-box">
                <div>
                a. {soal.pilihanA}
                </div>
                <div>
                b. {soal.pilihanB}
                </div>
                <div>
                c. {soal.pilihanC}
                </div>
                <div>
                d. {soal.pilihanD}
                </div>
                <div>
                e. {soal.pilihanE}
                </div>
            </div>
        </div>
    )
}

export default ContohSoal
