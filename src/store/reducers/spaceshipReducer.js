import { FETCH_SPACESHIPS, ADD_SPACESHIP} from "../actions/types";

const initialState = {
    spaceships: [],
    hasNext: false,
    hasError: ''
  }
  
  const spaceshipReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case FETCH_SPACESHIPS:
        return { ...state, spaceships: payload.spaceships, hasNext: payload.hasNext, hasError: payload.hasError };
     case ADD_SPACESHIP:
        return { ...state, spaceships: [payload, ...state.spaceships], hasNext: true, hasError: '' };
      default:
        return state;
    }
  }

  
export default spaceshipReducer;
