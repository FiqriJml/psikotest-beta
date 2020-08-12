import React from 'react'
import Soal from './Soal'



function SoalViewer({soalList, match}) {
    console.log(soalList)
    let index = 0
    return (
        <div className="soal-box">
            {
                soalList && soalList.map(soal => {
                    return (
                        <Soal soal={soal} key={index++} no={index} match={match}/>
                    )
                })
            }
        </div>
    )
}

export default SoalViewer
