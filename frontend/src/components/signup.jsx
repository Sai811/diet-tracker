import axios from "axios";
import { useContext, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import { UserContext } from "./UserContextProvider";
import { Button } from "./ui/button";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userId = useContext(UserContext)
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

   async function hitSignUp(e) {

     e.preventDefault();

    if (!username || !email || !password) {
      alert("Signup form cannot be empty");
      return;
    }

    const res = await axios.post("http://localhost:5000/api/auth/register", {
        username:username,
        email:email,
        password:password,
      })
      try{
        alert("You are signed up"); 
        userId.current = res.data.id
        localStorage.setItem("userId",res.data.id)
        localStorage.setItem("token",res.data.token)
        navigate("/getUserDetails");
      }catch(err){
        console.error(err);
        
      }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-50 w-80" src="/images/brand-logo.jpg" alt="brand-logo"/>
          <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2" action="#" method="POST">
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                UserName
              </label>
              <div className="mt-2">
                <input onChange={handleChangeUsername} type="text" name="username" id="username" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"/>
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <Button onClick={hitSignUp} type="submit" className="w-full mt-4 mb-2 ">
                    Sign up
              </Button>
            </div>
          </form>

          <div>
          <Link className="text-indigo-600" to="/signin">Already Signed Up?</Link>      
      </div>
        </div>
      </div>
    </>
  );
}
