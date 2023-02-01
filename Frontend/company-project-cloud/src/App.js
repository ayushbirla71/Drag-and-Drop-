import CreateTask from './component/CreateTask';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateTask from './component/UpdateTask';


function App() {
  return (
    <div>
    <BrowserRouter>
            <Routes>
            <Route path="/" element={<CreateTask/>}/>
            <Route  path="/updateTask" element={<UpdateTask/>}/>
            </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;

