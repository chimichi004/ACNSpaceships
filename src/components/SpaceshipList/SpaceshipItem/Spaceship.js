

const Spaceship = (props) => {
  return (
    <div className="col-lg-6" key={props.model}>
    <div className="card">
        <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p>{props.manufacturer}</p>
         <span className="text-danger bold-500">{props.hyperdrive_rating}</span>
        </div>
    </div>
    </div>
  );
};

export default Spaceship;
