import { lazy } from "react";

const Start = lazy(()=>import('../pages/Start/Start'))
const Test = lazy(()=>import('../pages/Test/Test'))


export const routes = [
    {
        name:'شروع کنید',
        path:'/',
        component: Start
    },
    {
        name:'test ',
        path:'/test',
        component: Test
    },
    {
        name:'شروع ggg',
        path:'/ee',
        component: Start
    }
]