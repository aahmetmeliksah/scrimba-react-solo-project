import React from "react";

export default function Cards(props) {
  return (
    <div className="card-container">
      {<img className="card-img" src={props.imageUrl} alt="" />}
      <div className="card-sub-container">
        <p className="location"> {props.location} </p>
        <h2 className="card-title">{props.title}</h2>
        <p className="start-end">
          {" "}
          {props.startDate} - {props.endDate}{" "}
        </p>
        <p className="card-desc"> {props.description} </p>
      </div>
    </div>
  );
}
