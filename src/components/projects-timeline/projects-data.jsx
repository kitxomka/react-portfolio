import L_ReactToDoList from "../../assets/img/projects/react_todo.png";
import L_ReactKetoRecipes from "../../assets/img/projects/react_keto_recipes.png";
import L_ReactPortfolio from "../../assets/img/projects/react_portfolio.png";
import L_TypeScriptCalculator from "../../assets/img/projects/typescript-calculator.png";

export const projects = [
    {
        id: '1',
        projectName: 'React TypeScript Calculator App',
        date: "10/06/2021",
        imgSrc: L_TypeScriptCalculator,
        imgAltText: "React TypeScript Calculator App",
        description: "This is a calculator",
        code: "https://github.com/kitxomka/react-typescript-calculator",
        features: ['Make a simple calculations'],
        techUsed: ['React', 'TypeScript'],

    },
    {
        id: '2',
        projectName: 'React Keto Recipes Site',
        date: "28/04/2021",
        imgSrc: L_ReactKetoRecipes,
        imgAltText: "React Keto Recipes Site",
        description: "This site is about ketogenic (keto) recipes and offers a variety of delicious recipes (In dev state)",
        link : "http://alonashot.top/react_keto_recipes/build/#/",
        code: "https://github.com/kitxomka/react_keto_recipes",
        features: ['Make and enjoy delicious food', 'Styled with  Material-UI', 'Respoisive Design'],
        techUsed: ['React', 'Redux', 'Redux-Toolkit' , 'Material UI'],

    },
    {
        id: '1',
        projectName: 'React ToDo App',
        date: "12/03/2021",
        imgSrc: L_ReactToDoList,
        imgAltText: "React ToDo App",
        description: "This is a Todo App keeps a track of your Todos",
        link: "http://alonashot.top/react-todo/build/",
        code: "https://github.com/kitxomka/react-todo",
        features: ['Keeps track of your Todos', 'Powered by React and Material UI', 'Respoisive Design', 'Saving the tasks to local storage'],
        techUsed: ['React', 'Material UI'],
    },
    {
        id: '4',
        projectName: 'The Portfolio',
        date: "20/02/2021",
        imgSrc: L_ReactPortfolio,
        imgAltText: "React ToDo App",
        description: "This Portfolio App is your way to know about me and my skills a little bit better before meeting.",
        link: "http://alonashot.top/react-portfolio/build/",
        code: "https://github.com/kitxomka/react-portfolio",
        features: ['Telling a little bit about myself', 'My Tech Skills', 'My Projects (not all of them)', 'My contacts'],
        techUsed: ['React', 'React Bootstrap'],
    }
    
]
