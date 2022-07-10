import "./Main.css";
import { Button } from "../../Components";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import places from "../../Services/mock";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const options = [];
  const navigate = useNavigate();

  places.map((item) => {
    return options.push(item.id);
  });

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
          onClick={() => {
            navigate("/resultado", { state: { value: 20 } });
          }}
        />
      </div>
      <div className="placesMain">
        <Dropdown options={options} placeholder="Selecione uma cidade" />
      </div>
    </>
  );
};

export default Main;
