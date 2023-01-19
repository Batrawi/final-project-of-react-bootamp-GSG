import React from "react";
import data from "../data";
const Card = () => {
  return (
    <>
      <section className="filters">
        <h1>Burger Place</h1>
        <h2>Filters</h2>

        {/* side bar */}
        <form>
          <fieldset>
            <legend>Price</legend>
            <label htmlFor="">min price</label>
            <input
              type="range"
              id="volume"
              name="price"
              min="0"
              max="9"
            ></input>
            <label htmlFor="">min price</label>
            <input
              type="range"
              id="volume"
              name="price"
              min="0"
              max="9"
            ></input>
          </fieldset>
        </form>
        <form action="">
          <fieldset>
            <legend>Category</legend>
          </fieldset>
        </form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <ul className="grid">
          {data.map((data) => (
            <li className="card">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <p>{`${data.price}$`}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Card;
