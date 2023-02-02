
import {useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  let navigate = useNavigate();
  let [Title, setTitle] = useState("");
  let [Description, setDescription] = useState("");
  let [Deadline, setDeadline] = useState("");

  const TaskdetailsSubmit = () => {
    let body = {
      Title,
      Description,
      Deadline,
    };
    const api = `http://localhost:3001/creatTask`;
    axios({ method: "post", url: api, data: body })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <div
      style={{
        height: "610px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          margin: "30px",
          height: "300px",
          justifyItems: "center",
          textAlign: "center",
          border: "solid",
          width: "300px",
          color: "white",
        }}
      >
        <label>
          Title
          <br />
          <input
            style={{ color: "black" }}
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Description
          <br />
          <input
            style={{ color: "black" }}
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </label>

        <br />
        <label>
          Deadline
          <br />
          <input
            style={{ color: "black" }}
            type="date"
            required
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <button
          style={{ color: "black" }}
          className="btn btn-info"
          type="submit"
          onClick={() => {
            TaskdetailsSubmit();
          }}
        >
          {" "}
          submit
        </button>
      </div>
      <div>
        <button
          style={{ color: "black" }}
          className="btn btn-info"
          id="signup"
          onClick={() => {
            navigate("/updateTask");
          }}
        >
          Check Task Status
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
