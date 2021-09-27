import { RootState } from "@/core";
import { Vehicle } from "../model";
import { GetterTree } from "vuex";
import { State } from "./state";


export type Getters = {
  vehicles(state: State): Vehicle[];
};

export const getters: GetterTree<State, RootState> & Getters = {
  vehicles(state: State): Vehicle[] {
    return state.vehicles;
  },
};