type ProjectsItem = {
  id: number;
  icon: string;
  name: string;
  codeLink: string;
  appLink: string;
  info: string;
};

export const mainProjectsItems: ProjectsItem[] = [
  {
    id: 1,
    icon: "./img/react.svg",
    name: "Shopping Cart",
    codeLink: "https://github.com/anatolicheban/advanced-shopping-cart",
    appLink: "./shopping-cart",
    info: `Here is advanced shopping cart, where I used React Context API, Typescript etc. 
    You can add items to cart, remove them, change item quantity or view total cost of all products`,
  },
  {
    id: 2,
    icon: "./img/javascript.svg",
    name: "Money Exchanger",
    codeLink: "https://github.com/anatolicheban/exchange-rates-upd",
    appLink: "./exchanger",
    info: `This app is developed on pure JS using Fetch API. 
    I implemented using Session Storage to optimize fetched data usage. 
    Also it is so easy to add new currency - just add option tag in HTML and few lines of code in JS.`,
  },
];

export const otherProjectsItems: ProjectsItem[] = [
  {
    id: 1,
    icon: "./img/react.svg",
    name: "Ordinary and multiple select",
    codeLink: "https://github.com/anatolicheban/first-react-typescript",
    appLink: "./select-components",
    info: `This little app is built on React & Typescript. 
    Here is two types of select components - you can define component type 
    by just adding 'multiple'(boolean) prop to component. 
    Adding or removing this prop will be a signal to Typescript that he must work 
    with another data type - it can be primitive type or array`,
  },
  {
    id: 2,
    icon: "./img/javascript.svg",
    name: "Weather Widget",
    codeLink: "https://github.com/anatolicheban/weather-widget",
    appLink: "./weather-widget",
    info: `This app is developed on pure JS using Fetch API. 
    Here you can get info about weather by clicking on button with location you need. 
    Adding new locations also is very simple - just add new button in HTML with data attribute you need!`,
  },
];
