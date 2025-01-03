import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../App.css"
import { useRef } from "react";

const Navbar = () => {


  const navbarContainer = useRef();
  useGSAP(()=>{
    gsap.fromTo(".navbarContainer", {
      y: -30,
     
    } ,{
      y: 0,
      duration:1,
      
    } , {scope:navbarContainer})
  })



  return (
    <nav className="navbarContainer flex justify-between items-center mt-4 shadow-md rounded-md" ref={navbarContainer}>
      {/* Logo Section */}
      <div className="relative text-5xl text-white px-8">
        <h1 className="">PokeScope</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-20 text-lg text-white px-12">
        <li className="hover:scale-110 transform transition-all duration-200">
          <a href="/" className="hover:text-yellow-400">Home</a>
        </li>
        <li className="hover:scale-110 transform transition-all duration-200">
          <a href="/market" className="hover:text-yellow-400">Market</a>
        </li>
        <li className="hover:scale-110 transform transition-all duration-200">
          <a href="/builder" className="hover:text-yellow-400">Builder</a>
        </li>
        <li className="hover:scale-110 transform transition-all duration-200">
          <a href="/buy-me-a-coffee" className="hover:text-yellow-400">Buy me a coffee</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
