import React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";
const PopupSuccess = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className="overlay"
    >
      <div className="popup rounded-lg">
        <h1>Playlist Added!</h1>
        <button type="button" onClick={closeHandler} className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Okay</button>
      </div>
    </div>
  );
};

PopupSuccess.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default PopupSuccess;
