import "./Main.css";
import { Button } from "../../Components";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import places from "../../Services/mock";
import { capitais, bazares } from "../../Services/capitais"
import Solution from '../../Services/dijkstra'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  const options = [];
  //const nomesBazars = [];
  const navigate = useNavigate();
  //const [result, setResult] = useState(0);
  const [inicio, setInicio] = useState('');

  capitais.map((item) => {
    return options.push(item);
  });

  const inforBazars = bazares.map((item) => {
    return (<>
      <li>Bazar: {item.nome}</li>
      <li>Local: {item.capital}</li>
      <br />
    </>)
  });


  const handleBazarMaisProximo = () => {
    const result = Solution.menorDistancia(inicio);
    navigate("/resultado", { state: { nome: result.nome, capital: result.capital, distancia: result.distancia } });

  }

  return (
    <>
      <div className="header" />
      <div className="title">Bazar</div>
      <div className="textMain">
        Essas são as listas dos Bazares em todo o Brasil
        <ul>{inforBazars}</ul>
      </div>
      <div className="textMain">
        Selecione a cidade do DF que você deseja encontrar o bazar mais próximo.
      </div>
      <div className="buttonPosition">
        <Button
          text="Pesquisar"
          onClick={() => handleBazarMaisProximo(options)}
        />
      </div>
      <div className="placesMain">
        <Dropdown options={options} onChange={(opion) => setInicio(opion.value)} placeholder="Selecione de qual capitual deseja partir" />
      </div>
    </>
  );
};

export default Main;
