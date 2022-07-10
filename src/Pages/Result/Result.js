import "./Result.css";
import { Button } from "../../Components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="header" />
      <div className="title">Bazar</div>
      <div className="textResult">
        {location.state
          ? `O Bazar mais próximo de voce é o ${location.state.nome} que está a uma distância de ${location.state.distancia} km, localizado em ${location.state.capital}.`
          : "Erro, aperte o botão de pesquisar novamente"}
      </div>
      <div className="buttonPosition">
        <Button
          text="Pesquisar novamente"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </>
  );
};

export default Result;
