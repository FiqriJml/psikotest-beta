import React from 'react'
import Soal from './Soal'



function SoalViewer({soalList}) {
    console.log(soalList)
    let index = 0
    return (
        <div style={{
            border: "solid 2px red",
            padding: "20px"
        }}>
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
