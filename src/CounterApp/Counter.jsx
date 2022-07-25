import React from "react";

export default function Counter( { handleClick , idx , item = {} , handleDelete} ) {
  return (
    <div className="col-md-4">
      <div className="card my-3 shadow">
        <div className="card-header">
          <span className="fs-4 badge bg-warning">#{item.id}</span>
          <button 
            className="btn-close pe-auto fs-5 float-end"
            onClick={()=>handleDelete(idx)}
            >
          </button>
        </div>
        <div className="card-body">
          <h3 className="text-center">
            <span
              className={`badge bg-${
                item.value === 0 ? "secondary" : item.value > 0 ? "primary" : "danger"
              }`}
            >
              {item.value}
            </span>
          </h3>
          <div className="text-center py-4">
            <button
              type="button"
              onClick={() => handleClick(idx,"increment")}
              className="btn btn-primary"
            >
              Increment
            </button>
            <button
              type="button"
              onClick={() => handleClick(idx,"reset")}
              className="btn btn-secondary mx-4"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => handleClick(idx,"decrement")}
              className="btn btn-danger"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
