import './App.css';
import React, { useState, useEffect } from 'react';

import { useLocation, useParams } from 'react-router-dom';
import Loader from './Component/Loader';
function App() {

  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState(null);
  const [token, setToken] = useState('');

  


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
    setCode(codeFromURL);

   
  //   console.log("data")
   
    const getToken = async () => {
      const url = 'https://digilocker.meripehchaan.gov.in/public/oauth2/2/token';
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      // const Code = '049d89292e9ec291c5b4b390981f81597967233f';
      const grantType = 'authorization_code';
      const clientId = 'AW6A72E90E';
      const clientSecret = '88c23091c8b73a89b7a2';
      const redirectUri = 'https://verified-adharcard.vercel.app/';
      const codeVerifier = '_34W.h85p9~C_E5afi.ALG.yV_dD2Adq~Xda4k3W7U8n8y';

  //     const clientId = 'free_tier_annugupta8512_3efccbeb9f'; // Replace with your actual client ID
  // const clientSecret = '03a7294e16e54c548c694fe678d2ede1'; // Replace with your actual client secret
    
      // const bodyData = `code=${encodeURIComponent(Code)}&grant_type=${encodeURIComponent(grantType)}&client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}&redirect_uri=${encodeURIComponent(redirectUri)}&code_verifier=${encodeURIComponent(codeVerifier)}`;
     const bodyData = `code=${encodeURIComponent(code)}&grant_type=${encodeURIComponent(grantType)}&client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}&redirect_uri=${encodeURIComponent(redirectUri)}&code_verifier=${encodeURIComponent(codeVerifier)}`;
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: bodyData,
          mode: 'no-cors',
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        console.log('data response', data);
        console.log(data.access_token);
        setToken(data.access_token);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        console.log(error);
      }
    };
    
    // Call the async function
    getToken();
    


    
  }, []);



  // 
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
       <div>
         <p>Code: {code}</p>
         <h3>Acces token:{token}</h3>
        </div>
      ) : (
        <p>No code parameter found in the URL.</p>
      )}
       
    </div>
    </div>
  );
}

export default App;

