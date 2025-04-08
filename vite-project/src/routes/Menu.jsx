import {drinks} from "../data/drinks";
import {desserts} from "../data/desserts"
import { useNavigate } from "react-router-dom";

function Menu () {
  const navigate = useNavigate();
  return (
    <div>
      <h3>coffee</h3>
      <li>
        {drinks.map((drink) => (
          <button key={drink.name} onClick={() => navigate(`/menu/${drink.name}`)}>
            {drink.name}
            <br />
            {drink.basePrice.toLocaleString()} 원
          </button>
        ))}
      </li>
      <h3>dessert</h3>
      <li>
      {desserts.map((dessert) => (
          <button key={dessert.name} onClick={() => navigate(`/menu/${dessert.name}`)}>
            {dessert.name}
            <br />
            {dessert.basePrice.toLocaleString()} 원
          </button>
        ))}
      </li>
    </div>
  );
}

export default Menu;