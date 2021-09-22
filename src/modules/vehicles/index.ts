import { ModuleManifest } from './../index';
import VehiclesComponent  from './Vehicles.vue'
import { store } from "./store";

export default {
    routes: [{
        name: "vehicles",
        path: "",
        component: VehiclesComponent,        
        meta: {
            menu: {
                title: "Pojazdy"
            }
        }
    }],

    stores: {
        vehicles: store
    }  
} as ModuleManifest;

