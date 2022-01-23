import React from "react";

export default function Cards(props) {
  console.log(props);
  return (
    <div className="card-container">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p></p>
    </div>
  );
}
