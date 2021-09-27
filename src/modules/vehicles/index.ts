import { AppModule } from '@/core';
import pl from "./locales/pl.json";
import en from "./locales/en.json";
import VehiclesComponent from "./views/vehicles.vue";
import { store as vehicles} from "./store";

const module : AppModule = {
    name: "vehicles",
    
    locales: {
        en, pl
    },

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
                    title: "vehicles.vehicles",
                    icon: "mdi-car-multiple"
                }
            }
        }
    ],

    stores: {
        vehicles
    }
}
export default module;