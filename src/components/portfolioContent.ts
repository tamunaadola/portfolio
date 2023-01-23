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
    id: 1,
    name: 'Hexagon 2048',
    description:
      'Game called 2048, but remake as 3 dimentional. It was quiet challenging, especially game logic. It involved lots of math and geometry skills. There are 6 types of movement in this game. For state managment I have used Context API, have developed several game levels and animations. For tests I have used Jest & RTL.',
    image: hex2048,
    link: 'https://ezdnaormous-kneelxd.surge.sh/',
    date: 'December 2022',
    skills: [
      'Typescript',
      'React',
      'Material UI',
      'React Router',
      'axios',
      'AJAX',
      'Context API',
      'Javascript',
      'CSS',
    ],
  },
  {
    id: 2,
    name: 'Space Tourism page',
    description:
      'Mobile first responsive website on all devices. With 4 different type pages, which are connected to each other. Routing is simple & easy. The most tricky while building this application was design features. I have created custom theme for Material UI and made some changes to existing components.',
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
      'CSS',
    ],
  },
  {
    id: 3,
    name: 'User Form Project',
    description:
      'My one of the first project built with react. Basic user form project, with modal warnings.',
    image: userForm,
    link: 'https://nikakarumidze.github.io/User-form-project-React/',
    githubLink: 'https://github.com/nikakarumidze/User-form-project-React',
    date: 'May 2022',
    skills: ['React', 'Javascript', 'CSS Modules'],
  },
  {
    id: 4,
    name: 'Weather App',
    description:
      'Features of this app: light/dark modes, celsius/farenheit features, saved in local storage. Application gets your location and returns weather of it at first place. There are 2 approaches to get your location: via permision, or using another API, that gives IP address of visitor. Also you can add or delete the locations, which are also saved in local storage. It demanded to use various techniques to solve the problem. I have used Cities JSON as API and also 2 types of AccuWeather API for gathering information.',
    image: weatherApp,
    link: 'https://darling-melba-a7021c.netlify.app/',
    githubLink: 'https://github.com/nikakarumidze/Weather_App',
    date: 'March 2022',
    skills: [
      'Javascript',
      'Bootstrap',
      'HTML',
      'SCSS',
      'AJAX',
      'fetch',
      'JSON',
    ],
  },
  {
    id: 5,
    name: 'Javascript & jQuery components',
    description:
      'Simple responsive restaurant menu website, with several pages. FlexBox and Grid Technologies have been used.',
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
