import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ApplicantLogin } from './components/ApplicantLogin';
import { EmployerLogin } from './components/EmployerLogin';
import { JobPosting } from './components/JobPosting';
import { Jobs } from './components/Jobs';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/applicantlogin" element={<ApplicantLogin/>}></Route>
      <Route path="/employerlogin" element={<EmployerLogin/>}></Route>
      <Route path="/jobposting" element={<PrivateRoute><JobPosting/></PrivateRoute>}></Route>
      <Route path="/jobs" element={<PrivateRoute><Jobs/></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
