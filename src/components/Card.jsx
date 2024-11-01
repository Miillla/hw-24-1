import React from "react";

export default function Card({ header, text }) {
  return (
    <div className="card mb-3">
      <div className="card-header">{header}</div>
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
