import React from "react";

const Description = () => {
  return (
    <div>
      <div className="wrapper">
        <h2>In this app we have</h2>
        <h3>Hooks</h3>
        <ul>
          <li>useState</li>
          <li>useRef</li>
          <li>useEffect</li>
        </ul>
      </div>
        <br/>
        <hr/>
      <div className="wrapper">
        <h3>Functionality</h3>
        <ul>
          <li>add task to state</li>
          <li>remove task</li>
          <li>input focus</li>
          <li>checkbox checked</li>
          <li>Css edition on checked task</li>
        </ul>
      </div>
      <hr/>
    </div>
  );
};

export default Description;
