import React, { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function Container({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader">
          <PropagateLoader color={"#FFFFFF"} loading={loading} size={50} />
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default Container;
