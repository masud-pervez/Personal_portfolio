import React, { useState } from "react";
import Counter from "./Counter";

export default function Counters() {
  const [counters, setCounters] = useState([]);

  const handleClick = (id, type) => {
    const newCounters = [...counters];
    type === "increment"
      ? newCounters[id].value++
      : type === "decrement"
      ? newCounters[id].value--
      : (newCounters[id].value = 0);
    setCounters(newCounters);
  };

  const handleDelete = (id) => {
    const newCounter = counters.filter((hg, indx) => indx !== id);
    setCounters(newCounter);
  };

  const handleResetAll = () => {
    const newCounter = counters.map((item) => ({ ...item, value: 0 }));
    setCounters(newCounter);
  };

  const handleClear = () => {
    setCounters([]);
  };

  const handleAdd = () => {
    const maxId = counters.length
      ? Math.max(...counters.map((item) => item.id))
      : 0;
    setCounters([...counters, { id: maxId + 1, value: 0 }]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center text-md-start">
          <button
            type="button"
            className="btn pe-auto btn-info text-light"
            onClick={handleAdd}
          >
            Add Counter
          </button>
          <button
            type="button"
            className="btn pe-auto btn-danger m-4 text-light"
            onClick={handleClear}
          >
            Clear
          </button>

          <button
            type="button"
            className="btn pe-auto btn-warning "
            onClick={handleResetAll}
          >
            Rest All
          </button>
        </div>
      </div>

      <div className="row">
        {counters.length > 0 ? (counters.map((item, idx) => { console.log(item);
            return (
              <Counter
                key={idx}
                item={item}
                idx={idx}
                handleClick={handleClick}
                handleDelete={handleDelete}
              />
            );
          })
        ) : (
          <div className="col-md-3">
            <div className="alert alert-danger shadow" role="alert">
              Please add a counter
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
