import { useReducer, useState } from "react";

const emptyData = {
  name: "",
  password: "",
  Email: "",
  Address: ""
};

const reducer = (data, action) => {
  return { ...data, [action.type]: action.val };
};

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, emptyData);
  const [showData, setShowData] = useState(false);

  return (
    <>
      <input
        type="text"
        onChange={(e) => dispatch({ type: "name", val: e.target.value })}
        placeholder="Enter your Name"
      />
      <br /><br />

      <input
        type="text"
        onChange={(e) => dispatch({ type: "password", val: e.target.value })}
        placeholder="Enter your Password"
      />
      <br /><br />

      <input
        type="text"
        onChange={(e) => dispatch({ type: "Email", val: e.target.value })}
        placeholder="Enter your Email"
      />
      <br /><br />

      <input
        type="text"
        onChange={(e) => dispatch({ type: "Address", val: e.target.value })}
        placeholder="Enter your Address"
      />
      <br /><br />

      <button onClick={() => setShowData(true)}>Submit</button>

      {showData && (
        <ul>
          <li>Name: {state.name}</li>
          <li>Password: {state.password}</li>
          <li>Email: {state.Email}</li>
          <li>Address: {state.Address}</li>
        </ul>
      )}
    </>
  );
}
