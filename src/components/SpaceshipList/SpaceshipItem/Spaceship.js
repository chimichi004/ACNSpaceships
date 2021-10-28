import classes from "./Spaceship.module.css";

const Spaceship = (props) => {
  return (
    <li className={` ${classes.spaceship}`}>
      <div className="row">
        <div className="col-6">
          <h2>{props.name}</h2>
        </div>
        <div className="col-6">
          <h3>{props.manufacturer}</h3>
          <p>{props.hyperdrive_rating}</p>
        </div>
      </div>
    </li>
  );
};

export default Spaceship;
