import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const deleteFavorite = (type, id) => {
    switch (type) {
      case "people":
        actions.deleteFavoritePerson(id);
        break;
      case "vehicles":
        actions.deleteFavoriteVehicle(id);
        break;
      case "planets":
        actions.deleteFavoritePlanet(id);
        break;
      default:
        break;
    }
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3 mx-5">
      <Link to="/">
        <img
          src={logo}
          width="100"
          height="50"
          className="d-inline-block align-top logo"
          alt="Logo"
        />
      </Link>
      <div className="ml-auto">
        <Dropdown>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Favorites
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {store.favoritesPeople.map((favorite, index) => (
              <Dropdown.Item key={index} className="drop-menu">
                <Link to={`/single/${favorite.id}`}>{favorite.name}</Link>
                <i
                  className="fa fa-trash ml-2 position-absolute trash-icon"
                  onClick={() => deleteFavorite("people", favorite.id)}
                ></i>
              </Dropdown.Item>
            ))}
            {store.favoritesVehicles.map((favorite, index) => (
              <Dropdown.Item key={index} className="drop-menu">
                <Link to={`/vehicleSingle/${favorite.id}`}>
                  {favorite.name}
                </Link>
                <i
                  className="fa fa-trash ml-2 position-absolute trash-icon"
                  onClick={() => deleteFavorite("vehicles", favorite.id)}
                ></i>
              </Dropdown.Item>
            ))}
            {store.favoritesPlanets.map((favorite, index) => (
              <Dropdown.Item key={index} className="drop-menu">
                <Link to={`/planetSingle/${favorite.id}`}>{favorite.name}</Link>
                <i
                  className="fa fa-trash ml-2 position-absolute trash-icon"
                  onClick={() => deleteFavorite("planets", favorite.id)}
                ></i>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};
