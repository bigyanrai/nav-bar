import Navbar1 from "../components/Navbar/Navbar1";
import Navbar2 from "../components/Navbar/Navbar2";

function Home() {
  return (
    <div>
      <Navbar2 />
      <div className="text-8xl bg-gray-100">Home</div>
      <img src="/jaguar.jpg" className="w-full"></img>
      <img src="/jaguar.jpg" className="w-full"></img>
      <img src="/jaguar.jpg" className="w-full"></img>
      <img src="/jaguar.jpg" className="w-full"></img>
    </div>
  );
}

export default Home;
