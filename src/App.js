import "./App.css";
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
        <Features/>
        <OurTeam />
      </div>
    </>
  );
}

export default App;
