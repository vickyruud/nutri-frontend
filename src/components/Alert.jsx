import React, { useContext } from "react";
import { AppContext } from "../App";

function Alert() {
  const { error, setError } = useContext(AppContext);
  return (
  <div role="alert">
  <div class=" flex flex-row bg-red-700 text-white font-bold justify-between rounded-t px-4 py-2 mt-2">
      <p>Alert</p>
      <button onClick={() => setError(false)}>X</button>
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{error}</p>
  </div>
</div>
  );
}

export default Alert;
