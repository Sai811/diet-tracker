import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

  export default function Signin(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

     async function hitSignin(e){

       e.preventDefault();

      if (!email || !password) {
      alert("Signin form cannot be empty");
      return;
      }

      try{
         const res = await axios.post("http://localhost:5000/api/auth/login",{
            email:email,
            password:password
        }) 
         localStorage.setItem("token", res.data.token);
         localStorage.setItem("userId",res.data.userId)
          alert("You are signed in!");

      }catch(err){
        console.log(err);

      }

       
    }
    function handleChangeEmail(e){
        setEmail(e.target.value)
    }

    function handleChangePassword(e){
        setPassword(e.target.value)
    }


    return (
      <>
        <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-50 w-80"
              src="/images/brand-logo.jpg"
              alt="brand-logo"
            />
            <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
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
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
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
                <Button 
                  onClick={hitSignin} type="submit" className="w-full mb-2">
                  Sign in
                </Button>
                
              </div>
            </form>
          <Link className="text-indigo-600" to="/signup">Dont have an account?</Link>
          </div>
        </div>
      </>
    );
}