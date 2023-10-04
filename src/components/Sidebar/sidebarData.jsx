import { FiHome } from 'react-icons/fi';
import { TfiStatsUp } from 'react-icons/tfi';
import { BsPerson } from 'react-icons/bs';
import { GoReport} from 'react-icons/go';
import {AiOutlineUser} from 'react-icons/ai';

export const sidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FiHome />,
        cName: 'nav-text'
    },
    {
        title: 'Estatísticas',
        path: '/statics',
        icon: <TfiStatsUp />,
        cName: 'nav-text'
    },
    {
        title: 'Clientes',
        path: '/clients',
        icon: <BsPerson />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/',
        icon: <GoReport />,
        cName: 'nav-text'
    },
    {
        title: 'Conta',
        path: '/',
        icon: <AiOutlineUser />,
        cName: 'nav-text'
    },
]