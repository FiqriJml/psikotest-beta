import React from 'react'

export default function AddForm() {
    return (
        <form>
            <div class="form-group">
                <label for="no_sub"></label>
                <input type="number" class="form-control" id="no_sub" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}
