import React from "react";

import Spaceship from "./SpaceshipItem/Spaceship";
import classes from "./Spaceships.module.css";

const Spaceships = (props) => {
  return (
    <>
      <div className="row">
        {props.spaceships.map((spaceship) => (
          <Spaceship
            key={spaceship.id}
            name={spaceship.name}
            manufacturer={spaceship.manufacturer}
            hyperdrive_rating={spaceship.hyperdrive_rating}
          />
        ))}
      </div>
    </>
  );
};

export default Spaceships;
