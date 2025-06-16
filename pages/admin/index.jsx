import { useState } from "react";
import axios from "axios";

AdminSignIn.hideHeader = true;
AdminSignIn.hideFooter = true;

export default function AdminSignIn() {
  const [form, setForm] = useState({ 
    'email': "", 
    'password': "" 
});
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (form.email === "" || form.password === ""){
        setError("All fields are required");
    }else{
        setError("");

        let url = "http://localhost/backends/hotel/signin.php";

        try{
            const response = await axios.post(url, form, {
                headers: {
                    'Content-Type': 'application/json',
                },withCredentials: true,
            })
            console.log(response.data);

            const {status, error} = response.data;

            if (status === "unsuccessful"){
                setError(error);
            }
            
            if (status === "success"){
                window.location.href = "/admin/dashboard";
            }
        }catch(err){
            console.log("Submit Error: ", err);
        }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-offWhite">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-offBlack">Admin Sign In</h2>
        {error && (
          <div className="mb-4 text-red-600 text-center">{error}</div>
        )}
        <div className="mb-4">
          <label className="block mb-2 text-grey" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-primary"
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-grey" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-primary"
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-offBlack py-2 rounded transition-all duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}