// Context Module Functions
import * as React from "react";

import Exercise from "./Exercise";
import Selector from "./Selector";

const App = () => {
  return (
    <>
      <select name="cars" id="cars">
        <Selector
          options={[
            { value: "volvo", display: "Volvo" },
            { value: "audi", display: "Audi" },
            { value: "mercedez", display: "Mercedez" },
          ]}
        />
      </select>
      {/* how to manage default option, onClick handlers, custom classes, etc.? */}
      {/* how to change a text based on selection? */}
      <Exercise />;
    </>
  );
};

export default App;
