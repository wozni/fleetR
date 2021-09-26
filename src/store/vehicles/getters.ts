import { Vehicle } from "@/model/vehicles";
import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "..";

export type Getters = {
  vehicles(state: State): Vehicle[];
};

export const getters: GetterTree<State, RootState> & Getters = {
  vehicles(state: State): Vehicle[] {
    return state.vehicles;
  },
};