import React, { useState } from 'react';
import './loader.css';


function Loader() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="loader">
    </div>
  );
}

export default Loader;