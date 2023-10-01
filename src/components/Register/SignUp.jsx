
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const [success, SetSuccess] = useState('');
  const[err,setErr]=useState('');
  const {createUser}=useContext(AuthContext)
  const navigate=useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass);

    createUser(email,pass)
    .then((result)=>{
        console.log(result.user);
        e.target.reset();
        navigate('/')


    })
    .catch(err=>{
        console.error(err);
    })

    // createUserWithEmailAndPassword(auth, email, pass)
    //   .then((result) => {
    //     const userAccount = result.user;
    //     console.log(userAccount);
    //     SetSuccess('user created successfully');
    //   })
    //   .catch((err) => {
    //     console.log("error", err);
    //     const errr=err.message
    //     setErr(errr)
    //   });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
       
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSignup}>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">SignUp</button>
              </div>
            </form>

            <p className="text-sm text-center mb-5">
              Already have an account{" "}
              <Link to="/login" className="text-blue-700">
                LogIn
              </Link>
            </p>
            {
            success&&<p className="text-green-400 text-center">{success}</p>
        }
        {
            err&&< p className="text-red-600 text-sm text-center">{err}</p>

        }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
