import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const SpaceshipForm = (props) => {
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

    resetSpaceshipName();
    resetManufacturer();
    resetHyperdriverRating();

    props.onSubmitHandler({
      id: props.numOfSpaceShips + 1,
      name: spaceshipNameValue,
      manufacturer: manufacturerValue,
      hyperdrive_rating: hyperdriverRatingValue,
    });
  };

  return (
    <div className="card mt-2">
      <div className="card-body">
        <form  onSubmit={submitHandler}>
          <div class="form-group">
            <label for="spaceshipname">Spaceship Name</label>
            <input
              type="text"
              id="spaceshipname"
              value={spaceshipNameValue}
              onChange={spaceshipNameChangeHandler}
              onBlur={spaceshipNameBlurHandler}
              c
              className="form-control"
            />
            {spaceshipNameHasError && (
              <p className="error-text text-danger">Please enter a spaceship name.</p>
            )}
          </div>
          <div class="form-group">
            <label for="manufacturer">Manufacturer</label>
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
          <div class="form-group">
            <label for="hyperdriverRating">Hyperdrive Rating</label>
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
  );
};

export default SpaceshipForm;
