import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Copy = () => {
  const [copyText, setCopyText] = useState("");
  const handleCopy = () => {
    setCopyText(test);
    navigator.clipboard.writeText(copyText);
  };

 

  const test = "its working1234";

  return (
    <div>
      <p>{test}</p>
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default Copy;
