import axios from "axios";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

   function hitSignUp(e) {

     e.preventDefault();

    if (!username || !email || !password) {
      alert("Signup form cannot be empty");
      return;
    }

    axios.post("http://localhost:5000/api/auth/register", {
        username:username,
        email:email,
        password:password,
      })
      .then(() => {
        alert("You are signed up"); 
        navigate("/signin");
      })
      .catch((err) => {
        alert("Signup failed");
        console.log(err);
      });
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-30 w-auto" src="/images/brand-logo.jpg" alt="brand-logo"/>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                UserName
              </label>
              <div className="mt-2">
                <input onChange={handleChangeUsername} type="text" name="username" id="username" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
              </div>

              <label className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChangeEmail}
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleChangePassword}
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button onClick={hitSignUp} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Sign up
              </button>
            </div>
          </form>

          <div>
      <Link to="/signin">Already Signed Up?</Link>      
      </div>
        </div>
      </div>
    </>
  );
}
