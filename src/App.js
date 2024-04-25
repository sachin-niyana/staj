import "./App.css";
import Aboutus from "./components/Aboutus";
import Features from "./components/Features";
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
        <Features />
        <Aboutus/>
        <OurTeam />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
