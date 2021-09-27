import { LocaleMessages } from 'vue-i18n';
import { RouteRecordRaw } from 'vue-router';
import { Module, ModuleTree } from 'vuex';
import  VehiclesModule from "./modules/vehicles"
import { VehiclesStore } from '@/modules/vehicles/store';
import { State as VehiclesState } from "@/modules/vehicles/store/state";
import { inject } from 'vue';

export interface User {
    login: string
}

export interface AppModule<R = RootState, S = any> {
    name: string,
    routes?: RouteRecordRaw[],
    stores?: ModuleTree<R>,
    locales?: LocaleMessages,
    init?: (ctx: AppContext) => void;
}


export interface AppContext {
    user?: User;
    features: any,
    modules: AppModule[]
}

export function useAppContext(): AppContext {
    return inject<AppContext>("context")!;
}

export function createAppContext(): AppContext {
    return {
        features: {},
        modules: [VehiclesModule]
    }
}

export interface RootState {
    vehicles: VehiclesState
}

type RootStore = VehiclesStore<Pick<RootState, "vehicles">>;

declare module "vuex" {
    export function useStore(): RootStore;
}

declare module "vue-router" {
    interface RouteMeta {
        menu?: {
            title: string,
            icon: string
        }
    }
}