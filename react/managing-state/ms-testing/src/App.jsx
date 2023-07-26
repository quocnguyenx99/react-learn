import { useState } from "react";
import { places } from "./data/places";
import List from "./component/List";
import { ImageSizeContext } from "./context/ImageSizeContext";

import "./App.css";

function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <ImageSizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          value={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
        />
        Use large Images
      </label>
      <hr />
      <List places={places} />
    </ImageSizeContext.Provider>
  );
}

export default App;
