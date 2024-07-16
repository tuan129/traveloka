import { Home, Login, Register, Info, TicketPlane } from '~/pages';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/info', component: Info, layout: null },
    { path: '/TicketPlane', component: TicketPlane },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
