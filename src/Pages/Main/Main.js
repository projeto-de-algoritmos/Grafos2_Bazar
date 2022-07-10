import "./Main.css";
import { Button } from "../../Components";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import places from "../../Services/mock";
import { locaisBazar, capitais } from "../../Services/capitais"
import Solution from '../../Services/dijkstra'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  const options = [];
  const navigate = useNavigate();
  const [result, setResult] = useState(0);

  capitais.map((item) => {
    return options.push(item);
  });

  const handleBazarMaisProximo = (starting) => {
    const destiny = locaisBazar[1]
    const result = Solution.question(starting, destiny);
    setResult(result);
    navigate("/resultado", { state: { value: result } });

  }

  return (
    <>
      <div className="header" />
      <div className="title">Bazar</div>
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
        <Dropdown options={options} placeholder="Selecione de qual capitual deseja partir" />
      </div>
    </>
  );
};

export default Main;
