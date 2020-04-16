import React from "react";

export const Hello = ({ name, className = "hero" }) => (
  <h1 className={className}>Hello {name}!</h1>
);