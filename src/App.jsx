import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components
import ExploreIntro from "./components/ExploreIntro";
import Navbar from "./components/Navbar";
import AuctionDashboard from "./pages/AuctionDashboard";
import AuctionDetails from "./pages/AuctionDetails";

function App() {
  return (
    <Router>
      {/* <Navbar /> Include the Navbar */}
      <Routes>
        <Route path="/" element={<ExploreIntro />} /> {/* Home or Intro Page */}
        <Route path="/auctions" element={<AuctionDashboard />} /> {/* Auction Dashboard Page */}
        <Route path="/auctions/:auctionId" element={<AuctionDetails />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
