import React from "react";

import Spaceship from "./SpaceshipItem/Spaceship";
import classes from "./Spaceships.module.css";

const Spaceships = (props) => {
  return (
    <>
      <ul className={classes["spaceships-list"]}>
        {props.spaceships.map((spaceship) => (
          <Spaceship
            key={spaceship.id}
            name={spaceship.name}
            manufacturer={spaceship.manufacturer}
            hyperdrive_rating={spaceship.hyperdrive_rating}
          />
        ))}
      </ul>
    </>
  );
};

export default Spaceships;
