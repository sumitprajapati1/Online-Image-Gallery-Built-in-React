import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
   <div> 
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
      <img src="https://images.unsplash.com/photo-1495001258031-d1b407bc1776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwaW1hZ2UlMjBsaW5rfGVufDB8fDB8fHww" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl-mb2"> Photo by Sumit </div>
        <ul>
        <li>
          <strong> Views : 4000 </strong>
        </li>
        <li> 
          <strong> Likes : 300 </strong>
        </li>
        <li> 
          <strong> Downloads: 200 </strong>
        </li>

      </ul>
      </div>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Tag 1
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Tag 2
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Tag 3
      </span>
    </div>
   </div>
   </>
  );
}

export default App;
