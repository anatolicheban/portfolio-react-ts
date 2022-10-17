import { skillsItems } from "../assets/data/skillsItems";
import SkillsItem from "../components/SkillsItem";
const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills__title">Skills</h2>
      <ul className="skills__list">
        {skillsItems.map((item) => (
          <SkillsItem
            key={item.id}
            name={item.name}
            icon={item.icon}
            bgColor={item.bgColor}
            level={item.level}
          />
        ))}
      </ul>
      <p className="skills__info">
        Other technologies what I use or have experience in working with:{" "}
        <span>Gulp, Webpack, BEM, Tailwind, MaterialUI, Axios</span> and other
      </p>
    </div>
  );
};

export default Skills;
