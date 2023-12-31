import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Login = () => {

    const {login}=useContext(AuthContext)
    const navigate=useNavigate()

  const handleForm = (e) => {
    e.preventDefault();

    const email=e.target.email.value;
    const pass=e.target.password.value;
    console.log(email,pass);


    login(email,pass)
    .then(result=>{
        console.log(result.user);
        e.target.reset();
        navigate('/')
    })
    .catch(err=>{
        console.error(err);
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleForm}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Login</button>
              </div>
            </div>
          </form>
          <p className="text-sm text-center mb-5">New User? Please <Link to='/register' className="text-blue-700">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
