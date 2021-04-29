import L_ReactToDoList from "../../assets/img/projects/react_todo.png";
import L_ReactKetoRecipes from "../../assets/img/projects/react_keto_recipes.png";
import L_ReactPortfolio from "../../assets/img/projects/react_portfolio.png";

export const projects = [
    {
        id: '1',
        projectName: 'React Keto Recipes Site',
        date: "28/04/2021",
        imgSrc: L_ReactKetoRecipes,
        imgAltText: "React Keto Recipes Site",
        description: "This site is about ketogenic (keto) recipes and offers a variety of delicious recipes (In dev state)",
        link : "http://157.245.71.103/react_keto_recipes/build/#/",
        code: "https://github.com/kitxomka/react_keto_recipes",
        features: ['Make and enjoy delicious food', 'Styled with  Material-UI', 'Respoisive Design'],
        techUsed: ['React', 'Material UI'],

    },
    {
        id: '2',
        projectName: 'React ToDo App',
        date: "12/03/2021",
        imgSrc: L_ReactToDoList,
        imgAltText: "React ToDo App",
        description: "This is a Todo App keeps a track of your Todos",
        link: "http://157.245.71.103/react-todo/build/",
        code: "https://github.com/kitxomka/react-todo",
        features: ['Keeps track of your Todos', 'Powered by React and Material UI', 'Respoisive Design', 'Saving the tasks'],
        techUsed: ['React', 'Material UI'],
    },
    {
        id: '3',
        projectName: 'The Portfolio',
        date: "20/02/2021",
        imgSrc: L_ReactPortfolio,
        imgAltText: "React ToDo App",
        description: "This Portfolio App is your way to know me a litter better before meeting.",
        link: "http://157.245.71.103/react-portfolio/build/",
        code: "https://github.com/kitxomka/react-portfolio",
        features: ['Telling a little bit about myself', 'My Tech Skills', 'My Projects (not all of them)', 'My contacts'],
        techUsed: ['React', 'React Bootstrap'],
    }
    
]
