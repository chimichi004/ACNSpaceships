import logo from "../../assets/accenture.png";

const NavBar = () => {
  return (
    <nav className=" navbar-light bg-light sticky-top py-1 shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            width="40"
            height="40"
            className={`d-inline-block align-top circ`}
            alt="Accenture logo"
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
