import React from "react";
import padsData from "./pads";
import Pad from "./Pad";

function App() {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    // console.log(id);
    setPads((prevPads) =>
      prevPads.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
    // map over the pads array, and if the current item has
    // the same id as the one passed to this function, then
    // flip its `on` value.
  }

  const buttonElement = pads.map((pad) => (
    <Pad
      toggle={toggle}
      id={pad.id}
      key={pad.id}
      color={pad.color}
      on={pad.on}
    />
  ));
  return (
    <main>
      <div className="pad-container">{buttonElement}</div>
    </main>
  );
}

export default App;
