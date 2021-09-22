import { VehiclesState, VehicleGetters } from './vehicles/store';
import { RouteRecordRaw } from 'vue-router';
import { CommitOptions, DispatchOptions, ModuleTree, Store } from 'vuex';
import Vehicles from './vehicles';

export const moduleRoutes: RouteRecordRaw[] = [
    ...Vehicles.routes
];

export const moduleStores: ModuleTree<any> = {
    ...Vehicles.stores
}

export interface ModuleManifest {
    routes: RouteRecordRaw[],
    stores: ModuleTree<any>
}

export interface State {
    vehicles: VehiclesState
}

export interface Getters {
    vehicles: VehicleGetters;
}

export interface Mutations {
    test(): void;
}

export interface Actions {
    test(): void;
}

