import Footer from "./assets/Footer";
import Hero from "./assets/Hero";
import Navigation from "./assets/Navigation";

function App() {
  return (
    <>
      <div className="main w-full h-screen">
        <Navigation/>
        <Hero />
        <Footer/>
      </div>
    </>
  );
}

export default App;
