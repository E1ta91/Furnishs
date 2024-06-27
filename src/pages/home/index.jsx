import Navbar from "../../components/navbar";
import About from "./components/about";
import Collection from "./components/collection";
import Customers from "./components/customers";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Services from "./components/services";
import Stats from "./components/stats";
import Works from "./components/works";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Collection/>
      <Stats/>
      <Customers/>
      <Works/>
      <Footer/>
    </div>
  )
}

export default Home;