import React from "react";

function Heading({ title }) {
  return (
    <h1 className="text-center text-6xl z-50 relative pt-10 font-bold before:content-underline before:absolute before:left-0 before:top-14 before:-z-10">
      {title}
    </h1>
  );
}

export default Heading;
