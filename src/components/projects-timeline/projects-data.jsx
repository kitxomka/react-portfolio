import L_ReactToDoList from "../../assets/img/projects/react_todo.png";
import L_ReactKetoRecipes from "../../assets/img/projects/react_keto_recipes.png";
import L_ReactPortfolio from "../../assets/img/projects/react_portfolio.png";
import L_TypeScriptCalculator from "../../assets/img/projects/typescript-calculator.png";
import L_FilmApp from "../../assets/img/projects/film_app.png";
import L_PplFinder from "../../assets/img/projects/ppl-finder.png";
import L_DressMe from "../../assets/img/projects/dress-me.png";
import L_3Questions from "../../assets/img/projects/3-questions.png";

import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    projectName: "React Keto Recipes Site",
    // date: "28/04/2021",
    imgSrc: L_ReactKetoRecipes,
    imgAltText: "React Keto Recipes Site",
    description:
      "This site is about ketogenic (keto) recipes and offers a variety of delicious recipes (In dev state).",
    link: "http://188.166.71.102/keto-recipes/",
    code: "https://github.com/kitxomka/react_keto_recipes",
    features: [
      "Make and enjoy delicious food",
      "Styled with  Material-UI",
      "Respoisive Design",
    ],
    techUsed: ["React", "Redux", "Redux-Toolkit", "Material UI"],
  },

  {
    id: uuidv4(),
    projectName: "L_3Questions",
    // date: "02/01/2022",
    imgSrc: L_3Questions,
    imgAltText: "3 Questions",
    description:
      "The app asks 3 questions of a different type in random order, and at the end you find out how many answers you got right.",
      link: "http://codesandbox.io/s/github/kitxomka/3questions-test",
    // link: "http://188.166.71.102/3questions/",
    code: "https://codesandbox.io/s/github/kitxomka/3questions-test",
    features: ["Styled with  Material-UI", "Respoisive Design"],
    techUsed: ["React", "Redux", "Material UI"],
  },

  {
    id: uuidv4(),
    projectName: "L_DressMe",
    // date: "27/12/2021",
    imgSrc: L_DressMe,
    imgAltText: "Dress me",
    description: "React Native dress me game. Choose a category and play...",
    link: "https://codesandbox.io/s/github/kitxomka/dress-me-react-native",
    code: "https://github.com/kitxomka/dress-me-react-native",
    features: [
      "Search item",
      "Count by items in set and sets",
      "Measures time for completing the set",
    ],
    techUsed: ["React Native", "Redux"],
  },
  {
    id: uuidv4(),
    projectName: "L_PplFinder",
    // date: "20/08/2021",
    imgSrc: L_PplFinder,
    imgAltText: "People List",
    description:
      "The app loads and displays random list of people with details, can mark as favorite.",
    link: "http://188.166.71.102/PplFinder/",
    code: "https://github.com/kitxomka/PplFinder",
    features: ["Filter by country", "Like and unlike", "Favorites page"],
    techUsed: [
      "React",
      "React-router",
      "axios",
      "Material UI",
      "Local Storage",
      "styled-components",
    ],
  },
  {
    id: uuidv4(),
    projectName: "L_FilmApp",
    // date: "18/08/2021",
    imgSrc: L_FilmApp,
    imgAltText: "Film app",
    description:
      "Small star wars films list, you can see some details of the chosen film and like it.",
    link: "http://188.166.71.102/film-app/",
    code: "https://github.com/kitxomka/star-wars-film-app",
    features: ["Film details", "Like and unlike", "Respoisive Design"],
    techUsed: ["React", "axios", "Bootstrap", "Local Storage"],
  },
  {
    id: uuidv4(),
    projectName: "React TypeScript Calculator App",
    // date: "10/06/2021",
    imgSrc: L_TypeScriptCalculator,
    imgAltText: "React TypeScript Calculator App",
    description: "This is a calculator.",
    code: "https://github.com/kitxomka/react-typescript-calculator",
    features: ["Make a simple calculations"],
    techUsed: ["React", "TypeScript"],
  },

  {
    id: uuidv4(),
    projectName: "React ToDo App",
    // date: "12/03/2021",
    imgSrc: L_ReactToDoList,
    imgAltText: "React ToDo App",
    description: "This is a Todo App keeps a track of your Todos.",
    link: "http://188.166.71.102/todo/",
    code: "https://github.com/kitxomka/react-todo",
    features: [
      "Keeps track of your Todos",
      "Powered by React and Material UI",
      "Respoisive Design",
      "Saving the tasks to local storage",
    ],
    techUsed: ["React", "Material UI"],
  },
  {
    id: uuidv4(),
    projectName: "The Portfolio",
    // date: "20/02/2021",
    imgSrc: L_ReactPortfolio,
    imgAltText: "React ToDo App",
    description:
      "This Portfolio App is your way to know about me and my skills a little bit better before meeting.",
    link: "http://188.166.71.102/",
    code: "https://github.com/kitxomka/react-portfolio",
    features: [
      "Telling a little bit about myself",
      "My Tech Skills",
      "My Projects (not all of them)",
      "My contacts",
    ],
    techUsed: ["React", "React Bootstrap"],
  },
];
