import "./Main.css";
import { Button } from "../../Components";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { capitais, bazares } from "../../Services/capitais";
import Solution from "../../Services/dijkstra";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  const options = [];
  const navigate = useNavigate();
  const [inicio, setInicio] = useState("");

  capitais.map((item) => {
    return options.push(item);
  });

  const inforBazars = bazares.map((item) => {
    return (
      <div className="itensMain">
        <b>Bazar:</b> {item.nome}
        <br />
        <b>Local:</b> {item.capital}
      </div>
    );
  });

  const handleBazarMaisProximo = () => {
    const result = Solution.menorDistancia(inicio);
    navigate("/resultado", {
      state: {
        nome: result.nome,
        capital: result.capital,
        distancia: result.distancia,
      },
    });
  };

  return (
    <>
      <div className="header" />
      <div className="title">Bazar</div>
      <div className="textMain">
        Essas são as listas dos Bazares em todo o Brasil
      </div>
      <div className="listMain">{inforBazars}</div>
      <div className="textMain">
        Selecione a capital da qual você deseja partir, e assim, encontrar o
        Bazar mais próximo de onde você mora.
      </div>
      <div className="buttonPosition">
        <Button
          text="Pesquisar"
          onClick={() => handleBazarMaisProximo(options)}
        />
      </div>
      <div className="placesMain">
        <Dropdown
          options={options}
          onChange={(opion) => setInicio(opion.value)}
          placeholder="Selecione a capital"
        />
      </div>
    </>
  );
};

export default Main;
