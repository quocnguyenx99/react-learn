import { useState } from "react";

function App() {
  const [positon, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${positon.x}px, ${positon.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

export default App;
