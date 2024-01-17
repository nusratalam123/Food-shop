import React from 'react'

export default function CardBox() {
  return (
    <div>
        <div className="card m-3 w-25">
          <img src="https://source.unsplash.com/random/1000x500/?burger" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="container w-100">
          <select className="m-2 w-25 h-100 bg-success">
            {Array.from(Array(6), (e,i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 w-25 h-100 bg-success">
          <option value="half">Half</option>
          <option value="Full">Full</option>
          </select>
          <div className="d-inline fs-5">Total price</div>
        </div>
        </div>
    </div>
  )
}
