import CreateTask from './component/CreateTask';
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateTask from './component/UpdateTask';
// import DrageDrop from './component/DragDrop';


function App() {
  return (
    <>
    <BrowserRouter>
            <Routes>
              {/* <Route path='/Home' element={<DrageDrop/>}/> */}
            <Route path="/" element={<CreateTask/>}/>
            <Route path="/updateTask" element={<UpdateTask/>}/>
            </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
