import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [goal, setGoal] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   localStorage.setItem(
    "userData",
    JSON.stringify({skills,interests,goal})
   );
    navigate("/suggestions");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800  text-white shadow-2xl p-7 rounded-xl w-full max-w-7xl min-h-[600px]"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-white">
          Tell us about yourself
        </h2>

        
        <div className="mb-4">
          <label className="block text-white mb-2 font-medium ">Your Skills</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g. HTML, JavaScript, Teamwork"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
         required />
        </div>

        
        <div className="mb-4">
          <label className="block text-white mb-2 font-medium">Your Interests</label>
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g. AI, Design, Finance"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
         required />
        </div>

        
        <div className="mb-6">
          <label className="block text-white mb-2 font-medium">Career Goal</label>
          <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="What do you want to become?"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
           required/>
        </div>

       
        <button
          type="submit"
          className="  block mx-auto w-1.5xl bg-gray-400 text-white py-3  px-1 rounded-lg font-semibold hover:bg-indigo-700  active:scale-75 duration-200 transition-all cursor-pointer"
          
        >
          Get Career Suggestions
        </button>
      </form>
    </div>
  );
}
