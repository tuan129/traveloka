import { Home, Login, Register, Info } from '~/pages';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/info', component: Info, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
