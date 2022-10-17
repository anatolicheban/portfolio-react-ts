import ReactDOM from "react-dom";

type Props = {
  info: string;
  onClick: () => void;
};

const Modal = ({ info, onClick }: Props) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <button className="close-modal" onClick={onClick}>
          <img src="./img/close.svg" alt="close" />
        </button>
        <p>{info}</p>
      </div>
    </div>
  );
};

const ModalWindow = ({ info, onClick }: Props) => {
  const root = document.getElementById("root");

  if (root) {
    return ReactDOM.createPortal(<Modal onClick={onClick} info={info} />, root);
  }
  return null;
};

export default ModalWindow;
