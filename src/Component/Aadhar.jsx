import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { useLocation, useParams } from 'react-router-dom';

function Aadhar() {
  const [loading, setLoading] = useState(true);
  const { code } = useParams();

  useEffect(() => {
  //   const fetchData = async () => {
  //     await new Promise(resolve => setTimeout(resolve, 2000));

  //     setLoading(false);
  //   };
  //  fetchData();
    console.log('Code:', code);
  }, [code]);

  return (
    <div >
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

    </div>
  );
}

export default Aadhar;
