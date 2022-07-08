import {RouteRecordRaw} from "vue-router";

const tableRouter:Array<RouteRecordRaw> = [
    {
        path:'/table',
        name:'table',
        component: () => import(/* webpackChunkName: "table" */ "@/views/table/index.vue"),
        meta: {
            keepAlive: true,
            requiresAuth: true,
            title: "超级表格",
            key: "table"
        }

    }
]

export default tableRouter;
