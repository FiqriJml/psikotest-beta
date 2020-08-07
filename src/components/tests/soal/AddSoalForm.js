import React from 'react'

function AddSoalForm({match}) {
    const {contoh, paketId, testId} = match.params

    const onEnter = (e) => {
        console.log('awl: ',e.target.scrollHeight)
        e.target.style.height = "auto"
        console.log('end: ',e.target.scrollHeight)
        const height = e.target.scrollHeight + 2
        e.target.style.height = height + 'px'

    }
    return (
        <div>
            <h1>Add {contoh} Soal</h1>
            <form>
                <div className="form-group row">
                <label htmlFor="soal" className="col-sm-2 col-lg-1 col-form-label">Soal</label>
                    <div className="col-sm-10 col-lg-11">
                        <textarea style={{height: "auto"}} onChange={onEnter} id="soal" className="form-control"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="pilihan_a" className="col-sm-2 col-lg-1 col-form-label">Pilihan A</label>
                    <div className="col-sm-10 col-lg-5">
                        <textarea id="pilihan_a" className="form-control" rows="1"></textarea>
                    </div> <br/> <br/>
                    <label htmlFor="pilihan_b" className="col-sm-2 col-lg-1 col-form-label">Pilihan B</label>
                    <div className="col-sm-10 col-lg-5">
                        <textarea id="pilihan_b" className="form-control" rows="1"></textarea>
                    </div> <br/> <br/>
                    <label htmlFor="pilihan_c" className="col-sm-2 col-lg-1 col-form-label">Pilihan C</label>
                    <div className="col-sm-10 col-lg-5">
                        <textarea id="pilihan_c" className="form-control" rows="1"></textarea>
                    </div> <br/> <br/>
                    <label htmlFor="pilihan_d" className="col-sm-2 col-lg-1 col-form-label">Pilihan D</label>
                    <div className="col-sm-10 col-lg-5">
                        <textarea id="pilihan_d" className="form-control" rows="1"></textarea>
                    </div> <br/> <br/>
                    <label htmlFor="pilihan_e" className="col-sm-2 col-lg-1 col-form-label">Pilihan E</label>
                    <div className="col-sm-10 col-lg-5">
                        <textarea id="pilihan_e" className="form-control" rows="1"></textarea>
                    </div> <br/> <br/>
                </div>
                <button className="btn btn-primary float-right">Submit {contoh} Soal</button>
            </form>
        </div>
    )
}

export default AddSoalForm
