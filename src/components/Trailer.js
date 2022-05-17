import React from "react";

const Trailer = ({ trailerURL, setTrailerURL }) => {
  const handleClick = () => {
    console.log("fcgjhbk");
    setTrailerURL(false);
  };

  return (
    <div className="Trailer">
      <div>
        <iframe>
          <source src={trailerURL} />
        </iframe>
        <button className="btn btn-danger" onClick={handleClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Trailer;
