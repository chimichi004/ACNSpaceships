import { useEffect, useState, useCallback } from "react";

import NavBar from "./components/NavBar/NavBar";
import SpaceshipForm from "./components/SpaceshipForm/SpaceshipForm";
import Spaceships from "./components/SpaceshipList/Spaceships";

import { useDispatch, useSelector } from "react-redux";
import { fetchSpaceships } from "./store/actions/spaceshipActions";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const { spaceships, hasNext, hasError } = useSelector(
    (state) => state.spaceship
  );

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchSpaceships(page)); //get the first list of spaceships
    setError(hasError);
    setIsLoading(false);
  }, [page]);

  let content = <p>Found no spaceships.</p>;

  if (spaceships.length > 0) {
    content = (
      <div className="container">
        <Spaceships spaceships={spaceships} />
        <Pagination onSetPage={setPage} page={page} hasNext={hasNext} />
      </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <main className="app">
        <NavBar />
        <SpaceshipForm />
        {content}
      </main>
    </>
  );
}

export default App;
