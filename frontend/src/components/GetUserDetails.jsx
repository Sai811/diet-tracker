import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider";
import { useNavigate } from "react-router-dom";

export default function GetUserDetails(){

    const userId = useContext(UserContext);
    const navigate = useNavigate()

    const [profile, setProfile] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    healthissue: "",
    activity: "",
     });

     function handleChange(e){
        const {name,value} = e.target;
        setProfile((prev)=>({...prev,[name]:value}))
     }

     async function handleSubmit(e){
        e.preventDefault();

        const{age,gender,height,weight,activity} = profile;
        if (!age || !gender || !height || !weight || !activity) {
        alert("Please fill all required fields.");
        return;
        }
        
        try{
            const token = localStorage.getItem("token");
            const res = await axios.put("http://localhost:5000/api/auth/profile",
        
            profile,
        {
            headers: {
                Authorization: `Bearer ${token}`, // ✅ Correct
            }
        }
      );
    alert("Profile saved successfully!");
    navigate("/dashboard");
      
        }catch(err){
            console.error(err)
        }


     }

    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
          Complete Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Age *</label>
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender *</label>
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Height (in cm) *</label>
            <input
              type="number"
              name="height"
              value={profile.height}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Weight (in kg) *</label>
            <input
              type="number"
              name="weight"
              value={profile.weight}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Health Issues</label>
            <input
              type="text"
              name="healthissue"
              value={profile.healthissue}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300"
              placeholder="e.g. Diabetes, Asthma, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Activity Level *</label>
            <select
              name="activity"
              value={profile.activity}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300"
              required
            >
              <option value="">Select</option>
              <option value="verylow">Very Low</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="veryhigh">Very High</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-md font-semibold"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}