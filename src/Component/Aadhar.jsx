// import React, { useState, useEffect } from 'react';
// import Loader from './Loader';
// import { useLocation, useParams } from 'react-router-dom';

// function Aadhar() {
//   const [loading, setLoading] = useState(true);
//   const { code } = useParams();

//   useEffect(() => {
//   //   const fetchData = async () => {
//   //     await new Promise(resolve => setTimeout(resolve, 2000));

//   //     setLoading(false);
//   //   };
//   //  fetchData();

//   const handleTokenRequest = async () => {
//     const apiUrl = 'https://digilocker.meripehchaan.gov.in/public/oauth2/2/token';

//     const requestBody = new URLSearchParams();
//     requestBody.append('code', 'your_code_value');
//     requestBody.append('grant_type', 'authorization_code');
//     requestBody.append('client_id', 'your_client_id');
//     requestBody.append('client_secret', 'your_client_secret');
//     requestBody.append('redirect_uri', 'your_redirect_uri');
//     requestBody.append('code_verifier', 'your_code_verifier');

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: requestBody,
//       });

//       const responseData = await response.json();
//       setToken(responseData.access_token);

//       // Handle other response data as needed
//     } catch (error) {
//       console.error('Error fetching token:', error);
//     }
//   };
//     console.log('Code:', code);
//   }, [code]);

//   return (
//     <div >
//       {loading ? (
//         // Show loader while loading is true
//         <div >
//             <Loader/>
//         </div>
//       ) : (
//         // Show image when loading is false
//         <img
//           className="responsiveImage"
//           src="https://media.giphy.com/media/PijzuUzUhm7hcWinGn/giphy.gif"
//           alt="verifiedImage"
//         />
//       )}
//      <p>Extracted Code: {code}</p>

//     </div>
//   );
// }

// export default Aadhar;
