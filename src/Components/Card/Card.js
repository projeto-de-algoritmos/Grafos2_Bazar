import "./Card.css";

const Card = ({ imagem, imageClassName, onClick, id }) => {
  return (
    <div id={id} className="containerCard" onClick={onClick}>
      <img src={imagem} className={imageClassName} alt={id}/>
    </div>
  );
};

export default Card;
