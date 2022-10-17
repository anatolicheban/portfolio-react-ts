type SkillsItem = {
  id: number;
  name: string;
  icon: string;
  bgColor: string;
  level: "Basic" | "Junior" | "Junior+" | "Middle";
};

export const skillsItems: SkillsItem[] = [
  {
    id: 1,
    name: "HTML",
    icon: "./img/html.svg",
    bgColor: "#CC985B",
    level: "Middle",
  },
  {
    id: 2,
    name: "CSS",
    icon: "./img/css.svg",
    bgColor: "#84B1DB",
    level: "Junior+",
  },
  {
    id: 3,
    name: "Javascript",
    icon: "./img/javascript.svg",
    bgColor: "#EDE98B",
    level: "Junior",
  },
  {
    id: 4,
    name: "Typescript",
    icon: "./img/typescript.svg",
    bgColor: "#004E96",
    level: "Junior",
  },
  {
    id: 5,
    name: "ReactJS",
    icon: "./img/react.svg",
    bgColor: "#87D9D4",
    level: "Junior",
  },
  {
    id: 6,
    name: "Redux",
    icon: "./img/redux.svg",
    bgColor: "#764ABC",
    level: "Junior+",
  },
  {
    id: 7,
    name: "SASS",
    icon: "./img/sass.svg",
    bgColor: "#CF649A",
    level: "Junior+",
  },
];
