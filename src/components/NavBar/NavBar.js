import logo from "../../assets/accenture.png";

const NavBar = () => {
  return (
    <nav class=" navbar-dark bg-dark sticky-top py-1">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
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
