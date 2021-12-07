import { render } from "react-dom";
import Generate from "./Generate";
import Validate from "./Validate";

const App = () => {
  return (
    <div>
      <h1 className="center">Medicare Beneficiary Identifier</h1>
      <div className="container">
        <Generate />
        <Validate />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
