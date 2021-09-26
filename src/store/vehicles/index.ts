import { CommitOptions, DispatchOptions, Module, Store } from "vuex";
import { RootState } from "..";
import { Actions, actions } from "./actions";
import { Getters, getters } from "./getters";
import { Mutations, mutations } from "./mutations";
import { State, state } from "./state";

type Namespaced<T, N extends string> = {
    [P in keyof T & string as `${N}/${P}`]: T[P];
};

export type NamespacedMutations = Namespaced<Actions, 'vehicles'>;

export type VehiclesStore<S = State> = Omit<Store<S>, 'getters' | 'commit' | 'dispatch'> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>;
} & {
    dispatch<K extends keyof NamespacedMutations>(
        key: K,
        payload: Parameters<NamespacedMutations[K]>[1],
        options?: DispatchOptions
    ): ReturnType<NamespacedMutations[K]>;
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>;
    };
};

export const store: Module<State, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};