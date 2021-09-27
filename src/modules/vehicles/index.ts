import { AppContext, AppModule } from '@/core';
import VehiclesComponent from "./views/vehicles.vue";
import { store as vehicles} from "./store";

const module : AppModule = {
    name: "vehicles",
    

    routes: [
        {
            path: "",
            redirect: {
                name: "vehicles"
            }            
        },
        {
            path: "vehicles",
            name: "vehicles",
            component: VehiclesComponent,
            meta: {
                menu: {
                    title: "shell.menu.vehicles",
                    icon: "mdi-car-multiple"
                }
            }
        }
    ],

    stores: {
        vehicles
    },

    initShell: (context: AppContext) => {
        if (context){
            console.log('a')
        }
    }
}
export default module;