import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-evenly bg-red-100 py-4">
      <NavLink
        to="/"
        className={({ isActive, isPending }) => 
          isPending ? "pending" : isActive ? "underline text-blue-600" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline text-blue-600" : ""
        }
      >
        LogIn
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "underline text-blue-600" : ""
        }
      >
        SignUp
      </NavLink>
      
    </div>
  );
};

export default Navbar;
