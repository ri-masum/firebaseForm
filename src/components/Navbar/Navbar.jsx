import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user,logout}=useContext(AuthContext);
  const handleLogout=()=>{
    logout()
    .then(result=>{
      console.log('succesfully log out');

    })
    .catch(err=>{
      console.log(err);
    })
  }
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
     {
      user ?'':
      <>
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
     </>
     }
      {
        user ? <>
         <span>{user.email}</span>
      <button onClick={handleLogout} className="btn btn-sm">SignOut</button>
        </>:''
      }
     
    </div>
  );
};

export default Navbar;
