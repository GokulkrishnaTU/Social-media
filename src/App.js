import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
// import { Login } from "@mui/icons-material";
import Home from "./pages/home/home"
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div>

<Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='profile/:username' element={<Profile/>}/>

      </Routes>

 


</div>

   
  );
  }

export default App;
