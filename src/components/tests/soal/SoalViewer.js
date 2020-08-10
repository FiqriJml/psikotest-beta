import React from 'react'
import Soal from './Soal'



function SoalViewer({soalList}) {
    console.log(soalList)
    let index = 0
    return (
        <div style={{
            border: "solid 2px red",
            padding: "12px"
        }}>
            {
                soalList && soalList.map(soal => {
                    return (
                        <p>
                            <Soal soal={soal} key={index++} no={index}/>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default SoalViewer
