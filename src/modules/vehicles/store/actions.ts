import { Vehicle } from "../model";
import { ActionContext, ActionTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/core";
import { Mutations } from "./mutations";

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
  } & Omit<ActionContext<State, RootState>, 'commit'>;
  
  export interface Actions {
    addVehicle({ commit }: AugmentedActionContext, todo: Vehicle): void;
    removeVehicle({ commit }: AugmentedActionContext, title: string): void;
  }

  export const actions: ActionTree<State, RootState> & Actions = {
      addVehicle({ commit } : AugmentedActionContext, vehicle: Vehicle) {
          commit("ADD_VEHICLE", vehicle);
      },

      removeVehicle({ commit} : AugmentedActionContext, title: string) {
          commit("REMOVE_VEHICLE", title);
      }
  }