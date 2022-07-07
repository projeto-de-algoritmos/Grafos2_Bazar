import { useState } from "react";
import "./Main.css";
import { Card, Button } from "../../Components";
import clothes from "../../Services/mock";

const Main = () => {
  const [clothesMap] = useState(clothes);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className="header" />
      <div className="titleMain">Bazar</div>
      <div className="textMain">
        Selecione 2 peças que você deseja verificar, para gerar o menor valor
        entre elas
      </div>
      <div className="buttonPosition">
        <Button text="Verificar" />
      </div>
      <div className="cardMain">
        {clothesMap.map((item, index) => {
          return (
            <Card
              imageClassName={isActive ? "imageCardActive" : "imageCard"}
              key={index}
              id={item.id}
              onClick={handleClick}
              imagem={item.imagem}
            />
          );
        })}
      </div>
    </>
  );
};

export default Main;
