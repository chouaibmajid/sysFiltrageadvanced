import { useState } from "react";
import { data } from "./data";
function App() {
  const checkList = ["haut", "bas", "accesoire"];
  const [cat, setCat] = useState("ALL");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [filtre, setFiltre] = useState([]);
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    if (event.target.checked) {
      setFiltre([...filtre, event.target.value]);
    } else {
      setFiltre(filtre.filter((item) => item !== event.target.value));
    }
  };
  const dataFiltred = () => {
    var datafilredByCat = [];
    if (cat !== "ALL") {
      datafilredByCat = data.filter((item) => item.cat === cat);
    } else {
      datafilredByCat = data;
    }
    var datafiltredByFiltre = [];
    if (!filtre.length) {
      datafiltredByFiltre = datafilredByCat;
    } else {
      var newArr = [];
      filtre.forEach((filtre) => {
        newArr = [
          ...newArr,
          ...datafilredByCat.filter((item) => item.filtre === filtre),
        ];
      });
      datafiltredByFiltre = newArr;
    }
    var dataFiltredByPrice = [];

    switch (price) {
      case "inf20":
        dataFiltredByPrice = datafiltredByFiltre.filter(
          (item) => item.price <= 20
        );
        break;
      case "entre20et80":
        dataFiltredByPrice = datafiltredByFiltre.filter(
          (item) => item.price > 20 && item.price <= 80
        );
        break;
      case "sup80":
        dataFiltredByPrice = datafiltredByFiltre.filter(
          (item) => item.price > 80
        );
        break;
      default:
        dataFiltredByPrice = datafiltredByFiltre;
    }
    var dataFiltredByColor = [];

    switch (color) {
      case "black":
        dataFiltredByColor = dataFiltredByPrice.filter(
          (item) => item.color === "black"
        );
        break;
      case "green":
        dataFiltredByColor = dataFiltredByPrice.filter(
          (item) => item.color === "green"
        );
        break;
      case "blue":
        dataFiltredByColor = dataFiltredByPrice.filter(
          (item) => item.color === "blue"
        );
        break;
      case "white":
        dataFiltredByColor = dataFiltredByPrice.filter(
          (item) => item.color === "white"
        );
        break;
      default:
        dataFiltredByColor = dataFiltredByPrice;
    }
    return dataFiltredByColor;
  };
  console.log(price);
  return (
    <div>
      {checkList.map((item, index) => (
        <div key={index}>
          <input value={item} type="checkbox" onChange={handleCheck} />
          <span>{item}</span>
        </div>
      ))}
      <select onChange={(e) => setCat(e.target.value)} value={cat}>
        <option value="ALL">ALL</option>
        <option value="Homme">Homme</option>
        <option value="Femme">Femme</option>
      </select>
      <div>
        <input
          onChange={(e) => setPrice("")}
          type="radio"
          value="All"
          name="price"
        />{" "}
        {"All Prices"}
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="radio"
          value="inf20"
          name="price"
        />{" "}
        {"< 20DH"}
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="radio"
          value="entre20et80"
          name="price"
        />{" "}
        {" 20dh< Price< 80DH"}
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="radio"
          value="sup80"
          name="price"
        />{" "}
        {"> 80DH"}
      </div>
      <div>
        <input
          onChange={(e) => setColor("")}
          type="radio"
          value="All"
          name="color"
        />{" "}
        {"All Colors"}
        <input
          onChange={(e) => setColor(e.target.value)}
          type="radio"
          value="black"
          name="color"
        />{" "}
        {"black"}
        <input
          onChange={(e) => setColor(e.target.value)}
          type="radio"
          value="green"
          name="color"
        />{" "}
        {" green"}
        <input
          onChange={(e) => setColor(e.target.value)}
          type="radio"
          value="blue"
          name="color"
        />{" "}
        {"blue"}
        <input
          onChange={(e) => setColor(e.target.value)}
          type="radio"
          value="white"
          name="color"
        />{" "}
        {"white"}
      </div>
      {dataFiltred().map((item) => (
        <div key={item.id}>
          {item.name}
          {item.cat}
          {item.filtre}
          {item.price}
          {item.color}
        </div>
      ))}
    </div>
  );
}

export default App;
