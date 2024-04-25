import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import Faq from "./components/Faq";
function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Header />
        <OurTeam />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
