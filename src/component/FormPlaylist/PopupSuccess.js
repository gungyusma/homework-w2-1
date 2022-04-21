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
      <div className="popup">
        <h1>Playlist Added!</h1>
        <button className="btn-create" onClick={closeHandler}>okey</button>
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
