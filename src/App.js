import { useEffect, useState, useCallback } from "react";

import NavBar from "./components/NavBar/NavBar";
import SpaceshipForm from "./components/SpaceshipForm/SpaceshipForm";
import Spaceships from "./components/SpaceshipList/Spaceships";


function App() {
  const [spaceships, setSpaceships] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/starships/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const newShips = data.results.map((ship) => {
        return {
          id: ship.model,
          name: ship.name,
          manufacturer: ship.manufacturer,
          hyperdrive_rating: ship.hyperdrive_rating,
        };
      });

      setPrevUrl(data.previous);
      setNextUrl(data.next);
      setSpaceships(newShips);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no spaceships.</p>;

  const prevSpaceshipList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(prevUrl);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const newShips = data.results.map((ship, key) => {
        return {
          id: key,
          name: ship.name,
          manufacturer: ship.manufacturer,
          hyperdrive_rating: ship.hyperdrive_rating,
        };
      });

      setPrevUrl(data.previous);
      setNextUrl(data.next);
      setSpaceships(newShips);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const nextSpaceshipList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(nextUrl);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const newShips = data.results.map((ship, key) => {
        return {
          id: key,
          name: ship.name,
          manufacturer: ship.manufacturer,
          hyperdrive_rating: ship.hyperdrive_rating,
        };
      });

      setPrevUrl(data.previous);
      setNextUrl(data.next);
      setSpaceships(newShips);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  if (spaceships.length > 0) {
    content = (
      <>
        <Spaceships spaceships={spaceships} />
        <div className="d-flex mb-2">
          {prevUrl !== null && (
            <button className="btn btn-outline-secondary" onClick={prevSpaceshipList}>Prev</button>
          )}
          {nextUrl !== null && (
            <button className="btn btn-outline-secondary ml-auto" onClick={nextSpaceshipList}>Next</button>
          )}
        </div>
      </>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  const submitHandler = (newship) => {

      setSpaceships([newship, ...spaceships]);
     // fetchMoviesHandler();
  }

  return (
    <>
      <main className="app">
        <NavBar />
        <div className="container">
          <SpaceshipForm onSubmitHandler={submitHandler}/>
        </div>
        <div className="container">{content}</div>
      </main>
    </>
  );
}

export default App;
