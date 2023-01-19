import React from "react";

function Person(props) {
  const name =
    props.name.length > 8 ? props.name.slice(0, 6) + "..." : props.name;
  const ageCheck = props.age >= 21 ? "have a drink!" : "you must be 21";
  const hobbies = props.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>);

  return (
    <div className="person">
      <p>
        Learn some information about <span className="name">{name}</span>
      </p>
      <h3 className="age-check">{ageCheck}</h3>
      <ul>{hobbies}</ul>
    </div>
  );
}

export default Person;
