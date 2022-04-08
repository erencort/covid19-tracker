import React from "react";

function InfoCard({ color, heading, value, desc }) {
  return (
    <div className={`card ${color}`}>
      <div className="card-content">
        <div>
          <h1>
            {heading}: {value}
          </h1>
        </div>
        <div>
          <h4>Last update: 2-1-2002</h4>
        </div>
        <div>{desc}</div>
      </div>
    </div>
  );
}

export default InfoCard;
