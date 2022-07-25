import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

export default function Todo({ value, id, handleDelete, handleEdit }) {
  return (
    <div className="">
      <div
        className="alert alert-info  shadow-sm mt-3 py-2"
        role="alert"
      >
        <span className="text-dark fs-6 display-content">{value}</span>
        <span className="float-end mx-2">
          <Tooltip title="Delete" placement="right" color="red">
            <DeleteOutlined
              className="delete-btn fs-6"
              onClick={() => handleDelete(id)}
            />
          </Tooltip>
        </span>
        <span className="float-end">
          <Tooltip title="Edit" placement="bottom" color="green">
            <EditOutlined
              className="edit-btn fs-6"
              onClick={() => handleEdit(id)}
            />
          </Tooltip>
        </span>
      </div>
    </div>
  );
}
