import { useState } from "react";
import { Link } from "react-router-dom";
import { logoUrl } from "../utils/constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="header flex flex-col md:flex-row md:justify-between md:items-center px-6 py-4 shadow-md bg-orange-500">
      {/* Logo + Title */}
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <div className="flex items-center">
          <img
            className="w-14 h-14 mr-3"
            src={logoUrl}
            alt="BBQ Logo"
          />
          <h1 className="text-2xl font-bold text-white">BBQ</h1>
        </div>
      </div>

      {/* Nav + Search */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Nav Items */}
        <div className="nav-items flex flex-wrap items-center gap-5 text-white text-lg font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>
   

        {/* Online Status */}
        <span className="text-green-200 text-sm">✅ Online</span>

        {/* Login/Logout Button */}
        <button
          className="bg-white text-orange-500 font-semibold px-4 py-1 rounded hover:bg-orange-100"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
