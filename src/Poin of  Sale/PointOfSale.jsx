import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { data as datas } from "./data";
import emptyData from "../assets/emptyData.png";

export default function PointOfSale() {
  const [products, setProducts] = useState([]);
  const [grand, setGrand] = useState([]);

  let totalPrice = 0;
  let totalQuantity = 0;
  let totalCost = 0;

  const handleChange = ({ target }) => {
    const newProducts = [...products];
    const find = datas.find((item) => item.id === target.value);

    if (find && !newProducts.find((item) => item.id === target.value)) {
      newProducts.push(find);
      setProducts(newProducts);
    } else {
      setProducts(
        newProducts.map((item) => {
          if (item.id === target.value) item.quantity += 1;
          return item;
        })
      );
    }
  };

  const handleGrand = ({ target }) => {
    setGrand({ ...grand, [target.name]: target.value });
  };

  const handleQuantity = ({ target }, idx) => {
    const newArr = [...products];
    
    newArr[idx][target.name] = target.value;
    setProducts(newArr);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((item, idx) => item.id !== id));
  };

  products.forEach((item) => {
    totalQuantity += item.quantity * 1;
    totalPrice = totalPrice + item.quantity * item.cost;
    totalCost = totalCost + item.cost * 1;
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-header text-center">
              <span className="fs-4 p-4 text-dark">POS ~ Point Of Sale</span>
            </div>
            <div className="card-body p-5">
              <label htmlFor="product" className="form-label">
                Product
              </label>
              <select
                name="productId"
                onChange={handleChange}
                className="form-select form-select-sm w-25"
              >
                <option value="">Select..</option>
                {datas.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                  >{`${item.name} - (${item.code})`}</option>
                ))}
              </select>
              {products.length > 0 ? (
                <>
                  <table
                    className={`table table-sm table-striped table-hover table-bordered mt-5 text-center table-responsive`}
                  >
                    <thead className="table-info">
                      <tr>
                        <th style={{ width: "10%" }}>#SL No.</th>
                        <th style={{ width: "20%" }}>Product Name</th>
                        <th style={{ width: "20%" }}>Product Code</th>
                        <th style={{ width: "10%" }}>Cost</th>
                        <th style={{ width: "10%" }}>Quantity</th>
                        <th style={{ width: "10%" }}>Price</th>
                        <th style={{ width: "10%" }}>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((item, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.code}</td>
                            <td>
                              <input
                                type="number"
                                name="cost"
                                value={item.cost}
                                className="form-control w-75 ms-3"
                                onChange={(e) => handleQuantity(e, idx)}
                              />
                              {/* <span className="fs-5 mx-1">৳</span> */}
                            </td>
                            <td>
                              <input
                                type="number"
                                name="quantity"
                                value={item.quantity}
                                className="form-control w-75 ms-3"
                                onChange={(e) => handleQuantity(e, idx)}
                              />
                            </td>
                            <td>
                              <span className="fs-5 mx-1">৳</span>
                              {item.cost * item.quantity}
                            </td>
                            <td>
                              <AiOutlineDelete
                                className="delete-btn fs-4 mt-2"
                                onClick={() => handleDelete(item.id)}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={2}></td>
                        <td>
                          <span className="fw-bold">
                            Total Item : {products.length}
                          </span>
                        </td>
                        <td>
                          <span className="fw-bold">
                            Total cost : {totalCost}
                          </span>
                        </td>
                        <td>
                          <span className="fw-bold">
                            Total Quant : {totalQuantity}
                          </span>
                        </td>
                        <td colSpan={2} className="text-start">
                          <span className="fw-bold ms-3">
                            Total Price : {totalPrice}
                          </span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>

                  <div className="row justify-content-end">
                    <div className="col-md-4">
                      <div className="input-group mb-3 w-75 ms-5">
                        <span>
                          <label
                            htmlFor=""
                            className="form-label mt-2 mx-2 fw-bold ms-4"
                          >
                            VAT :
                          </label>
                        </span>
                        <input
                          type="number"
                          className="form-control"
                          onChange={handleGrand}
                          name="vat"
                          value={grand.vat}
                          placeholder="0.0"
                        />
                        <span className="input-group-text">%</span>
                      </div>

                      <div className="input-group mb-3 w-75 ms-5">
                        <span>
                          <label htmlFor="" className="form-label mt-2 fw-bold">
                            Discount :{" "}
                          </label>
                        </span>
                        <input
                          type="number"
                          className="form-control"
                          onChange={handleGrand}
                          name="discount"
                          value={grand.discount}
                          placeholder="0.0"
                        />
                        <span className="input-group-text">%</span>
                      </div>
                      <hr />
                      <span className="fw-bolder ms-5">
                        Grand Price :{" "}
                        {grand.vat > 0 && grand.discount > 0
                          ? totalPrice -
                            (totalPrice - (totalPrice * grand.discount) / 100)
                          : grand.vat > 0
                          ? totalPrice + (totalPrice * grand.vat) / 100
                          : grand.discount > 0
                          ? totalPrice - (totalPrice * grand.discount) / 100
                          : totalPrice}
                      </span>
                      <span className="fs-5 mx-1">৳{grand}</span>

                    </div>
                  </div>
                </>
              ) : (
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <img src={emptyData} className="img-fluid" alt="" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
