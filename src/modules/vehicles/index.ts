import { AppModule } from '@/core';
import pl from "./locales/pl.json";
import en from "./locales/en.json";
import VehiclesComponent from "./views/vehicles.vue";
import { store as vehicles} from "./store";
import { RootState } from "@/core";
import { State } from "./store/state"

const module : AppModule<RootState, State> = {
    name: "vehicles",
    
    locales: {
        en, pl
    },

    routes: [
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