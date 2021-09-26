import { Vehicle } from "@/model/vehicles";
import { MutationTree } from "vuex";
import { State } from "./state";

export type Mutations<S = State> = {
    ADD_VEHICLE(state: S, v: Vehicle): void;
    REMOVE_VEHICLE(state: S, title: string): void;
}

export const mutations: MutationTree<State> & Mutations = {
    ADD_VEHICLE(state: State, vehicle: Vehicle) {
        state.vehicles.push(vehicle);
    },
    
    REMOVE_VEHICLE(state: State, title: string) {
        const idx = state.vehicles.findIndex(v => v.title === title);
        if (idx > -1) {
            state.vehicles.splice(idx, 1);
        }
    }
}