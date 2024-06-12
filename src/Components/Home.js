import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import Ambulancedetails from './Ambulancedetails';

function Home(){
    
    return (
<div>

<nav class="navbar navbar-expand-lg navbar-light bg-primary  ms-auto">
  <a class="navbar-brand" href="#">Ambulance booking</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 
  <div class="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
    <ul class="navbar-nav ">
      <li class="nav-item active">
        <a class="nav-link" href="/login">Login</a>
      </li>
      <li class="nav-item mx-7">
        <a class="nav-link" href="/register">Register</a>
      </li>

      <li class="nav-item mx-7">
        <a class="nav-link" href="/ambulanceDetails">Ambulancedetails</a>
      </li>
      </ul>
      </div>
</nav>





<BrowserRouter>

<Routes>
<Route path="/register" element={<Registration/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/ambulanceDetails" element={<Ambulancedetails/>}></Route>
    
   
   
    
   
</Routes>
</BrowserRouter>
</div>
)
    }
export default Home ;