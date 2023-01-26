
// import React, {useState} from "react";
// import {DragDropContext, Droppable , Draggable} from 'react-beautiful-dnd';

// const itemsFromBackend=[
//     {id: uuid(), content:'First task'},
//     {id: uuid(), content:'Second task'}
// ]
// const columnsFromBackend={
//     [uuid()]:{
//         name:'Todo',
//         items:[itemsFromBackend]
//     }
// };

// const onDragEnd = (result, columns, setColumns)=>{
//     if(!result.destination) return;
//     const {source, destination}= result;
//     const column = columns[source.droppableId];
//     const copiedItems = [...column.item]
//     const [removed] = copiedItems.splice(source.index,1 );
//     copiedItems.splice(destination.index, 0, removed);
//     setColumns({
//         ...columns,
//         [source.droppableId]: {
//             ...column,
//             items: copiedItems
//         }
//     })
// }

// function DrageDrop(){
//     const [columns, setColumns]=useState([])

//     return (
//         <div style={{display:'flex', justifyContent:'center', height:'100%'}}>
//             <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
//                 {Object.entries(columns).map(([id, columns])=>{
//                     return (
//                         <div>
//                             <h2>{columns.name}</h2>
//                         <Droppable droppableId={id} key={id} style={{margin:8}}>
//                             {(provided, snapshot)=>{
//                                 return (
//                                     <div
//                                         {...provided.droppableProps}
//                                         ref={provided.innerRef}
//                                         style={{
//                                             background:snapshot.isDraggingOver ? 'Lightblue' : 'Lightgrey',
//                                             pedding:4, width:250, minHeight:500
//                                         }}
//                                         >
//                                             {columns.items.map((item, index)=>{
//                                                 return (
//                                                     <Draggable key={item.id} draggableId={item.id} index={index}>
//                                                         {(provided, snapshot)=>{
//                                                             return (
//                                                                 <div
//                                                                 ref={provided.innerRef}
//                                                                 {...provided.draggableProps}
//                                                                 {...provided.dragHandleProps}
//                                                                 style={{
//                                                                     userSelect: 'none',
//                                                                     padding: 16,
//                                                                     margin: '0 0 8px 0',
//                                                                     minHeight: '50px',
//                                                                     backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
//                                                                     color:"white",
//                                                                     ...provided.draggableProps.style
//                                                                 }}
//                                                                 >
//                                                                 </div>
//                                                             )
//                                                         }}
//                                                     </Draggable>
//                                                 )
//                                             })}
//                                             {provided.placeholder}
//                                     </div>
//                                 )
//                             }}
//                         </Droppable>
//                         </div>
//                     )
//                 })}
//             </DragDropContext>
//         </div>
//     )
// }

// export default DrageDrop;