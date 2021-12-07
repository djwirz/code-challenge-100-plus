import { useState } from "react";

const Validate = () => {
  const [MBI, updateMBI] = useState("");
  const [valid, updateValidity] = useState("");

  async function requestMBIValidation(MBI) {
    const res = await fetch("/api/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: MBI }),
    });

    const json = await res.json();

    updateValidity(json.data);
  }

  return (
    <div className="half center">
      <label className="center">Validate Medicare Beneficiary Identifier</label>
      <br />
      <input
        value={MBI}
        placeholder="Your MBI"
        onChange={(e) => updateMBI(e.target.value)}
      />
      <button onClick={() => requestMBIValidation(MBI)}>Validate</button>
      {valid && <div>Valid</div>}
      {!valid && valid !== "" && <div>Invalid</div>}
    </div>
  );
};

export default Validate;
