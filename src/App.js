import {JobBoard} from './pages/JobBoard';
import {JobDetails} from './pages/JobDetails';
import { Route, Routes } from "react-router-dom";

function App() {

  
  return (
    <>
        <Routes>
          <Route path='/' element={<JobBoard />} />
          <Route path="details/:id" element={<JobDetails />} />
        </Routes>
    </>
  );
}

export default App;
