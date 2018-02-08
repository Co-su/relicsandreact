import React from "react";
import "./loginButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const LoginButton = props => (
  <span className="btn btn-submit" {...props}>
    Submit New Character
  </span>
);

export default LoginButton;