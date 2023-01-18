import {hex2048} from '../assets/hex_2048.png'

interface contentObject {
    id: number;
    name: string;
    description: string;
    image: HTMLImageElement;
    link: string;
    date: string;
    skills: string[];
}
export const content: contentObject [] = [
    {
        id: 1,
        name: 'hexagon 2048',
        description: 'Game called 2048, but remake as 3 dimentional, built with typescript....',
        image: hex2048,
        link: 'https://ezdnaormous-kneelxd.surge.sh/',
        date: 'December 2022',
        skills: ['Typescript','React']
    }
]