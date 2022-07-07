import "./Main.css";
import { Card } from "../../Components";

const Main = () => {
  return (
    <>
      <div className="header" />
      <div className="title">Bazar</div>
      <div className="text">
        Selecione 2 peças que você deseja verificar, para gerar o menor valor
        entre elas
      </div>
      <Card />
    </>
  );
};

export default Main;
