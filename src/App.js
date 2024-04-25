import "./App.css";
import Aboutus from "./components/Aboutus";
import Features from "./components/Features";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Header />
        <Features />
        <Aboutus/>
        <OurTeam />
      </div>
    </>
  );
}

export default App;
