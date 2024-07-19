import { Home, Login, Register, Info, TicketPlane } from '~/pages';

import DefaultLayoutEmployee from '~/components/Layout/DefaultLayoutEmployee';

import { AddFlight,ListFilght, Revenuestats, Viewcustomer } from '~/pages';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/info', component: Info, layout: null },
    { path: '/ticketPlane', component: TicketPlane },
    { path: '/listfilght', component: ListFilght, layout: DefaultLayoutEmployee },
    { path: '/addflight', component: AddFlight, layout: DefaultLayoutEmployee },
    { path: '/revenuestats', component: Revenuestats, layout: DefaultLayoutEmployee },
    { path: '/viewcustomer', component: Viewcustomer, layout: DefaultLayoutEmployee },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
