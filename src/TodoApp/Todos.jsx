import React, { useState } from "react";
import { Button, Tooltip, Empty } from "antd";
import { FiSend } from "react-icons/fi";
import { DeleteOutlined } from "@ant-design/icons";
import { GrUpdate } from "react-icons/gr";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

export default function Todos() {
  const [content, setContent] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [edited, setEdited] = useState(null);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (!toggleSubmit) {
      setItems(
        items.map((item) =>
          item.id === edited ? { ...item, value: content } : item
        )
      );
      setContent("");
    } else {
      setItems([...items, { id: uuidv4(), value: content }]);
      setContent("");
    }
    
    setToggleSubmit(true);
  };

  const handleDelete = (id) => {
    const newItems = items.filter((item) => id !== item.id);
    setItems(newItems);
  };

  const handleEdit = (id) => {
    const newEdited = items.find((item) => item.id === id);
    setContent(newEdited.value);
    setEdited(id);
    setToggleSubmit(false);
  };

  const handleRemoveAll = () => {
    setItems([]);
    setToggleSubmit(true);
    setContent("");
  
  };
  
  const handleDeletes =() => {
    setContent('')
  }

  return (
    <div
      className="row justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-md-5">
        <div className="card shadow bg-muted" style={{ height: "50%" }}>
          <div className="card-header">
            <h6 className="text-muted ms-4">&#128221; Add your list here</h6>
          </div>
          <div className="card-body px-5">
            <form autoComplete="off" onSubmit={handleAdd}>
              <div className="input-group mb-3">
                <input
                  required
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="&#x270D; write here"
                  onChange={handleChange}
                  value={content}
                />
                {!toggleSubmit ? (
                  <Tooltip title="Update" color="blue">
                    <button type="submit" className="btn btn-outline-primary">
                      <GrUpdate />
                    </button>
                  </Tooltip>
                ) : (
                  <Tooltip title="Submit" color="blue">
                    <button type="submit" className="btn btn-outline-primary">
                      <FiSend />
                    </button>
                  </Tooltip>
                )}

                <Tooltip title="Delete" placement="right" color="red">
                  <DeleteOutlined
                    className="delete-btn fs-6 pt-2 p-2 text-primary"
                    onClick={handleDeletes}
                  />
                </Tooltip>

              </div>
            </form>

            {items.length > 0 ? (
              items.map((item, idx) => {
                // console.log(item);
                return (
                  <Todo
                    key={idx}
                    id={item.id}
                    value={item.value}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                );
              })
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}

            {items.length > 0 && (
              <div className="text-center">
                <Button className="shadow-sm" onClick={handleRemoveAll}>
                  Remove All
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
