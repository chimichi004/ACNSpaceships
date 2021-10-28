import { FETCH_SPACESHIPS, ADD_SPACESHIP } from "./types";
import { v4 as uuidV4 } from "uuid";
import client from '../../config/client';

export const fetchSpaceships = (page) => (dispatch) => {
  client.get(`/starships/?page=${page}`)
  .then(({ data }) => {
    dispatch({
      type: FETCH_SPACESHIPS,
      payload: {
        spaceships: data.results,
        hasNext: data.next != null,
        hasError: '',
      }
    })
  })
  .catch(() => {
    dispatch({
      type: FETCH_SPACESHIPS,
      payload: {
        spaceships: {},
        hasError: 'Something wen wrong.',
      }
    })
  })


};

export const addSpaceship = (spaceship) => (dispatch) => {
  const payload = { ...spaceship, id: uuidV4() };

  dispatch({
    type: ADD_SPACESHIP,
    payload,
  });
};
