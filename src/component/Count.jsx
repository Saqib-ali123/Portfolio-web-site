import { useState } from 'react';

function App() {
  const [count, setcount] = useState(15);

  const addvalue = () => {
    if (count < 25) {
      setcount(count + 1);
    } else {
      alert(" Max value is 25");
    }
  };

  const removevalue = () => {
    if (count > 1) {
      setcount(count - 1);
    } else {
      alert(" Minimum value is 1");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607082349566-1873424f9b40?auto=format&fit=crop&w=1400&q=80')` }}
    >
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-purple-800 mb-4"> React Counter App</h1>

        <p className="text-xl font-semibold text-gray-800 mb-6">
          Current Count: <span className="text-blue-700">{count}</span>
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={addvalue}
            disabled={count >= 25}
            className={`transition-all duration-300 px-6 py-3 rounded-xl font-bold text-white ${
              count >= 25
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700'
            }`}
          >
             Add Value
          </button>

          <button
            onClick={removevalue}
            disabled={count <= 1}
            className={`transition-all duration-300 px-6 py-3 rounded-xl font-bold text-white ${
              count <= 1
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700'
            }`}
          >
             Remove Value
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
