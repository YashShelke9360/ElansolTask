
import './App.css';
import Signup from './component/Signup.js';
import Login from './component/Login.js';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DisplayUsers from './component/DisplayUsers.js';
function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/createuser" element={<Signup/>}/>
        <Route path='/displayUsers' element={<DisplayUsers/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
