import React from "react";
import Boards from "./features/board/Boards";
import initialData from "./initial-data";

function App() {
  return <Boards initialData={initialData} />;
}

export default App;
