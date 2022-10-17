import { mainProjectsItems, otherProjectsItems } from "../assets/data/projectsItems";
import ProjectsItem from "../components/ProjectsItem";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects__title">Projects</h2>
      <h4 className="projects__subtitle">Click oh project's name to see how it works</h4>
      <div className="projects__box">
        <div className="projects__list main">
          <h3 className="projects__main-title">Main Projects</h3>
          <ul className="projects__items main">
            {mainProjectsItems.map(({ icon, name, codeLink, appLink, id, info }) => (
              <ProjectsItem
                key={id}
                icon={icon}
                name={name}
                codeLink={codeLink}
                appLink={appLink}
                info={info}
              />
            ))}
          </ul>
        </div>
        <div className="projects__list other">
          <h3 className="projects__other-title">Other Projects</h3>
          <ul className="projects__items other">
            {otherProjectsItems.map(({ icon, name, codeLink, appLink, id, info }) => (
              <ProjectsItem
                key={id}
                icon={icon}
                name={name}
                codeLink={codeLink}
                appLink={appLink}
                info={info}
              />
            ))}
          </ul>
        </div>
      </div>
      <h4 className="projects__text">
        This portfolio is also my project! Click{" "}
        <a href="https://github.com/anatolicheban/portfolio-react-ts">here</a> to go to project
        repository.
      </h4>
    </div>
  );
};

export default Projects;
