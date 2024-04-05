import React from 'react'
import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/ClipLoader";

function Loader() {

    const override= css ` 
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      `};
  return (
    <div>
<div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </div>
  )
}

export default Loader