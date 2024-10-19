import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from 'recoil'; 
import Navbar from "./components/Navbar";
import AuctionDashboard from "./pages/AuctionDashboard";
import AuctionDetails from "./pages/AuctionDetails";
import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import SignupSuccess from "./pages/SignupSuccess";
import Home from "./pages/Home";

function App() {
  return (
    <RecoilRoot> 
      <Router>
        {/* <Navbar /> Include the Navbar */}
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/auctions" element={<AuctionDashboard />} /> 
          <Route path="/auctions/:auctionId" element={<AuctionDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup-success" element={<SignupSuccess/>}/>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
