import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  return (
    <div>
      <button onClick={tickle}>Tickle me!</button>
    </div>
  );
}

export default Tickler;

