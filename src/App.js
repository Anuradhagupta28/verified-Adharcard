import './App.css';
import React, { useState, useEffect } from 'react';

import Aadhar from './Component/Aadhar';
import { useLocation, useParams } from 'react-router-dom';
import Loader from './Component/Loader';
function App() {

  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState(null);


  useEffect(() => {
  //   const fetchData = async () => {
  //     await new Promise(resolve => setTimeout(resolve, 2000));

  //     setLoading(false);
  //   };
  //  fetchData();
   

  const getQueryParam = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  };
  const codeFromURL = getQueryParam('code');

    // Set the 'code' state
    setCode(codeFromURL);
  }, []);
  return (

    <div className="App">
     {/* <div >
      {loading ? (
        // Show loader while loading is true
        <div >
            <Loader/>
        </div>
      ) : (
        // Show image when loading is false
        <img
          className="responsiveImage"
          src="https://media.giphy.com/media/PijzuUzUhm7hcWinGn/giphy.gif"
          alt="verifiedImage"
        />
      )}
     <p>Extracted Code: {code}</p>

    </div> */}

<div>
      {code ? (
        <p>Code: {code}</p>
      ) : (
        <p>No code parameter found in the URL.</p>
      )}
    </div>
    </div>
  );
}

export default App;

