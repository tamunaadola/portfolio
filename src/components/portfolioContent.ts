import auth from '../assets/auth.jpg';
import hex2048 from '../assets/hex_2048.png';
import spaceTourism from '../assets/Space_Tourism.png';
import weatherApp from '../assets/Weather_App.png';
import userForm from '../assets/User_Form.png';
import restaurantMenu from '../assets/Restaurant_Menu.png';
import jsJqueryComponents from '../assets/Javascript_jQuery_Components.png';

interface contentObject {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  githubLink?: string;
  date: string;
  skills: string[];
}

export const content: contentObject[] = [
  {
    id: 0,
    name: 'User Authorization Page',
    description:
      'This project is connected to a database. You can test functionality: can register and log in. Routes are protected, and the Token is saved in local storage. REST API is used for requests with the tool Axios, For designing Material UI, for routing React Router DOM, and the validation with the npm package Validator. Also, unnecessary renderings are protected with React lazy function.',
    image: auth,
    link: 'https://auth-nest.surge.sh/',
    githubLink: 'https://github.com/nikakarumidze/Auth',
    date: 'February 2023',
    skills: [
      'React',
      'React Router',
      'axios',
      'Rest API',
      'Redux',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 1,
    name: 'Hexagon 2048',
    description:
      'A game called 2048, but remade as three-dimensional. It was pretty challenging, especially game logic; it involved lots of math and geometry skills. There are six types of movement in this game. I have used Context API for state management and have developed several game levels and animations. For tests, I have used Jest & RTL.',
    image: hex2048,
    link: 'https://ezdnaormous-kneelxd.surge.sh/',
    date: 'December 2022',
    skills: [
      'Typescript',
      'React',
      'Material UI',
      'React Router',
      'axios',
      'Rest API',
      'Context API',
      'RTL & Jest',
      'Javascript',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 2,
    name: 'Space Tourism page',
    description:
      'Mobile-first responsive website on all devices. With four different types of pages. Routing is simple & easy. The most tricky while building this application was design features. I have created a custom  theme for Material UI and made some changes to existing components.',
    image: spaceTourism,
    link: 'https://nikakarumidze.github.io/Space_Tourism/',
    githubLink: 'https://github.com/nikakarumidze/Space_Tourism',
    date: 'December 2022',
    skills: [
      'React',
      'Material UI',
      'React Router',
      'Context API',
      'Javascript',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 3,
    name: 'User Form Project',
    description:
      'My one of the first project built with react. Basic user form project, with modals.',
    image: userForm,
    link: 'https://nikakarumidze.github.io/User-form-project-React/',
    githubLink: 'https://github.com/nikakarumidze/User-form-project-React',
    date: 'May 2022',
    skills: ['React', 'Javascript', 'HTML', 'CSS Modules'],
  },
  {
    id: 4,
    name: 'Weather App',
    description:
      "Features of this app: light/dark modes, celsius/fahrenheit features, saved in local storage. The application gets your location and returns the weather of it in the first place. There are two approaches to get your location: via permission or using another API, which gives the visitor's IP address. Also, you can add or delete the sites, which are also saved in local storage. It demanded to use of various techniques to solve the problem. I have used Cities JSON as API and two types of AccuWeather API for gathering information.",
    image: weatherApp,
    link: 'https://darling-melba-a7021c.netlify.app/',
    githubLink: 'https://github.com/nikakarumidze/Weather_App',
    date: 'March 2022',
    skills: [
      'Javascript',
      'Bootstrap',
      'HTML',
      'SCSS',
      'Rest API',
      'fetch',
      'JSON',
    ],
  },
  {
    id: 5,
    name: 'Javascript & jQuery components',
    description:
      'Some essential components to create when you are Front-end Developer.',
    image: jsJqueryComponents,
    link: 'https://nikakarumidze.github.io/Javascript-jQuery/',
    githubLink: 'https://github.com/nikakarumidze/Javascript-jQuery',
    date: 'December 2021',
    skills: ['Javascript', 'jQuery', 'HTML', 'CSS', 'JSON'],
  },
  {
    id: 6,
    name: 'Restaurant Website',
    description:
      'Simple responsive restaurant menu website, with several pages. FlexBox and Grid Technologies have been used.',
    image: restaurantMenu,
    link: 'https://nikakarumidze.github.io/Site-Menu/',
    githubLink: 'https://github.com/nikakarumidze/Site-Menu',
    date: 'November 2021',
    skills: ['HTML', 'Bootstrap', 'SCSS', 'CSS'],
  },
];
