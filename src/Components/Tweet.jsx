// import "./App.css";
import React from "react";

function Tweet(props) {
  return (
    <div className="tweet">
      <h3 className="username">{props.username}</h3>
      <p className="name">{props.name}</p>
      <p className="date">{props.date}</p>
      <p className="message">{props.message}</p>
    </div>
  );
}

export default Tweet;
