import { Module } from "vuex";

export interface Vehicle {
    title: string
}

export interface VehiclesState {
    vehicles: Vehicle[]
}

export interface VehicleGetters {
    numOfVehicles: number;
}

export const ADD_VEHICLE = "addVehicle";
export const REMOVE_LAST_VEHICLE = "removeLastVehicle";
export const MODIFY_ALL_VEHICLES = "modifyAllVehicles";

export const store: Module<VehiclesState, any> = {
    state: {
        vehicles: []
    },

    mutations: {
        [ADD_VEHICLE]: (state: VehiclesState, vehicle: Vehicle) => {
            state.vehicles.push(vehicle);
        },

        [REMOVE_LAST_VEHICLE]: (state: VehiclesState) => {
            state.vehicles.splice(state.vehicles.length - 1, 1);
        },


        [MODIFY_ALL_VEHICLES]: (state: VehiclesState) => {
            for (let index = 0; index < state.vehicles.length; index++) {
                const vehicle = state.vehicles[index];
                vehicle.title = vehicle.title.toUpperCase();
            }
        }
    },

    actions: {
        [ADD_VEHICLE]: (store, vehicle) => {
            setTimeout(() => {
                store.commit(ADD_VEHICLE, vehicle)
            }, 3000);
        }
    },

    getters: {
        allVehicles: state => state.vehicles.map(vehicle => ({ ...vehicle, icon: "mdi-car" })),
        numOfVehicles: state => state.vehicles.length
    }
}