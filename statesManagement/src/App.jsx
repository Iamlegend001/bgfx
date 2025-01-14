import { useState, useRef, useEffect } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Ref for the input field
  const passwordRef = useRef(null);

  // Function to generate a password
  const generatePassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  };

  // useEffect to generate password whenever dependencies change
  useEffect(() => {
    generatePassword();
    // Focus and select the password after generation
    if (passwordRef.current) {
      passwordRef.current.focus();
      passwordRef.current.select();
    }
  }, [length, numAllowed, charAllowed]); // Dependencies for password generation

  return (
    <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-8 my-10 text-orange-500 bg-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        Password Generator
      </h1>
      <div className="flex shadow-md rounded-lg overflow-hidden mb-6 bg-gray-700">
        <input
          type="text"
          value={password}
          ref={passwordRef} // Attach the ref
          className="outline-none w-full py-2 px-4 text-gray-300 bg-transparent placeholder-gray-500"
          placeholder="Generated password will appear here"
          readOnly
        />
      </div>
      <div className="mt-4">
        <label className="flex items-center text-white mb-2">
          <input
            type="checkbox"
            checked={numAllowed}
            onChange={(e) => setNumAllowed(e.target.checked)}
            className="mr-2"
          />
          Include Numbers
        </label>
        <label className="flex items-center text-white mb-2">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
            className="mr-2"
          />
          Include Special Characters
        </label>
        <label className="flex items-center text-white">
          <span className="mr-2">Password Length:</span>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min={4}
            max={20}
            className="w-16 text-center bg-gray-600 text-white rounded-md px-2 py-1"
          />
        </label>
      </div>
      <button
        onClick={generatePassword}
        className="mt-6 w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition duration-200"
      >
        Generate Password
      </button>
    </div>
  );
}
