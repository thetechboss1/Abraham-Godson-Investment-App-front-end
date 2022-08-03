import React, { useRef,} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Copy = () => {
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    notify();
  }

  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <ToastContainer />

      <div>
        <button onClick={copyToClipboard}>Copy</button> <br />
        {copySuccess}
      </div>
      <form>
        <input
          type="text"
          ref={textAreaRef}
          value="Some text to nnn"
          className="focus:outline-none"
        />
      </form>
    </div>
  );
};

export default Copy;
