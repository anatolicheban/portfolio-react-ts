type SkillsItemProps = {
  name: string;
  icon: string;
  bgColor: string;
  level: "Basic" | "Junior" | "Junior+" | "Middle";
};

const SkillsItem = ({ name, icon, bgColor, level }: SkillsItemProps) => {
  const setHeight = () => {
    if (level === "Basic") {
      return 2;
    } else if (level === "Junior") {
      return 4;
    } else if (level === "Junior+") {
      return 6;
    } else if (level === "Middle") {
      return 8;
    }
    return 0;
  };
  return (
    <li className="skills__item">
      <div className="skills__item-box">
        <img className="skills__item-icon" alt="react" src={icon} />
        <p className="skills__item-title">{name}</p>
      </div>
      <div className="skills__item-column">
        <p className="skills__item-value">{level}</p>
        <div
          className="skills__item-rect"
          style={{
            height: `${setHeight()}rem`,
            backgroundColor: bgColor,
          }}
        ></div>
      </div>
    </li>
  );
};

export default SkillsItem;
