import hex2048 from '../assets/hex2048.png'

interface contentObject {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    date: string;
    skills: string[];
}

export const content: contentObject [] = [
    {
        id: 1,
        name: 'Hexagon 2048',
        description: 'Game called 2048, but remake as 3 dimentional. It was quiet challenging, especially game logic, which was too hard to implement',
        image: hex2048,
        link: 'https://ezdnaormous-kneelxd.surge.sh/',
        date: 'December 2022',
        skills: ['Typescript','React','Material UI', 'React Router', 'axios','AJAX','Context API', 'Javascript', 'CSS']
    }
]