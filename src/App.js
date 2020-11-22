import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App({ children }) {
  return (
    <div className="App">
      <Width render={ShowWidth} />
      <Width render={SmallWidth}>
        {" "}
        <h1>This is showed on SmallWidth</h1>{" "}
      </Width>
      <Width render={LargeWidth}>
        {" "}
        <h1>This is showed on LargeWidth</h1>{" "}
      </Width>
    </div>
  );
}

function Width({ render, children }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", ({ target }) =>
      setWidth(target.innerWidth)
    );
  }, []);

  return <>{render({ width, children })} </>;
}

const SmallWidth = ({ width, children }) => {
  if (width < 500) return children;
  return null;
};

const LargeWidth = ({ width, children }) => {
  if (width > 500) return children;
  return null;
};
const ShowWidth = ({ width }) => (
  <div>
    <h1>current width is {width}</h1>
  </div>
);

//now instead of writing our own render logic we will
// take the width and pass it to
// render funct passed as a prop(render props)
