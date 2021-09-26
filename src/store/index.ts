import { createStore } from 'vuex'
import { store as vehicles,  VehiclesStore } from "./vehicles";
import { State as VehiclesState } from "./vehicles/state"

export interface RootState {
    vehicles: VehiclesState
}

type RootStore = VehiclesStore<Pick<RootState, "vehicles">>;

export default createStore({
    modules: {
        vehicles
    }
})


declare module "vuex" {
    export function useStore(): RootStore;
}
