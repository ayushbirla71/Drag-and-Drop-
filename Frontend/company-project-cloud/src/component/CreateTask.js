import React from 'react'
import { useEffect, useState } from "react";
import { fetchDataFromApi } from '../utils/api';
import axios from 'axios';

const CreateTask = () => {
    let [Title, setTitle] = useState("");
    let [Description, setDescription]= useState("");
    // let [Status,setStatus]=useState("");
    let [Deadline,setDeadline]=useState("");

    const TaskdetailsSubmit=()=>{
        let body={
            Title,Description,Deadline
        }
        const api = `http://localhost:3001/creatTask`;
        axios({method:'post',
      url:api,data:body})
          .then((res)=>{ alert(res.data.message)})
          .catch((err)=> alert(err.response.data.message))
    
    }




  return (
    <div> 
      <div>
      <label>
          Title
          <input
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </label>
        <br/>
        <label>
          Description
          <input
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </label>

        <br/>
        <label>
          Deadline
          <input
            required
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
          ></input>
        </label>

      </div>
      <button
        type="submit"
        onClick={() => {
          TaskdetailsSubmit();
        }}
      >
        {" "}
        submit
      </button>
    </div>
  )
}

export default CreateTask
