import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
     {/* <NavBar /> */}
    </>
  );
}

export default App;
