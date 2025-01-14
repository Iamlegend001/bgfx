import { useState, useCallback } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-8 my-10 text-orange-500 bg-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        Password Generator
      </h1>
      <div className="flex shadow-md rounded-lg overflow-hidden mb-6 bg-gray-700">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-4 text-gray-300 bg-transparent placeholder-gray-500"
          placeholder="Generated password will appear here"
          readOnly
        />
        <button
        className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition duration-200"
      >
        Generate Password
      </button>
      </div>
      
    </div>
  </>
  
  );
}
