import { useState } from "react";

const Generate = () => {
  const [newMBI, setNewMBI] = useState("");

  async function requestMBI(e) {
    // don't want to render away the goods
    e.preventDefault();

    const res = await fetch("/api/generate");
    const json = await res.json();

    setNewMBI(json.data);
  }

  return (
    <div className="half center">
      <form>
        <label className="center">
          Generate new Medicare Beneficiary Identifier
        </label>
        <br />
        <button onClick={(e) => requestMBI(e)}>Generate</button>
      </form>
      {newMBI !== "" && <div>New MBI: {newMBI}</div>}
    </div>
  );
};

export default Generate;
