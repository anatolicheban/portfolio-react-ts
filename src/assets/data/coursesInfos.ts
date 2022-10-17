type CourseInfo = {
  id: number;
  name: string;
  author: string;
  href: string;
  period: string;
};

export const coursesInfos: CourseInfo[] = [
  {
    id: 1,
    name: "Website development course",
    author: "Freelancer for Life",
    href: "https://www.youtube.com/playlist?list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr",
    period: "April - May 2022",
  },
  {
    id: 2,
    name: "Modern React from Scratch (2022)",
    author: "Youra Allakhverdov",
    href: "https://www.udemy.com/course/react-np/",
    period: "June – July 2022",
  },
  {
    id: 3,
    name: "Redux for Managing the State of React Apps",
    author: "Mikhail Nepomnyashchij",
    href: "https://www.udemy.com/course/redux-react/",
    period: "July 2022",
  },
];
