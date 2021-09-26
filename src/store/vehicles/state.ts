import { Vehicle } from "@/model/vehicles";

export interface State {
    vehicles: Vehicle[]
}

export const state: State = {
    vehicles: [{
        title: "Pojazd numer jeden"
    }]
}