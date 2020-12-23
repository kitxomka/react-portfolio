import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.png";
import L_MernTipCalc from "../../assets/img/projects/mern_tip_calc.png";

export const projects = [
    {
        id: '1',
        projectName: 'React ToDo App',
        date: "01/10/2020",
        imgSrc: L_ReactToDoList,
        imgAltText: "React ToDo App",
        description: "This is a Todo App created with React and Material UI that keeps a track of your Todos",
        link: "https://akjha96.github.io/Todo-List-React/",
        code: "https://github.com/akjha96/Todo-List-React",
        features: ['Keeps track of your Todos', 'Powered by React and Material UI', 'Respoisive Design'],
        techUsed: ['Html 5', 'Css 3', 'React', 'Material UI'],

    },
    {
        id: '2',
        projectName: 'MERN Tip Calculator',
        date: "16/09/2020",
        imgSrc: L_MernTipCalc,
        imgAltText: "MERN Tip Calculator",
        description: "This app calculates Tip for the amount entered and percentage of tip to be given. It uses MERN stack build to acomplish the same.",
        link : 'https://github.com/akjha96/MernTipCaculator-FrontEnd',
        code: "https://github.com/akjha96/MernTipCaculator-FrontEnd",
        features: ['Enter amount upto your desire', 'Real-time API calls with Backend features', 'Styled with  Material-UI'],
        techUsed: ['Node.js', 'Express', 'React', 'Material UI', 'MongoDB'],

    },
]
