import { useNavigate } from "react-router-dom";
import {SIZE_PRICE, SHOT_PRICE, SYRUP_PRICE} from "../data/prices"; 
import { useState } from "react";


function DrinkDetail () {
  const navigate = useNavigate();
  const [temperature, setTemperature ] = useState("ICE");
  const [shot, setShot ] = useState("기본");
  const [size, setSize ] = useState("Tall");
  const [syrup, setSyrup ] = useState("기본");

  return (
    <div>
      <h3>옵션 선택</h3>
      <button onClick={() => setTemperature("ICE")}>ICE</button>
      <button onClick={() => setTemperature("HOT")}>HOT</button>
    </div>
  );
}

export default DrinkDetail;