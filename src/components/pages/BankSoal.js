import React from 'react'

export default function BankSoal() {
    return (
        <div>
            <h3 className="text-center">Data Soal Test Psikolog</h3>
            <button className="btn btn-sm btn-primary">Buat Test</button>
            <table className="table my-1">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Test</th>
                        <th>Sub Soal (buah)</th>
                        <th>Butir Soal (buah)</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
