import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <div>
      <header className="site-header">
        <h1 className="main-title">Sartre's List</h1>
        <h2 className="subtitle">Better-Dressed People</h2>
        <Nav />
      </header>
    </div>
  );
}
