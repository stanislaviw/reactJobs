import {JobBoard} from './pages/JobBoard';
import {JobDetails} from './pages/JobDetails';
import { Route, Routes } from "react-router-dom";

function App() {

  
  return (
    <>
        <Routes>
          <Route path='/reactjobs' element={<JobBoard />} />
          <Route path="/reactjobs/details/:id" element={<JobDetails />} />
        </Routes>
    </>
  );
}

export default App;
