import "./Result.css";
import { Button } from "../../Components";

const Result = ({ value }) => {
  return (
    <>
      <div className="header" />
      <div className="title">Bazar</div>
      <div className="textResult">
        Menor preço entre as peças selecionadas é de{" "}
        {value
          ? value === 1
            ? value + " real"
            : value + " reais"
          : 0 + " reais"}
      </div>
      <div className="buttonPosition">
        <Button text="Ver novas roupas" />
      </div>
    </>
  );
};

export default Result;
