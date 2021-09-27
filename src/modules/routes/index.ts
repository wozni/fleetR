import { AppModule } from '@/core';
import RoutesComponent from "./views/routes.vue";

const module : AppModule = {
    name: "vehicles",

    routes: [
        {
            name: "routes",
            path: "routes",
            component: RoutesComponent,
            meta: {
                menu: {
                    title: "shell.menu.routes",
                    icon: "mdi-cogs"
                }
            }
        }
    ]
}

export default module;