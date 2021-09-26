import { RouteRecordRaw } from "vue-router";
import { routes as vehicleRoutes } from "./vehicles"

export const shellRoutes: RouteRecordRaw[] = [
    ...vehicleRoutes
] ;

declare module "vue-router" {
    interface RouteMeta {
        menu?: {
            title: string
        }
    }
}