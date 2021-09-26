import { RouteRecordRaw } from 'vue-router';
import VehiclesComponent  from './vehicles.vue'

export const routes: RouteRecordRaw[] =  [{
        name: "vehicles",
        path: "",
        component: VehiclesComponent,        
        meta: {
            menu: {
                title: "vehicles.vehicles"
            }
        }
    }];


