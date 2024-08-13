import About from "./components/about";
import Collection from "./components/collection";
import Customers from "./components/customers";
import Hero from "./components/hero";
import Services from "./components/services";
import Stats from "./components/stats";


const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <About/>
      <Collection/>
      <Stats/>
      <Customers/>
    </div>
  )
}

export default Home;