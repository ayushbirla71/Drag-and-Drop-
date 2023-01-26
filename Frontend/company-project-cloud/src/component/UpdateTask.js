import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const UpdateTask = () => {
  const { searchQuery } = useParams();
  let [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const api = `http://localhost:3001/getTask`;
    axios({ method: "get", url: api })
      .then(
        (res) => {
          alert(res.data.message);
          return res.data.data;
        },
        [SubmitEvent]
      )
      .then((res) => setData(res))
      .catch((err) => alert(err.response.data.message));
  }, [searchQuery]);
  var getTask=data.map((item,index)=>{
    let Open
    let Completed
    let inProg
    if(item.Status==="Open"){
      Open=item.Title
    }
    if(item.Status==="in-progress"){
      inProg=item.Title
    }
    if(item.Status==="Completed"){
      Completed=item.Title
    }
    return  (
      
           <tr >
           <td>{Open}</td>
           <td>{inProg}</td>
           <td>{Completed}</td>
         </tr>
    )
    })

  return (
    <DragDropContext>
      <div className="container">
        <h2>Task Status Table</h2>
        <p>The .table-bordered class adds borders to a table:</p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Open</th>
              <th>In-Progres</th>
              <th>Completed</th>
            </tr>
          </thead>
          <Droppable droppableId="tbody">
             {(provided)=>(
               <tbody ref={provided.innerRef}{...provided.droppableProps}>
               {data?.map((item, index)=>(
                 <Draggable draggableId={item._id}>
                 {(provided)=>(
                   <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                   <td>{item._id}</td>
                   <td>{item.Status}</td>
                   <td>{item.Title}</td>
                 </tr>
                 )}
                 </Draggable>
               ))}
             
             </tbody>
             )}
              </Droppable>
        </table>
      </div>
    </DragDropContext>
  );
};

export default UpdateTask;
