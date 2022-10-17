import { useState } from "react";
import ModalWindow from "./ModalWindow";
type ProjectItemProps = {
  icon: string;
  name: string;
  codeLink: string;
  appLink: string;
  info: string;
};

const ProjectsItem = ({ icon, name, codeLink, appLink, info }: ProjectItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <li className="projects__item">
        <a href={appLink} className="projects__item-box">
          <img className="projects__item-icon" alt="icon" src={icon} />
          <p className="projects__item-name">{name}</p>
        </a>
        <a href={codeLink} className="projects__item-btn code">
          GitHub Repository
        </a>
        <button
          className="projects__item-btn info"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Info
        </button>
      </li>
      {isModalOpen && <ModalWindow onClick={() => setIsModalOpen(false)} info={info} />}
    </>
  );
};

export default ProjectsItem;
