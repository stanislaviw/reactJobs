import {JobBoard} from './pages/JobBoard';
import {JobDetails} from './pages/JobDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<JobBoard />} />
          <Route path='/details/:id' element={<JobDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
