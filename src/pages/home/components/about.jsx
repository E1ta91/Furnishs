import { aimg } from "../../../assets";


const About = () => {
  return (
    <div
      className="relative w-screen h-screen z-0  mt-11 flex items-center justify-center"
      style={{
        backgroundImage: `url(${aimg})`,
        backgroundSize: 'cover',
      }}
    >
     
      <div className="bg-white opacity-80 absolute left-1 shadow-lg  rounded-lg  p-8 max-w-md">
        <h3 className="text-xl font-semibold mb-4">About Furnish</h3>
        <h1 className="text-3xl font-bold mb-4">Quality Makes the Belief for Customers</h1>
        <p className="text-sm leading-relaxed">
          Far far away, behind the word mountains, far from the countries 
          Vokalia and Consonantia, there live the blind texts. Separated they 
          live in Bookmarksgrove right at the coast of the Semantics, a 
          large language ocean.
        </p>
      </div>
    
      
    </div>
  );
};

export default About;
