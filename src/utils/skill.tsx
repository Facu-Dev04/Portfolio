import {
    IconBrandReact,
    IconBrandDjango,
    IconBrandPython,
    IconBrandTypescript,
    IconBrandNextjs,
    IconBrandMysql,
    IconBrandFigma,
    IconBrandTailwind,
    IconBrandHtml5,
    IconBrandCss3,
} from '@tabler/icons-react';
import { Icon_MaterialUI, Icon_TackStack, Icon_Zustand } from '../../public/Icon/Icon';

const iconSize = 35;


export const skills = [
    {
        id: 1,
        name: 'React',
        icon: <IconBrandReact size={iconSize} />,
        color: 'text-[#61DAFB]',
    },
    {
        id: 2,
        name: 'Django',
        icon: <IconBrandDjango size={iconSize} />,
        color: 'text-green-400',
    },
    {
        id: 3,
        name: 'Python',
        icon: <IconBrandPython size={iconSize} />,
        color: 'text-[#3776AB]',
    },
    {
        id: 4,
        name: 'TypeScript',
        icon: <IconBrandTypescript size={iconSize} />,
        color: 'text-[#3178C6]',
    },
    {
        id: 5,
        name: 'Nextjs',
        icon: <IconBrandNextjs size={iconSize} />,
        color: 'text-[#fff]',
    },
    {
        id: 7,
        name: 'MySQL',
        icon: <IconBrandMysql size={iconSize} />,
        color: 'text-[#00758F]',
    },
    {
        id: 9,
        name: 'Figma',
        icon: <IconBrandFigma size={iconSize} />,
        color: 'text-[#F24E1E]',
    },
    {
        id: 10,
        name: 'Tailwind_CSS',
        icon: <IconBrandTailwind size={iconSize} />,
        color: 'text-[#00758F]', // Color de Tailwind CSS
    },
    {
        id: 11,
        name: 'HTML',
        icon: <IconBrandHtml5 size={iconSize} />,
        color: 'text-[#F24E1E]',
    },
    {
        id: 12,
        name: 'CSS',
        icon: <IconBrandCss3 size={iconSize} />,
        color: 'text-[#3178C6]',
    },
    {
        id: 13,
        name: 'Material UI',
        icon: <Icon_MaterialUI width={35} height={35} />,
        color: 'text-[#3178C6]',
    },
    {
        id: 14,
        name: 'Zustand',
        icon: <Icon_Zustand width={35} height={35} />,
        color: 'text-[#61DAFB]',
    },
    {
        id: 15,
        name: "TackStack Query",
        icon: <Icon_TackStack width={35} height={35}/>,
        color: 'text-[#61DAFB]',
    }

];