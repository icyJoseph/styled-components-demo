import React from "react";

export function RenderAs({ tag: Comp, children }) {
  return <Comp>{children}</Comp>;
}

export default RenderAs;
