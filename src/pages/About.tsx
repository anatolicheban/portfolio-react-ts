import { aboutInfos } from "../assets/data/aboutInfos";
import { coursesInfos } from "../assets/data/coursesInfos";

const About = () => {
  return (
    <>
      <div className="about">
        <h2 className="about__title">About</h2>
        <p className="about__info">
          A web developer with good knowledge of HTML & CSS, React, JS, etc., a high level of
          responsibility and a desire to progress and build a career as a good developer
        </p>
        <ul className="about__numbers">
          {aboutInfos.map(({ id, text, icon, value }) => (
            <li key={id} className="about__numbers-item">
              <img src={icon} alt=""></img>
              <span>{text}</span>
              <h4>{value}</h4>
            </li>
          ))}
        </ul>
        <div className="qualification">
          <h2 className="qualification__title">Qualification</h2>
          <div className="qualification__subtitle-box">
            <img src="./img/courses.svg" alt="courses" />
            <h4 className="qualification__subtitle">Courses</h4>
          </div>
          <ul className="qualification__courses">
            {coursesInfos.map(({ id, name, author, href, period }) => (
              <li className="qualification__courses-item" key={id}>
                <a className="qualification__courses-link" href={href}>
                  <p className="qualification__courses-name">{name}</p>
                  <p className="qualification__courses-author">{author}</p>
                  <p className="qualification__courses-period">{period}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
