import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Trailer = ({ trailerURL, setTrailerURL }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    setTrailerURL(false);
  };

  return (
    <div className="Trailer">
      <div className="relative-div">
        <video src={trailerURL} controls />
        <div className="Trailer__close">
          <AiOutlineClose
            onClick={handleClick}
            className="Trailer__closeIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default Trailer;
