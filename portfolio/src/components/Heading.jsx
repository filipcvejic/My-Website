import React from "react";

function Heading({ title }) {
  return (
    <h1 className="text-center text-6xl z-20 relative pt-12 font-bold before:content-underline before:absolute before:w-full before:left-0 before:top-16 before:-z-10">
      {title}
    </h1>
  );
}

export default Heading;
