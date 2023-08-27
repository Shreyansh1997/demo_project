import logo from './logo.svg';
import './App.css';
//import { Outlet, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <div className='adminlogin'>
        <Link to='AdminLogin'  >Admin Login</Link>
      </div>
</div> 
  )
}

export default App;
