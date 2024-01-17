import "./App.css"
import React from 'react';
import io from 'socket.io-client';
import { useState,useEffect } from "react";

const App = () => {
  const [code, setCode] = useState(null);

  useEffect(() => {
   const getQueryParam = (name) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    };
    const codeFromURL = getQueryParam('code');
      setCode(codeFromURL);
      socket.emit('code send', code);

      },[])

const socket = io('https://verified-adharcard.vercel.app/');
  return (
    <div>
      <h1>My React App</h1>
      <p>Code: {code}</p>
    </div>
  );
};

export default App;
