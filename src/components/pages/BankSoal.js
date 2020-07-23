import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'

export default function BankSoal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <h3 className="text-center">Bank Soal Test</h3>
            <div className="text-center">
                <button className="btn btn-sm btn-secondary" onClick={handleShow}>Buat Test</button>
            </div>
            <table className="table my-1">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Test</th>
                        <th>Author</th>
                        <th>Sub Soal (buah)</th>
                        <th>Butir Soal (buah)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>(contoh)</td>
                        <td>Kecerdasan</td>
                        <td>James Bond</td>
                        <td>7</td>
                        <td>310</td>
                    </tr>
                    <tr>
                        <td>(contoh)</td>
                        <td>Kecakapan</td>
                        <td>Mr. 009</td>
                        <td>6</td>
                        <td>220</td>
                    </tr>
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Buat Test Baru</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nama_test">Nama Test</label>
                            <input type="text" className="form-control" id="nama_test"/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Batal
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Tambah
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
