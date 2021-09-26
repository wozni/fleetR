import { RouteRecordRaw } from "vue-router";
import { routes as vehicleRoutes } from "./vehicles"

export const shellRoutes: RouteRecordRaw[] = [
    ...vehicleRoutes
] ;