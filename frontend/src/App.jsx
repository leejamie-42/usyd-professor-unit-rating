
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Ratings from "./pages/Ratings";
// import Forum from "./pages/Forum";
// import Login from "./pages/Login";
// import Listings from "./pages/Listings";
// import Checkout from "./pages/Checkout";

function App() {
    return (
        <Router>
            {/*<Navbar />*/}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/ratings" element={<Ratings />} />*/}
                    {/*<Route path="/forum" element={<Forum />} />*/}
                    {/*<Route path="/login" element={<Login />} />*/}
                    {/*<Route path="/listings" element={<Listings />} />*/}
                    {/*<Route path="/checkout" element={<Checkout />} />*/}
                </Routes>
            </main>
        </Router>
    )
}

export default App;