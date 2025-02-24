import React from "react";
import Box from "./Box";

function BoxComponent() {
  return (
    <div className="h-full md:mx-12 grid-cols-1 grid md:grid-cols-3 gap-6 md:px-7 mx-12 mt-14 pb-12 justify-center items-center ">
      <Box heading="Sea Freight" />
      <Box heading="Air Freight" />
      <Box heading="Ware Freight" />
      <Box heading="Packing & Moving" />
      <Box heading="Consolidation" />
      <Box heading="Road Transport" />
    </div>
  );
}

export default BoxComponent;
