import React from 'react'
import Soal from './Soal'



function SoalViewer({soalList}) {
    console.log(soalList)
    let index = 0
    return (
        <div className="soal-box">
            {
                soalList && soalList.map(soal => {
                    return (
                        <Soal soal={soal} key={index++} no={index}/>
                    )
                })
            }
        </div>
    )
}

export default SoalViewer
