import { useDispatch } from 'react-redux'
import { addSpaceship } from '../../store/actions/spaceshipActions';
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const SpaceshipForm = () => {
    const dispatch  = useDispatch();

  const {
    value: spaceshipNameValue,
    isValid: spaceshipNameIsValid,
    hasError: spaceshipNameHasError,
    valueChangeHandler: spaceshipNameChangeHandler,
    inputBlurHandler: spaceshipNameBlurHandler,
    reset: resetSpaceshipName,
  } = useInput(isNotEmpty);

  const {
    value: manufacturerValue,
    isValid: manufacturerIsValid,
    hasError: manufacturerHasError,
    valueChangeHandler: manufacturerChangeHandler,
    inputBlurHandler: manufacturerBlurHandler,
    reset: resetManufacturer,
  } = useInput(isNotEmpty);

  const {
    value: hyperdriverRatingValue,
    isValid: hyperdriverRatingIsValid,
    hasError: hyperdriverRatingHasError,
    valueChangeHandler: hyperdriverRatingChangeHandler,
    inputBlurHandler: hyperdriverRatingBlurHandler,
    reset: resetHyperdriverRating,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (spaceshipNameIsValid && manufacturerIsValid && hyperdriverRatingIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    dispatch(addSpaceship({
        name: spaceshipNameValue,
        manufacturer: manufacturerValue,
        hyperdrive_rating: hyperdriverRatingValue,
      }));

    resetSpaceshipName();
    resetManufacturer();
    resetHyperdriverRating();

  
  };

  return (
    <div className="container">
  <div className="card mt-2">
      <div className="card-body">
        <form  onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="spaceshipname">Spaceship Name</label>
            <input
              type="text"
              id="spaceshipname"
              value={spaceshipNameValue}
              onChange={spaceshipNameChangeHandler}
              onBlur={spaceshipNameBlurHandler}
              className="form-control"
            />
            {spaceshipNameHasError && (
              <p className="error-text text-danger">Please enter a spaceship name.</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="manufacturer">Manufacturer</label>
            <input
              type="text"
              id="manufacturer"
              value={manufacturerValue}
              onChange={manufacturerChangeHandler}
              onBlur={manufacturerBlurHandler}
              className="form-control"
            />
            {manufacturerHasError && (
              <p className="error-text  text-danger">Please enter manufacturer.</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="hyperdriverRating">Hyperdrive Rating</label>
            <input
              type="number"
              id="hyperdriverRating"
              value={hyperdriverRatingValue}
              onChange={hyperdriverRatingChangeHandler}
              onBlur={hyperdriverRatingBlurHandler}
              className="form-control"
            />
            {hyperdriverRatingHasError && (
              <p className="error-text  text-danger">Please enter a hyperdrive rating.</p>
            )}
          </div>
          <button className="btn btn-success mt-1" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SpaceshipForm;
